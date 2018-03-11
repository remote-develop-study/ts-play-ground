import { ABCMartCralwer, ABCMartFormData, ABCMartHeader } from './Crawler';
import * as cheerio from 'cheerio';

const headers: ABCMartHeader = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  Host: 'www.abcmart.co.kr',
  Origin: 'http://www.abcmart.co.kr',
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
};

const formData: ABCMartFormData = {
  ctgrId: '000000',
  sort: '',
  listSize: 1,
  viewType: '',
  page: 1,
};

const abcCrawler: ABCMartCralwer = new ABCMartCralwer(formData, headers);

abcCrawler
  .fetch()
  .then(res => {
    const body: string = res;
    let $ = cheerio.default.load(body);
    const testText: string = $('header > p').text();
    console.log(testText);
  })
  .catch(err => console.error(err.message));
