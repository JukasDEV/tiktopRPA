import { launch } from "puppeteer-core";
import { sleep } from "./util";
import { createCursor } from "ghost-cursor";
import puppeteer from "puppeteer";

const start = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const f12 = await page.target().createCDPSession();

  await f12.send("Network.enable");
  await f12.send("Page.enable");
  page.setCacheEnabled(false);
  const cursor = createCursor(page);
  await page.goto("https://www.tiktok.com/pt-BR/"),
    {
      waitUntil: "networkidle0",
    };
  await cursor.click('button[data-e2e="top-login-button"]', {
    waitForSelector: 5000,
    maxTries: 5,
    waitForClick: 5000,
    paddingPercentage: 1,
  });
  await sleep(1 * 3000);

  await page.waitForSelector('div[role="button"]');

  await sleep(1 * 3000);

  console.log("selecionei o login");

  await page.keyboard.press("Tab");

  await page.keyboard.press("Tab");

  await page.keyboard.press("Tab");

  await page.keyboard.press("NumpadEnter");

  await page.keyboard.press("Tab");

  await page.keyboard.press("Tab");

  await page.keyboard.press("NumpadEnter");

  console.log("estou logando");

  console.log("estou no usuario");

  await page.waitForSelector('input[name="username"]');

  await page.type('input[name="username"]', "seu email aqui");

  await page.waitForSelector('input[placeholder="Senha"]');

  await page.type('input[placeholder="Senha"]', "sua senha aqui");

  await page.keyboard.press("NumpadEnter");

  console.log("loguei");

  await sleep(1 * 20000);

  await sleep(5 * 15000);
};
(async () => await start())();
