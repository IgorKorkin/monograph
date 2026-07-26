import { expect, test } from "@playwright/test";

test("главная страница открывается без JavaScript-ошибок", async ({ page }) => {
  const pageErrors = [];

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  const response = await page.goto("./");

  expect(response?.ok()).toBeTruthy();

  await expect(
    page.getByRole("heading", { level: 1 }),
  ).toContainText("Защита ядра");

  expect(pageErrors).toEqual([]);
});

test("кнопка Amazon содержит правильную ссылку", async ({ page }) => {
  await page.goto("./");

  const amazon = page.getByRole("link", {
    name: "Amazon",
    exact: true,
  });

  await expect(amazon).toBeVisible();
  await expect(amazon).toHaveAttribute(
    "href",
    "https://www.amazon.com/dp/B0HBG3PRKC",
  );
  await expect(amazon).toHaveAttribute("target", "_blank");
  await expect(amazon).toHaveAttribute(
    "rel",
    /noopener noreferrer/,
  );
});

test("переключение RU и EN изменяет содержимое страницы", async ({ page }) => {
  await page.goto("./");

  const heading = page.getByRole("heading", { level: 1 });

  await expect(heading).toContainText("Защита ядра");

  await page.getByRole("button", {
    name: "EN",
    exact: true,
  }).click();

  await expect(heading).toContainText("Kernel Protection");

  await expect(
    page.getByRole("link", {
      name: "READ ON ZNANIUM",
      exact: true,
    }),
  ).toBeVisible();

  await page.getByRole("button", {
    name: "RU",
    exact: true,
  }).click();

  await expect(heading).toContainText("Защита ядра");
});

test("изображения сайта успешно загружаются", async ({ page }) => {
  await page.goto("./");

  const images = page.locator("img");
  const count = await images.count();

  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);

    await image.scrollIntoViewIfNeeded();

    await expect
      .poll(() =>
        image.evaluate(
          (element) =>
            element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
});