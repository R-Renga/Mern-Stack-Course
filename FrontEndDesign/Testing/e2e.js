const puppeteer = require('puppeteer');

(async ()=>{ 

    const browser = await puppeteer.launch({
        headless:false,
        args:["--window-size=1520,1080"],
        slowMo:100
    })

    const page = await browser.newPage()

    await page.goto("https://www.swiggy.com/")

    console.log("page loaded");

    page.setViewport({width:1920,height:1080})

    const coursePageLink = ".sc-kSsbVf mZRJW" // element id

    await page.waitForSelector(coursePageLink);

    await page.click(coursePageLink)
    
    await browser.close()
})();