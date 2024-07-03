describe('FormValidations', () => {
  beforeEach(() => {
  cy.visit('https://dev-fe.buttonshift.com');
  });
  
//To verify all fields are Required

 it('It should not allow if the required field is missing', () => {
    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();

    //Ensure that the Required field is missing
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the Email is required message is visible
    cy.xpath('//p[@id="mui-2-helper-text"]').should('be.visible');

 });

  it('Ensure that the password field is required message is visible' , () => {

    //Ensure that the signup button is clickable 
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    //cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys1@gmail.com');
    
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible');
    cy.xpath('//input[@id="mui-4"]').should('be.visible');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    

    //Ensure that the password field is required message is visible
    cy.xpath('//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium css-beuis0"]').should('be.visible');

  });


  it('Ensure that the repeated password is required message is visible' , () => {

    //Ensure that the signup button is clickable 
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    //cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys2@gmail.com');
    
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible');
    cy.xpath('//input[@id="mui-4"]').should('be.visible');


    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    

    //Ensure that the password field is required message is visible
    cy.xpath('//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium css-beuis0"]').should('be.visible');

  });

  it('Ensure that the OTP is required message is visible',() => {

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();

    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys3@gmail.com');
  
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();


    //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
   // cy.xpath('//input[@placeholder="Retype password"]').should('be.visible').type('abc@1234');
   cy.xpath('//input[@id="mui-4"]').should('be.visible').type('abc@1234');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    cy.xpath('//input[@aria-label="Please enter verification code. Digit 1"]').should('be.visible');
    cy.xpath('//input[@aria-label="Digit 2"]').should('be.visible');
    cy.xpath('//input[@aria-label="Digit 3"]').should('be.visible');
    cy.xpath('//input[@aria-label="Digit 4"]').should('be.visible');
    cy.xpath('//input[@aria-label="Digit 5"]').should('be.visible');
    cy.xpath('//input[@aria-label="Digit 6"]').should('be.visible');

    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure the OTP is required message is visible
    cy.xpath('//div[@class="MuiTypography-root MuiTypography-body1 css-dede6r"]').should('be.visible');

    cy.xpath('//input[@aria-label="Please enter verification code. Digit 1"]').should('be.visible').type('1');
    cy.xpath('//input[@aria-label="Digit 2"]').should('be.visible').type('2');
    cy.xpath('//input[@aria-label="Digit 3"]').should('be.visible').type('3');
    cy.xpath('//input[@aria-label="Digit 4"]').should('be.visible').type('4');
    cy.xpath('//input[@aria-label="Digit 5"]').should('be.visible').type('5');
    cy.xpath('//input[@aria-label="Digit 6"]').should('be.visible').type('6');

    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    
  });  



  it('Ensure that the please enter valid username message is visible',() => {

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys4@gmail.com');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

   //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible').type('abc@1234');
    cy.xpath('//input[@id="mui-4"]').should('be.visible').type('abc@1234');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    
    //Ensure the OTP is required message is visible
    cy.xpath('(//div[contains(@class,"MuiTypography-root MuiTypography-body1 css-dede6r")])[1]').should('be.visible');

    cy.xpath('//input[@aria-label="Please enter verification code. Digit 1"]').should('be.visible').type('1');
    cy.xpath('//input[@aria-label="Digit 2"]').should('be.visible').type('2');
    cy.xpath('//input[@aria-label="Digit 3"]').should('be.visible').type('3');
    cy.xpath('//input[@aria-label="Digit 4"]').should('be.visible').type('4');
    cy.xpath('//input[@aria-label="Digit 5"]').should('be.visible').type('5');
    cy.xpath('//input[@aria-label="Digit 6"]').should('be.visible').type('6');

    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    cy.xpath('//input[@placeholder="Enter username"]').should('be.visible').clear();
    cy.wait(5000);
    cy.xpath('//input[@placeholder="Enter username"]').should('be.visible').clear();
    
    //Ensure that the please enter valid username message is visible
    cy.xpath('//div[@class="MuiTypography-root MuiTypography-body1 css-dede6r"]').should('be.visible');
    
  });



  it('Ensure that the please choose location  message is visible',() => {

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys5@gmail.com');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

   //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
   // cy.xpath('//input[@placeholder="Retype password"]').should('be.visible').type('abc@1234');
   cy.xpath('//input[@id="mui-4"]').should('be.visible').type('abc@1234');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure the OTP is required message is visible
    cy.xpath('//div[@class="MuiTypography-root MuiTypography-body1 css-dede6r"]').should('be.visible');

    cy.xpath('//input[@aria-label="Please enter verification code. Digit 1"]').should('be.visible').type('1');
    cy.xpath('//input[@aria-label="Digit 2"]').should('be.visible').type('2');
    cy.xpath('//input[@aria-label="Digit 3"]').should('be.visible').type('3');
    cy.xpath('//input[@aria-label="Digit 4"]').should('be.visible').type('4');
    cy.xpath('//input[@aria-label="Digit 5"]').should('be.visible').type('5');
    cy.xpath('//input[@aria-label="Digit 6"]').should('be.visible').type('6');

    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    cy.xpath('//input[@placeholder="choose location"]').should('be.visible');
    cy.wait(6000);
    cy.xpath('//input[@placeholder="choose location"]').type('India').click({force:true});
    cy.xpath('//div[@class="MuiAutocomplete-endAdornment css-2iz2x6"]').should('be.visible').click();
    cy.xpath('//input[@placeholder="choose location"]').should('be.visible');
    cy.xpath('//input[@placeholder="choose location"]').type('India').click({force:true});

    //Ensure that the dropdown is closed by clicking anywhere on the screen 
    cy.xpath('//div[@class="custom-scrollbar MuiBox-root css-1xjsat8"][1]').click({force:true});
    //Ensure that the please choose location message is visible
    cy.xpath('//div[@class="MuiAutocomplete-endAdornment css-2iz2x6"]').should('be.visible').click();
    
  });
  

//Email Validation

  it('It should not allow if the required field is missing', () => {
    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();

    //Ensure that the Required field is missing
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the Email is required message is visible
    cy.xpath('//p[@id="mui-2-helper-text"]').should('be.visible');

  });

 
  it('Ensure that the email address with only alphabets is entered', () => { 

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();

    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('abcd');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the Please enter a valid email address message is visible
    cy.xpath('//p[@id="mui-2-helper-text"]').should('be.visible');

 });


  it('Ensure that the email address with only numbers is entered' , () => {

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();  
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();

    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('12345');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
  
    //Ensure that the Please enter a valid email address message is visible
    cy.xpath('//p[@id="mui-2-helper-text"]').should('be.visible');

  });



  it('Ensure that the email address with special characters is entered' ,() => {

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();   
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();

    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('!@#@$$%');

    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
  
    //Ensure that the Please enter a valid email address message is visible
    cy.xpath('//p[@id="mui-2-helper-text"]').should('be.visible');

  });

  
  it('Ensure that the valid email address is entered' , () => {

    //Ensure that the signup button is clickable
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();

    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys6@gmail.com');
  
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

  });  

//Password meets Requirement

  it('Ensure that the password field is required message is visible' , () => {

    //Ensure that the signup button is clickable 
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    //cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys7@gmail.com');
    
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible');
    cy.xpath('//input[@id="mui-4"]').should('be.visible');


    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    

    //Ensure that the password field is required message is visible
    cy.xpath('//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium css-beuis0"]').should('be.visible');

  });


  it('Ensure that the repeated password is required message is visible' , () => {

    //Ensure that the signup button is clickable 
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    //cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys8@gmail.com');
    
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible');
    cy.xpath('//input[@id="mui-4"]').should('be.visible');


    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    

    //Ensure that the password field is required message is visible
    cy.xpath('//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium css-beuis0"]').should('be.visible');

  });


 
  it('Ensure that the message is visble if password does not match' , () => {

    //Ensure that the signup button is clickable 
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    //cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys9@gmail.com');
    
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the password does not match
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@1234');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible').type('abc1234');
    cy.xpath('//input[@id="mui-4"]').should('be.visible').type('abc@123');


    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    

    //Ensure that the passwords did not match message is visible
    cy.xpath('//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-filled css-beuis0"]').should('be.visible');

  }); 

  it('Ensure that the passwords must be atleast 8 characters message is visible' , () => {

    //Ensure that the signup button is clickable 
    cy.xpath("//button[normalize-space()='Sign up']").should('be.visible').click();    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').clear();
    
    cy.xpath('//input[@placeholder="Enter email address"]').should('be.visible').type('bys10@gmail.com');
    
    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();

    //Ensure that the password should be atleast 8 characters
    cy.xpath('//input[@placeholder="Enter password"]').should('be.visible').type('abc@123');
    //cy.xpath('//input[@placeholder="Retype password"]').should('be.visible').type('abc@123');
    cy.xpath('//input[@id="mui-4"]').should('be.visible').type('abc@123');


    //Ensure that it is going to the next page after clicking on the arrow button
    cy.xpath('//button[@type="submit"]//*[name()="svg"]').click();
    

    //Ensure that the passwords must be atleast 8 characters message is visible
    cy.xpath('//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-filled css-beuis0"]').should('be.visible');
    
  });  

});


