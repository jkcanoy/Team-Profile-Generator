const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Init", () => {
    it("Should instantiate Employee instance with name, id, and email", () => {
      const E = new Employee("Kyle", 1, "kyle@kyle.com");

      expect(E.name).toEqual("Kyle");
      expect(E.id).toEqual(1);
      expect(E.email).toEqual("kyle@kyle.com");
    });
  });

  describe("getName", () => {
    it("Should return Employee name from getName()", () => {
      const E = new Employee("Kyle", 1, "kyle@kyle.com");

      expect(E.getName()).toEqual("Kyle");
    });
  });

  describe("getId", () => {
    it("Should return Employee id from getId()", () => {
      const E = new Employee("Kyle", 1, "kyle@kyle.com");

      expect(E.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return Employee email from getEmail()", () => {
      const E = new Employee("Kyle", 1, "kyle@kyle.com");

      expect(E.getEmail()).toEqual("kyle@kyle.com");
    });
  });

  describe("getRole", () => {
    it("Should return Employee role from getRole()", () => {
      const E = new Employee("Kyle", 1, "kyle@kyle.com");

      expect(E.getRole()).toEqual("Employee");
    });
  });
});
