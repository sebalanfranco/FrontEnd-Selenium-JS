const { When, Then } = require('cucumber')

When(/^User selects "(.*)" option on the menu$/, async function(menuOption) {
    switch (menuOption) {
        case 'Flights':
            selector = 'js-vertical-flights'
            break;
        case 'Hotels':
            selector = 'js-vertical-hotels'
            break;
        case 'Cars':
            selector = 'js-vertical-cars'
            break;
        case 'Packages':
            selector = 'js-vertical-packages'
            break;
        default:
            throw new Exception('Menu option not valid.')
    }
    return this.driver.findElement(By.className(selector)).findElement(By.css('a')).click()
})

Then(/^User should be in Kayak home page$/, async function() {
    expect(await this.driver.findElement(By.id('logo')).isDisplayed()).to.equal(true)
})
