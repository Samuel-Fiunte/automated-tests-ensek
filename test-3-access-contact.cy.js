describe('Access contact', () => {
  it('should be loaded', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Contact text in the the top menu
    cy.get('body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.collapse > ul:nth-child(1) > li:nth-child(3) > a').click();
    // Assert that the URL is the expected
    cy.url().should('eq', "https://ensekautomationcandidatetest.azurewebsites.net/Home/Contact");
   });
});
