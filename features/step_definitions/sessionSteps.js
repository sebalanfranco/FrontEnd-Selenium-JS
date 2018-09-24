const { When } = require('cucumber')
const BasePage = require('../pages/BasePage')

When(/^User goes to page "(.*)"$/, async function(pageUrl) {
    basePage = new BasePage(this)
    await basePage.goTo(pageUrl)
})
