Feature: Basic Use

    @integration
    Scenario: User is able to generate new account
        Given the user accesses the url "/"
        And the test account user does not exist
        When the user clicks the link "Log In"
        And the user enters his credentials if necessary
        Then a new account will be created using the test e-mail address
        And the page contains the heading "Terms and Conditions of Use of Inthe.AM"
        And the user accepts the terms and conditions
        When the user clicks the link "Log Out"
        And the user clicks the link "Log In"
        Then the page contains the heading "Let's get started"
