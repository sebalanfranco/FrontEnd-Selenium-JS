const { When, After } = require('cucumber')

When(/^User goes to page "(.*)"$/, async function(pageUrl) {
    await this.driver.get(pageUrl)
})

After(function(pageUrl) {
    this.driver.close()
})
