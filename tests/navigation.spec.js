import { test, expect } from "@playwright/test";

test("Navigate to first venue", async ({ page }) => {
  await page.goto("/");
  await page.locator(".bg-cover").first().click();
  await expect(page.getByRole("heading")).toContainText("Venue details");
});
