const pupperteer = require('puppeteer');

const download = async (req, res) => {
  const browser = await pupperteer.launch({
    args: ['--no-sandbox']
  });    
  const page = await browser.newPage();
  await page.goto(`https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fopenid%2Fv2%2Fop%3Fopenid.sreg.optional%3Dfullname%2Cnickname%2Cemail%26openid.return_to%3Dhttps%3A%2F%2Fbitbucket.org%2Fsocialauth%2Fcomplete%2Fatlassianid%2F%3Fjanrain_nonce%253D2020-02-26T15%25253A34%25253A49ZVQWhCc%26openid.realm%3Dhttps%3A%2F%2Fbitbucket.org%26openid.ns.sreg%3Dhttp%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1%26openid.ns.crowdid%3Dhttps%3A%2F%2Fdeveloper.atlassian.com%2Fdisplay%2FCROWDDEV%2FCrowdID%252BOpenID%252Bextensions%2523CrowdIDOpenIDextensions-login-page-parameters%26openid.ns%3Dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%26openid.mode%3Dcheckid_setup%26openid.identity%3Dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select%26openid.crowdid.application%3Dbitbucket%26openid.claimed_id%3Dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select%26openid.assoc_handle%3D25542200&prompt=&application=bitbucket&tenant=&email=&errorCode=`);
  
  await page.type('#username', 'xxxxxx');
  await page.click('#login-submit');

  await page.waitFor(500);

  await page.type('#password', 'xxxxxxx');

  await page.waitFor(200);
  await page.click('#login-submit');

  await page.waitForNavigation({
    waitUntil: ['domcontentloaded']
  });

  try{
    
    await page.waitFor('a[title="poc-integracao-pos-rede-api"]');

    await page.click('a[title="poc-integracao-pos-rede-api"]');

    await page.waitForNavigation({
      waitUntil: ['domcontentloaded']
    });
  
    await page.waitFor('div.css-z25nd1:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)');
    await page.click('div.css-z25nd1:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)');
    
    await page.screenshot({
      path: 'example.png'
    
    });
    await page.waitForXPath('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/header/div/div/div[2]/div[2]/div/div[2]/div/div/div/div/div[3]/div/div/div/div/span[2]');
    await page.click('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/header/div/div/div[2]/div[2]/div/div[2]/div/div/div/div/div[3]/div/div/div/div/span[2]');

  }
  catch(ex) {
    console.log(ex);
  }

  res.sendStatus(200);
}

module.exports = { download };