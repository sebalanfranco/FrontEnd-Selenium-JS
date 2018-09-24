module.exports  = function(context) {
    this.goTo = function(url){
        return context.driver.get(url)
    }
}
