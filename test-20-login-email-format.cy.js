describe('Access Log in and test email inputs', () => {
  it('Email field should accept valid inputs and reject invalid ones', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // Define a list of test emails
    const validTestEmails =
    [
    'test1@example.com',
    'test2@example.co',
    '12353243@32343421.com',
    // Add more test emails here as needed  
    ];
    const invalidTestEmails =
    [
      'test4example.com',
    '@test5example.com',
    'test6@example.',
    '¿?¿·$%&()@¿???¿.com',
    ];
    // test empty email field errors
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[4]/div/input').click();
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[1]/div/span/span').should('be.visible').contains('The Email field is required');
    
    // Loop over the test emails and run the test for each one
    validTestEmails.forEach((validTestEmail) => {
      // Test if email input field accepts the email
      cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[1]/div/input').clear().type(validTestEmail);
      cy.get('#loginForm > form > div:nth-child(7) > div > input').click();
      cy.xpath('//*[@id="Email-error"][contains(., "The Email field is not a valid e-mail address")]')
      .should('not.exist');
    });
  
    // Test if email input field rejects an invalid email
    invalidTestEmails.forEach((invalidTestEmail) => {
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[1]/div/input').clear().type(invalidTestEmail);
    cy.get('#loginForm > form > div:nth-child(7) > div > input').click();
    cy.xpath('//*[@id="Email-error"]').should('be.visible').contains('The Email field is not a valid e-mail address');
    });
  });
});