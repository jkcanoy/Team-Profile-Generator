const { expect, describe } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Init", () => {
    // Test all cases when creating new Manager
    it("Should instantiate Manager instance with name, id, email, and officeNumber", () => {
      // Create new Manager to test
      const E = new Manager("Kyle", 1, "kyle@kyle.com", "123-456-7890");
      // Should return correct name, id, email, and office number
      expect(E.name).toEqual("Kyle");
      expect(E.id).toEqual(1);
      expect(E.email).toEqual("kyle@kyle.com");
      expect(E.officeNumber).toEqual("123-456-7890");
    });
  });

  describe("getName", () => {
    it("Should return Manager name from getName()", () => {
      const E = new Manager("Kyle", 1, "kyle@kyle.com", "123-456-7890");
      // Should return correct name
      expect(E.getName()).toEqual("Kyle");
    });
  });

  describe("getId", () => {
    it("Should return Manager id from getId()", () => {
      const E = new Manager("Kyle", 1, "kyle@kyle.com", "123-456-7890");
      // Should return correct id
      expect(E.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return Manager email from getEmail()", () => {
      const E = new Manager("Kyle", 1, "kyle@kyle.com", "123-456-7890");
      // Should return correct email
      expect(E.getEmail()).toEqual("kyle@kyle.com");
    });
  });

  describe("getGithub", () => {
    it("Should return Manager officeNumber from getOfficeNumber()", () => {
      const E = new Manager("Kyle", 1, "kyle@kyle.com", "123-456-7890");
      // Should return correct office number
      expect(E.getOfficeNumber()).toEqual("123-456-7890");
    });
  });

  describe("getRole", () => {
    it("Should return Manager role from getRole()", () => {
      const E = new Manager("Kyle", 1, "kyle@kyle.com", "123-456-7890");
      // Should return role as Manager
      expect(E.getRole()).toEqual("Manager");
    });
  });
});
