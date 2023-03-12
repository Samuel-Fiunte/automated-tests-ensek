describe('Access register and test short password error', () => {
  it('Password field should throw an error for short password', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Register text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[1]/a').click();

    // Test the short password error
    cy.xpath('/html/body/div[2]/form/div[3]/div/input').clear().type('Pass');
    cy.xpath('//html/body/div[2]/form/div[5]/div/input').click();
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li[2]').should('be.visible');
    cy.xpath('/html/body/div[2]/form/div[1]/ul/li[2]').should('be.visible').contains('The Password must be at least 6 characters long');
  });
});