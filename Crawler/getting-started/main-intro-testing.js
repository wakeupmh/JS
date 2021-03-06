
const cheerio = require('cheerio');
const url = "https://www.iban.com/exchange-rates";
const fetchData = require('./src/utils/fetchData');

fetchData(url).then(res => {
    const html = res.data;
    const $ = cheerio.load(html);
    const starsTable = $('.table.table-bordered.table-hover.downloads > tbody > tr');
    starsTable.each(function() {
        let title = $(this).find('td').text();
        console.log(title);
    });
})
