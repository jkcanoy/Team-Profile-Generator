const { expect, describe } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Init", () => {
    it("Should instantiate Engineer instance with name, id, email, and GitHub", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");

      expect(E.name).toEqual("Kyle");
      expect(E.id).toEqual(1);
      expect(E.email).toEqual("kyle@kyle.com");
      expect(E.github).toEqual("jkcanoy");
    });
  });

  describe("getName", () => {
    it("Should return Engineer name from getName()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");

      expect(E.getName()).toEqual("Kyle");
    });
  });

  describe("getId", () => {
    it("Should return Engineer id from getId()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");

      expect(E.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return Engineer email from getEmail()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");

      expect(E.getEmail()).toEqual("kyle@kyle.com");
    });
  });

  describe("getGithub", () => {
    it("Should return Engineer GitHub from getGithub()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");

      expect(E.getGithub()).toEqual("jkcanoy");
    });
  });

  describe("getRole", () => {
    it("Should return Engineer role from getRole()", () => {
      const E = new Engineer("Kyle", 1, "kyle@kyle.com", "jkcanoy");

      expect(E.getRole()).toEqual("Engineer");
    });
  });
});
