export default {
  env: "development",
  serverUrl: "http://192.168.0.100:9000/api",
  basicAuthUsername: "admin",
  basicAuthPassword: "admin",
  username: "admin",
  password: "aA12345678&",
  debug: true,
  longitude: -8.4,
  latitude: 43.4,
  topic: "home/raspi",
  successLedGPIO: 20,
  errorLedGPIO: 21,
  ledBlinkDurationInMs: 100,
  ledBlinkTotalPeriodInMs: 5000,
  dhtType: 11,
  dhtGPIO: 24,
  nodePort: 8080,
  socketInterval: 5000,
};
