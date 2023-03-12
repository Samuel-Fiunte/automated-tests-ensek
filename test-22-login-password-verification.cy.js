// Verification for password is not working correctly so this test will fail 
describe('Password should have verification in log in', () => {
  it('Password field should throw an error if no verification rules are not followed', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // test Password has verification for short password
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[2]/div/input').clear().type('p')
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[4]/div/input').click();
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[2]/div/span').should('be.visible').contains('The Password must be at least 6 characters long');
  });
});