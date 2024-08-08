import React from "react";
import App from "./App";

describe("<App />", () => {
  it("should not allow empty input", () => {
    cy.mount(<App />);
    cy.get("button").click();
    cy.get(".compras li").should("have.length", 0);
    // see: https://on.cypress.io/mounting-react
  });
  it("should allow to write a new item on input", () => {
    cy.mount(<App />);
    cy.get("#input").type("Item 1").should("have.value", "Item 1");
  });
  it("should allow to add a new item on button", () => {
    cy.mount(<App />);
    cy.get("#input").type("Item 1");
    cy.get("button").click();
    cy.get(".compras li").should("have.length", 1).contains("Item 1");
  });
});
