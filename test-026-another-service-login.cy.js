// This test will fail because the functionality is not present and hence my assertion against this text not being present will fail
describe('Can use another service', () => {
  it('Another service can be used to login', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // User another service to login. Given this is broken I will just assert the current text is not present in the area
    cy.xpath('/html/body/div[2]/div/div[2]/section').should('be.visible').contains('TThere are no external authentication services configured');
  });
});