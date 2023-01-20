/// <reference types="cypress" />
describe("Login App", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#basic_username > .ant-input-affix-wrapper > .ant-input")
      .click()
      .type("Hello");
    cy.get("#basic_password > .ant-input-affix-wrapper > .ant-input")
      .clear()
      .type("World");
    cy.get(".ant-btn").click();
    cy.get(".ant-input").click().type("Test {enter}");
    cy.get(".ant-input-clear-icon").click();
  });
});
