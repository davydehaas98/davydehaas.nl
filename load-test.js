import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  duration: "30s",
  vus: 50,
  thresholds: {
    // http errors should be less than 1%
    http_req_failed: ['rate<0.01'],
    // 90% of requests should be below 1000ms
    http_req_duration: ['p(90)<1000']
  }
}

export default function test() {
  const response = http.get("https://davydehaas.nl")

  check(response, {
    "http2 is used": (r) => r.proto === "HTTP/2.0",
    "status was 200": (r) => r.status === 200,
  })
  // Random sleep between 2s and 5s
  sleep(Math.random() * 3 + 2)
}
