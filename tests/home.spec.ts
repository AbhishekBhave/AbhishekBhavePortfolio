import { test, expect } from '@playwright/test';

test('home page loads successfully', async ({ page }) => {
  await page.goto('/');
  
  // Check that the page loads
  await expect(page).toHaveTitle(/Abhishek Bhave/);
  
  // Check that the hero section is visible
  await expect(page.locator('h1')).toContainText('Building impact');
  
  // Check that navigation is present
  await expect(page.locator('nav')).toBeVisible();
  
  // Check that footer is present
  await expect(page.locator('footer')).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check that navigation links are present
  const navLinks = ['Home', 'Résumé', 'Projects', 'Playground', 'Speaking', 'Contact'];
  
  for (const link of navLinks) {
    await expect(page.locator(`text=${link}`)).toBeVisible();
  }
});

test('resume download button is present', async ({ page }) => {
  await page.goto('/');
  
  // Check that the download button is present
  await expect(page.locator('button:has-text("Download PDF Résumé")')).toBeVisible();
}); 