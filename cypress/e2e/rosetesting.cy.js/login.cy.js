import LoginPage from '../../support/pages/login'

describe("Login test dengan menggunakan POM dan env", ()=>{
    beforeEach('Mengakses Halaman Login dari magento',()=>{
        cy.clearCookies() 
        LoginPage.visit() 
    })
    
    it('Mengosongkan Email dan Password',()=>{
        LoginPage.ClearEmail()
        LoginPage.ClearPass()
        LoginPage.clickButton()
        LoginPage.errorEmail()
        LoginPage.errorPass()
    })
    it('Mengosongkan Email Saja',()=>{
        LoginPage.ClearEmail()
        LoginPage.InputPass(Cypress.env('Pass'))
        LoginPage.clickButton()
        LoginPage.errorEmail()
    })
    it('Mengosongkan Password saja', ()=>{
        LoginPage.InputEmail(Cypress.env('Email'))
        LoginPage.ClearPass()
        LoginPage.clickButton()
        LoginPage.errorPass()
    })
    it('Mengisi dengan invalid pass',()=>{
        LoginPage.InputEmail(Cypress.env('Email'))
        LoginPage.InputPass(Cypress.env('invalidPass'))
        LoginPage.clickButton()
        LoginPage.IncorrectPass()
    })
    it('Mengisi dengan invalidEmail',()=>{
        LoginPage.InputEmail(Cypress.env('invalidEmail'))
        LoginPage.InputPass(Cypress.env('Email'))
        LoginPage.clickButton()
        LoginPage.IncorrectEmail()
    })
    it('Mengisi Email dan Password yang sesuai', ()=>{
        LoginPage.InputEmail(Cypress.env('Email'))
        LoginPage.InputPass(Cypress.env('Pass'))
        LoginPage.clickButton()
        LoginPage.succesLogin()
    })
})