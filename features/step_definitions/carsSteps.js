const { When, Then } = require('cucumber')
var firstResult

When(/^User enters "(.*)" as (pickup|dropoff) location$/, async function (location, option) {
    if(option == 'pickup'){
        await this.driver.findElement(By.className('js-pickUpCol')).click()
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(By.css('input[name="pickup"]'))),10000)
        await this.driver.findElement(By.css('input[name="pickup"]')).sendKeys(location)
        await this.driver.wait(until.elementLocated(By.className('smartbox-js')),10000)
        await this.driver.findElement(By.css('.smartbox-js li')).click()
    } else {
        await this.driver.findElement(By.className('js-dropOffCol')).click()
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(By.css('input[name="dropoff"]'))),10000)
        await this.driver.findElement(By.css('input[name="dropoff"]')).sendKeys(location)
        await this.driver.wait(until.elementLocated(By.className('smartbox-js')),10000)
        await this.driver.findElement(By.css('.smartbox-js li')).click()
    }
})

When(/^User enters "(.*)" as (start|end) date$/, async function (date, option) {
    //TODO
})

When(/^User presses Search button$/, async function () {
    await this.driver.findElement(By.className('searchBtn')).click()
})

When(/^User sorts by "(.*)"$/, async function (sortOption) {
    //TODO
})

When(/^User stores the price of the first result$/, async function () {
    await this.driver.wait(until.elementLocated(By.className('CarResultsList')),10000)
    firstResultText = await this.driver.findElement(By.className('CarResultsList')).findElement(By.className('js-result')).getText()
    firstResult = this.getPrice(firstResultText)
})

When(/^User selects "(.*)"$/, async function (dropoffOption) {
    //TODO
})

Then(/^User should be in Kayak cars page$/, async function () {
    expect((await this.driver.findElements(By.className('Cars-Search-StyleJamCarSearchForm'))).length).to.be.above(0)
})

Then(/^User should see more than "(.*)" results$/, async function (results) {
    await this.driver.wait(until.elementLocated(By.className('CarResultsList')),10000)
    expect((await this.driver.findElements(By.className('js-result'))).length).to.be.above(results)
})

Then(/^User shuold see that the price is higher than previous search$/, async function () {
    await this.driver.wait(until.elementLocated(By.className('CarResultsList')),10000)
    firstResultText = await this.driver.findElement(By.className('CarResultsList')).findElement(By.className('js-result')).getText()
    expect(this.getPrice(firstResultText)).to.be.above(firstResult)
})
