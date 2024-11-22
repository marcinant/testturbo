import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const button = page.getByRole('button', { name: /Button/i});

    await expect(button).toBeVisible();
});