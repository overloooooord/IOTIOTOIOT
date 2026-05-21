const puppeteer = require('puppeteer-core');
const path = require('path');

async function generatePDF(inputFile, outputFile) {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: 'new'
  });
  const page = await browser.newPage();
  const filePath = 'file://' + path.resolve(__dirname, inputFile);
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));
  const outputPath = path.resolve(__dirname, outputFile);
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true
  });
  console.log(`✅ ${outputFile}`);
  await browser.close();
}

(async () => {
  await generatePDF('kp.html', 'SteppeAI_КП_RU.pdf');
  await generatePDF('kp_en.html', 'SteppeAI_Proposal_EN.pdf');
  await generatePDF('kp_kz.html', 'SteppeAI_КП_KZ.pdf');
  console.log('\n🎉 Все три PDF готовы!');
})();
