describe('Access buy energy', () => {
  it('should access buy energy', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Buy energy button in the homepage
    cy.get('body > div.container.body-content > div.row > div:nth-child(1) > p:nth-child(3) > a').click();
    // Assert that the URL is the expected
    cy.url().should('eq', "https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy");
   });
});