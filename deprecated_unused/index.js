import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headers: false,
  });
  let [page] = await browser.pages();
  if (!page) {
    page = await browser.newPage();
  }

  await page.setViewport({ width: 1080, height: 1024 });
  /* await page.screenshot({
    path: "screenshots/hn.png",
  });*/

  console.log("Work");
  console.log(await page.title());

  //await browser.close();
})();
