const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:8000';
const WIDTH = 1200;
const HEIGHT = 630;

const explainers = [
  'scaling-laws',
  'rag-retrieval',
  'credit-scoring',
  'causal-ai',
  'ml-trading',
  'llm-explainer',
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (var i = 0; i < explainers.length; i++) {
    var slug = explainers[i];
    var url = BASE_URL + '/' + slug + '/';
    var outPath = path.join(__dirname, '..', slug, 'og.png');

    console.log('Capturing ' + slug + '...');

    var page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for fonts to load
    await page.evaluate(function () {
      return document.fonts.ready;
    });

    // Screenshot the hero section at exactly 1200x630
    await page.screenshot({
      path: outPath,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    });

    console.log('  -> ' + outPath);
    await page.close();
  }

  await browser.close();
  console.log('\nDone! Generated ' + explainers.length + ' OG images.');
}

run().catch(function (err) {
  console.error(err);
  process.exit(1);
});
