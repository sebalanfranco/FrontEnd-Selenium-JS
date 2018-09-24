const { setWorldConstructor, setDefaultTimeout, AfterAll } = require('cucumber')
const seleniumWebdriver = require('selenium-webdriver')
const chai = require('chai')

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()
    global.By = seleniumWebdriver.By
    global.expect = chai.expect
}

setDefaultTimeout(60 * 1000)
setWorldConstructor(CustomWorld)
