const { setWorldConstructor, setDefaultTimeout } = require('cucumber')
const seleniumWebdriver = require('selenium-webdriver')
const chai = require('chai')

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()
    global.By = seleniumWebdriver.By
    global.until = seleniumWebdriver.until
    global.expect = chai.expect

    this.getPrice = function(text){
        return text.match(/(\$[0-9]*)/g)[0]
    }
}

setDefaultTimeout(60 * 1000)
setWorldConstructor(CustomWorld)
