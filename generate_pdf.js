const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: 'new'
  });

  const page = await browser.newPage();
  
  const filePath = 'file://' + path.resolve(__dirname, 'kp.html');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  
  // Wait for fonts to load
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));

  const outputPath = path.resolve(__dirname, 'SteppeAI_КП.pdf');
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true
  });

  console.log(`✅ PDF сохранён: ${outputPath}`);
  await browser.close();
})();
