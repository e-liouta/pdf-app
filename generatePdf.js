import puppeteer from 'puppeteer';

async function generatePdf() {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });


  await page.pdf({
    path: 'service-report.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
}

generatePdf().catch(console.error);
