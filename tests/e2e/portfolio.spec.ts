import { expect, test } from "@playwright/test"

test("navega pelas páginas principais", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", { level: 1, name: "Giovanni Miranda" })
  ).toBeVisible()

  await page.getByRole("link", { name: "Ver Projetos" }).click()
  await expect(page).toHaveURL(/\/projetos$/)
  await expect(
    page.getByRole("heading", { level: 1, name: "Projetos" })
  ).toBeVisible()
})

test("abre e fecha o menu mobile com Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  const menuButton = page.getByRole("button", { name: "Abrir menu" })
  await menuButton.click()

  await expect(
    page.getByRole("dialog", { name: "Menu de navegação" })
  ).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(
    page.getByRole("dialog", { name: "Menu de navegação" })
  ).toBeHidden()
  await expect(menuButton).toBeFocused()
})

test("renderiza todos os projetos com links externos seguros", async ({
  page,
}) => {
  await page.goto("/projetos")

  const cards = page.getByRole("article")
  await expect(cards).toHaveCount(11)

  const projectLinks = page.getByRole("link", { name: /Ver Projeto/ })
  await expect(projectLinks).toHaveCount(11)

  for (const link of await projectLinks.all()) {
    await expect(link).toHaveAttribute("target", "_blank")
    await expect(link).toHaveAttribute("rel", /noopener/)
  }
})

test("alterna entre os temas claro e escuro", async ({ page }) => {
  await page.goto("/")

  await page.getByRole("button", { name: "Alterar tema" }).first().click()
  await page.getByRole("menuitem", { name: "Escuro" }).click()
  await expect(page.locator("html")).toHaveClass(/dark/)

  await page.getByRole("button", { name: "Alterar tema" }).first().click()
  await page.getByRole("menuitem", { name: "Claro" }).click()
  await expect(page.locator("html")).not.toHaveClass(/dark/)
})
