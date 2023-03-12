describe('Access log in', () => {
  it('should be loaded', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();
    // Assert that the URL is the expected
    cy.url().should('eq', "https://ensekautomationcandidatetest.azurewebsites.net/Account/Login");
   });
});