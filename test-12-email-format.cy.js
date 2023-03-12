describe('Access register and test email inputs', () => {
  it('Email field should accept valid inputs and reject invalid ones', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Register text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[1]/a').click();

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
    cy.get('body > div.container.body-content > form > div:nth-child(8) > div > input').click();
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li[1]').should('be.visible').contains('The Email field is required');
    
    // Loop over the test emails and run the test for each one
    validTestEmails.forEach((validTestEmail) => {
      // Test if email input field accepts the email
      cy.xpath('/html/body/div[2]/form/div[2]/div/input').clear().type(validTestEmail);
      cy.get('body > div.container.body-content > form > div:nth-child(8) > div > input').click();
      cy.xpath('/html/body/div[2]/form/div[1]/ul/li[contains(., "The Email field is not a valid e-mail address")]')
      .should('not.exist');
    });
  
    // Test if email input field rejects an invalid email
    invalidTestEmails.forEach((invalidTestEmail) => {
    cy.xpath('/html/body/div[2]/form/div[2]/div/input').clear().type(invalidTestEmail);
    cy.get('body > div.container.body-content > form > div:nth-child(8) > div > input').click();
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li[1]').should('be.visible').contains('The Email field is not a valid e-mail address');
    });
  });
});