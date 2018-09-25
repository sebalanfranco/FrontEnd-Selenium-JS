Feature: Cars rental
    As a Kayak web site visitor user
    I want to navigate the cars page

    Background:
        Given User goes to page "https://www.kayak.com"
        And User selects "Cars" option on the menu

    @smoke
    Scenario: Validate that user is redirected to the Home page
        Then User should be in Kayak cars page

    @sanity
    Scenario: Validate that user can perform a basic search for car rental
        When User selects "Cars" option on the menu
        And User enters "COR" as pickup location
        And User presses Search button
        Then User should see more than "1" results

    @regression
    Scenario: Validate lowest car rental price for a 2-day rental when returning to same location is lower than when returning to a different location
        When User selects "Cars" option on the menu
        And User enters "COR" as pickup location
        And User presses Search button
        And User stores the price of the first result
        And User selects "Different Drop-off"
        And User enters "EZE" as dropoff location
        And User presses Search button
        And User sorts by "Price (descendent)"
        Then User should see that the price is higher than previous search
