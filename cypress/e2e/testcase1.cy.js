
describe('SignUp and Login', () => {
  beforeEach(() => {
  cy.visit('https://dev-fe.buttonshift.com');
  });
  
  it('signup', () => {
  //Ensure that the signup button is clickable
  cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();

  //Ensure that the email address is entered
  cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('yux@gmail.com');

  //Ensure that it is going to the next page after clicking on the arrow button
  cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

  //Ensure that the password is entered 
  cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
  //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible').type('abc@1234');
  cy.xpath('//input[@id="mui-4"]').should('be.visible').type('abc@1234');

  //Ensure that it is going to the next page after clicking on the arrow button
  cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

  //Ensure that the OTP is entered
  cy.xpath('//input[@aria-label="Please enter verification code. Digit 1"]').should('be.visible').type('1');
  cy.xpath('//input[@aria-label="Digit 2"]').should('be.visible').type('2');
  cy.xpath('//input[@aria-label="Digit 3"]').should('be.visible').type('3');
  cy.xpath('//input[@aria-label="Digit 4"]').should('be.visible').type('4');
  cy.xpath('//input[@aria-label="Digit 5"]').should('be.visible').type('5');
  cy.xpath('//input[@aria-label="Digit 6"]').should('be.visible').type('6');

 //Ensure that it is going to the next page after clicking on the arrow button
  cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
  
  //Ensure that the Location is selected from the dropdown
  cy.xpath('//input[@placeholder="choose location"]').should('be.visible');
 
  cy.wait(6000);
  cy.xpath('//input[@placeholder="choose location"]').type('United Kingdom').click({force:true});
  
  cy.get('li[role="option"]').contains('United Kingdom').click({force:true});
 
  cy.xpath('//input[@placeholder="choose location"]').should('have.value','United Kingdom').click({force:true});
 
  cy.wait(2000);
  
  //Ensure that the phone number is selected from the dropdown

  cy.xpath('//input[@placeholder="enter your phone number"]').should('be.visible');
  
  cy.xpath('//input[@placeholder="enter your phone number"]').click({ force: true }).type('2012341234').click({ force: true }); 
  cy.wait(6000);
 
  cy.get('[data-cy="signup-phone-verify-button"]').click();

  cy.xpath('//input[@aria-label="Please enter verification code. Digit 1"]').should('be.visible').type('1');
  cy.xpath('//input[@aria-label="Digit 2"]').should('be.visible').type('2');
  cy.xpath('//input[@aria-label="Digit 3"]').should('be.visible').type('3');
  cy.xpath('//input[@aria-label="Digit 4"]').should('be.visible').type('4');
  cy.xpath('//input[@aria-label="Digit 5"]').should('be.visible').type('5');
  cy.xpath('//input[@aria-label="Digit 6"]').should('be.visible').type('6');

  cy.xpath('//button[@data-cy="signup-submit-button"]').should('be.visible').click();

  //cy.xpath('//button[normalize-space()="Login"]').click();

  cy.wait(10000);
  cy.xpath('(//*[name()="svg"][@id="Icons"])[1]').click();
  cy.xpath('//button[@aria-label="Logout"]//*[name()="svg"]').click();   

  });
  

  it('Login', () => {

    cy.visit('https://dev-fe.buttonshift.com');
    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Log in']").should('be.visible').click();
  
    //Ensure that the email address is entered
    //cy.xpath('//input[@type="text"]').should('be.visible').type('deepikagottimukkula1@gmail.com');
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('deepikagottimukkula22@gmail.com');
  
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
  
   cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
  
   cy.xpath('//button[normalize-space()="Login"]').click();
  
   cy.wait(10000);
   cy.xpath('(//*[name()="svg"][@id="Icons"])[1]').click();
   cy.xpath('//button[@aria-label="Logout"]//*[name()="svg"]').click();
  
  
  }); 

});