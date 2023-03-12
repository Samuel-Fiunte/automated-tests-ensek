// This test will fail because both the registration and log in functionalities are not working 
describe('Password should have verification in log in', () => {
  it('Password field should throw an error if no verification rules are not followed', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // test Password has verification. In this case the functionality so I look for the test "welcome" as a generic way of asseting a possible text
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[1]/div/input').clear().type('test@test.com');
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[2]/div/input').clear().type('Password1!')
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[4]/div/input').click();
    cy.contains(/welcome/i);
  });
});