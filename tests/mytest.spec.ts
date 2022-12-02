import { test, expect } from '@playwright/test';

test('next app has a button', async ({ page }) => {
  await page.goto('https://nilsreich-turbo-fortnight-rqggx4pq525q67-3000.preview.app.github.dev/test');

  // create a locator
  const getStarted = page.getByRole('button', { name: 'increase' });

  await expect(getStarted).toHaveText(/increase/);

});
