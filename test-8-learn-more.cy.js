describe('Access about via learn more', () => {
  it('should access the about page via homepage learn more button', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Learn more button in the homepage
    cy.get('body > div.container.body-content > div.row > div:nth-child(3) > p:nth-child(3) > a').click();
    // Assert that the URL is the expected
    cy.url().should('eq', "https://ensekautomationcandidatetest.azurewebsites.net/Home/About");
   });
});