const users = require("../users.js");

const fakeUsers = require("../__mocks__/fakeUserValid.json");

describe("users.js", () => {
  describe("getUser", () => {
    it("Doit retourner les numéros de téléphone", () => {
      const res = users.getPhoneNumbersByStartingAge(fakeUsers,50);
      expect(res).toStrictEqual(["+63 791 675 8914"]);
    });
    it("Doit renvoyer une erreur car les arguments ne sont pas du bon type", () => {
      expect(() => {
        users.getPhoneNumbersByStartingAge(10,50);
      }).toThrow("Types invalides!");
    });
    it("Doit renvoyer une erreur car il n'y a aucun utilisateur", () => {
      expect(() => {
        users.getPhoneNumbersByStartingAge([],50);
      }).toThrow("Aucun utilisateur!");
    });

  });
});
