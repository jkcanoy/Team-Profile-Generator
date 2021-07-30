const { expect, describe } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Init", () => {
    // Test all cases when creating new Intern
    it("Should instantiate Intern instance with name, id, email, and school", () => {
      // Create new Intern to test
      const E = new Intern("Kyle", 1, "kyle@kyle.com", "UW");
      // Should return correct name, id, email, and school
      expect(E.name).toEqual("Kyle");
      expect(E.id).toEqual(1);
      expect(E.email).toEqual("kyle@kyle.com");
      expect(E.school).toEqual("UW");
    });
  });

  describe("getName", () => {
    it("Should return Intern name from getName()", () => {
      const E = new Intern("Kyle", 1, "kyle@kyle.com", "UW");
      // Should return correct name
      expect(E.getName()).toEqual("Kyle");
    });
  });

  describe("getId", () => {
    it("Should return Intern id from getId()", () => {
      const E = new Intern("Kyle", 1, "kyle@kyle.com", "UW");
      // Should return correct id
      expect(E.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return Intern email from getEmail()", () => {
      const E = new Intern("Kyle", 1, "kyle@kyle.com", "UW");
      // Should return correct email
      expect(E.getEmail()).toEqual("kyle@kyle.com");
    });
  });

  describe("getGithub", () => {
    it("Should return Intern school from getSchool()", () => {
      const E = new Intern("Kyle", 1, "kyle@kyle.com", "UW");
      // Should return correct school
      expect(E.getSchool()).toEqual("UW");
    });
  });

  describe("getRole", () => {
    it("Should return Intern role from getRole()", () => {
      const E = new Intern("Kyle", 1, "kyle@kyle.com", "UW");
      // Should return role as Intern
      expect(E.getRole()).toEqual("Intern");
    });
  });
});
