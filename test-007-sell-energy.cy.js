describe('Access sell energy', () => {
  it('should access sell energy', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Sell energy button in the homepage
    cy.get('body > div.container.body-content > div.row > div:nth-child(2) > p:nth-child(3) > a').click();
    // Assert that the URL is the expected
    cy.url().should('eq', "https://ensekautomationcandidatetest.azurewebsites.net/Energy/Sell");
   });
});