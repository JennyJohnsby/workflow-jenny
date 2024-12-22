import { expect, test } from "vitest";
import { isActivePath } from "./userInterface";

test("Returns true when current path matches href exactly", () => {
  const result = isActivePath("/blog/123", "/blog/123");
  expect(result).toBe(true);
});

test("Returns true for root path (/) when path is /", () => {
  const result = isActivePath("/", "/");
  expect(result).toBe(true);
});

test("Returns true for root path (/) when path is /index.html", () => {
  const result = isActivePath("/", "/index.html");
  expect(result).toBe(true);
});

test("Returns true when current path includes the href", () => {
  const currentPath = "/blog/123";
  const href = "/blog";
  const result = isActivePath(href, currentPath);
  expect(result).toBe(true);
});

test("Returns false when paths don't match", () => {
  const currentPath = "/blog/123";
  const href = "/shop";
  const result = isActivePath(href, currentPath);
  expect(result).toBe(false);
});
