describe('Access register and test empty password error', () => {
  it('Password field should throw an error if no password is written', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // test empty password field error
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[4]/div/input').click();
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[2]/div/span/span').should('be.visible').contains('The Password field is required');
  });
});