describe('New user takes to register page', () => {
  it('Clicking Register as a new user takes to register page', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // Click on new user takes to register page
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/p/a').click();
    cy.url().should('eq', 'https://ensekautomationcandidatetest.azurewebsites.net/Account/Register');
  });
});