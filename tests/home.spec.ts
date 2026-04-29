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

  const nav = page.getByRole('navigation');
  await expect(nav).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Projects' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Résumé' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Speaking' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();

  await nav.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible();
});

test('resume download button is present', async ({ page }) => {
  await page.goto('/');
  
  // Check that the download button is present
  await expect(page.locator('button:has-text("Download PDF Résumé")')).toBeVisible();
}); 

test('contact form shows validation and success handling', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Send Message' }).click();

  await expect(page.getByText('Name is required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Subject is required')).toBeVisible();
  await expect(page.getByText('Message is required')).toBeVisible();

  await page.getByLabel('Name *').fill('Test User');
  await page.getByLabel('Email *').fill('test@example.com');
  await page.getByLabel('Subject *').fill('Portfolio inquiry');
  await page.getByLabel('Message *').fill('Hello, I would love to discuss a project collaboration.');
  await page.getByRole('button', { name: 'Send Message' }).click();

  await expect(
    page.getByRole('heading', { name: /Message Sent!/ }),
  ).toBeVisible();
});