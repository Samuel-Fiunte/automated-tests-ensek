describe('Access register and test empty password error', () => {
  it('Password field should throw an error if no password is written', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Register text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[1]/a').click();

    // test empty password field error
    cy.xpath('//html/body/div[2]/form/div[5]/div/input').click();
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li[2]').should('be.visible').contains('The Password field is required');

    // test the password and confirmation do not match error
    cy.xpath('/html/body/div[2]/form/div[3]/div/input').clear().type('Password123!');
    cy.xpath('/html/body/div[2]/form/div[5]/div/input').click();
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li[contains(text(),"The password and confirmation password do not match")]').should('be.visible');
  });
});