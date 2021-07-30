const { expect, describe } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Init", () => {
    // Test all cases when creating new Engineer
    it("Should instantiate Engineer instance with name, id, email, and GitHub", () => {
      // Create new Engineer to test
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");
      // Should return correct name, id, email, and github username
      expect(E.name).toEqual("Kyle");
      expect(E.id).toEqual(1);
      expect(E.email).toEqual("kyle@kyle.com");
      expect(E.github).toEqual("jkcanoy");
    });
  });

  describe("getName", () => {
    it("Should return Engineer name from getName()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");
      // Should return correct name
      expect(E.getName()).toEqual("Kyle");
    });
  });

  describe("getId", () => {
    it("Should return Engineer id from getId()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");
      // Should return correct id
      expect(E.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return Engineer email from getEmail()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");
      // Should return correct email
      expect(E.getEmail()).toEqual("kyle@kyle.com");
    });
  });

  describe("getGithub", () => {
    it("Should return Engineer GitHub from getGithub()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");
      // Should return correct github username
      expect(E.getGithub()).toEqual("jkcanoy");
    });
  });

  describe("getRole", () => {
    it("Should return Engineer role from getRole()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");
      // Should return Engineer as role
      expect(E.getRole()).toEqual("Engineer");
    });
  });
});
