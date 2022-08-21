import http from 'k6/http';
import { sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export default function () {
  const resposta = randomIntBetween(1, 4);  
  switch (resposta)
  {
      case 1:
        http.get('#{URL_WEB_APP}#/Votacao/VotoEsportes');
        break;
      case 2:
        http.get('#{URL_WEB_APP}#/Votacao/VotoTecnologia');
        break;
      case 3:
        http.get('#{URL_WEB_APP}#/Votacao/VotoFilmes');
        break;
      case 4:
        http.get('#{URL_WEB_APP}#/Votacao/VotoSeriados');
        break;
  }
  sleep(1);
}

export function handleSummary(data) {
    return {
      "loadtests-results.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true })
    };
}