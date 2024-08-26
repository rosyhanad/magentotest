class LoginPage {
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dC8%2C/')
    }
    InputEmail(email){
        cy.get('#email').type(email)    
    }
    ClearEmail(){
        cy.get('#email').clear()
    }
    InputPass(pass){
        cy.get('#pass').type(pass)
    }
    ClearPass(){
        cy.get('#pass').clear()
    }
    clickButton(){
        cy.get('#send2').click()
    }
    errorEmail(){
        cy.get('#email-error').should ('have.text', 'This is a required field.')
    }
    errorPass(){
        cy.get('#pass-error').should ('have.text', 'This is a required field.')
    }
    IncorrectEmail(){
        cy.get('#email-error').should ('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    }
    IncorrectPass(){
        cy.get('.message-error').should ('have.text', '\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n')
    }
    succesLogin(){
        cy.get('.logged-in').should('have.text', 'Welcome, Rohan Rohanna!Welcome, Rohan Rohanna!')
    }
}
module.exports = new LoginPage();