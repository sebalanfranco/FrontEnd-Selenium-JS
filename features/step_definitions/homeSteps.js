const { When, Then } = require('cucumber')
const HomePage = require('../pages/HomePage')

Then(/^User should be in Kayak home page$/, async function() {
    homePage = new HomePage(this)
    expect(await homePage.logo.isDisplayed()).to.equal(true)
})
