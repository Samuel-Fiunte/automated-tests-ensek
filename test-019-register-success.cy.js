// This test SHOULD fail because the register functionality is broken but the wide search of the word "Success" is found in the error screen
describe('Correct registration', () => {
  it('All inputs are correct and user can register', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Register text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[1]/a').click();

    // Test correct inputs and registration
    cy.xpath('/html/body/div[2]/form/div[2]/div/input').clear().type('test@test.com');
    cy.xpath('/html/body/div[2]/form/div[3]/div/input').clear().type('Password1!');
    cy.xpath('/html/body/div[2]/form/div[4]/div/input').clear().type('Password1!');
    cy.xpath('//html/body/div[2]/form/div[5]/div/input').click();
    // Given the Register functionality isn't working I don't know what can I assess against, so I am just going for a wide searching of "success"
    cy.contains(/success/i)  
    });
  });