export default {
    env: 'production',
    serverHost: process.env.IOT_SERVER,
    basicAuthUsername: process.env.IOT_BASIC_AUTH_USERNAME,
    basicAuthPassword: process.env.IOT_BASIC_AUTH_PASSWORD,
    username: process.env.IOT_USERNAME,
    password: process.env.IOT_PASSWORD,
    debug: process.env.IOT_DEBUG,
    longitude: process.env.IOT_RASPI_LONGITUDE,
    latitude: process.env.IOT_RASPI_LATITUDE,
    successLedGPIO: process.env.IOT_RASPI_SUCCESS_LED_GPIO,
    errorLedGPIO: process.env.IOT_RASPI_ERROR_LED_GPIO,
    ledBlinkDurationInMs: process.env.IOT_RASPI_LED_BLINK_DURATION_IN_MS,
    ledBlinkTotalPeriodInMs: process.env.IOT_RASPI_LED_BLINK_TOTAL_IN_MS,
    dhtType: process.env.IOT_RASPI_DHT_TYPE,
    dhtGPIO: process.env.IOT_RASPI_DHT_GPIO
};