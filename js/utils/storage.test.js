import { describe, expect, test, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage";

describe("getUsername function test", () => {
  beforeEach(() => {
    const storage = {};

    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  test("Test that it returns the name from the user object in storage", () => {
    const user = { name: "Reidun" };
    saveUser(user);
    const result = getUsername();
    expect(result).toBe("Reidun");
  });

  test("Test that it returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
