describe('Access register and test password no digits error', () => {
  it('Password field should throw an error for no digit is used', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Register text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[1]/a').click();

    // Test the no digits error
    cy.xpath('/html/body/div[2]/form/div[2]/div/input').clear().type('test@test.com');
    cy.xpath('/html/body/div[2]/form/div[3]/div/input').clear().type('Password');
    cy.xpath('/html/body/div[2]/form/div[4]/div/input').clear().type('Password');
    cy.xpath('//html/body/div[2]/form/div[5]/div/input').click();
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li').should('be.visible').contains('Passwords must have at least one digit');
  });
});