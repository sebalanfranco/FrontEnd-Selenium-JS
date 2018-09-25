Feature: Home
    As a Kayak web site visitor user
    I want to navigate the home page

    @smoke
    Scenario: Validate that user is redirected to the Home page
        When User goes to page "https://www.kayak.com"
        Then User should be in Kayak home page
        
