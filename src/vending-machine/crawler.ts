import * as rpn from 'request-promise-native';
import * as cheerio from 'cheerio';

interface Header {
  Host: string;
  Origin: string;
  "User-Agent": string;
}

interface ABCMartHeader {
  'X-Requested-With': string;
  'Content-Type': string;
  Host: string;
  Origin: string;
  'User-Agent': string;
}



interface ABCMartFormData {
  ctgrId: string;
  sort: string;
  viewType: string;
  listSize: number;
  page: number;
}



interface HttpRequest {
  formData: ABCMartFormData;
  headers: ABCMartHeader;
}

abstract class Crawler {
  abstract fetch(): Promise<any>;
  abstract parse(): String;
}

class ABCMartCralwer extends Crawler implements HttpRequest {
  url: string = 'http://www.abcmart.co.kr/abc/category/categoryProductList';

  constructor(public formData: ABCMartFormData, public headers: ABCMartHeader) {
    super();
  }

  async fetch() {
    const response = rpn.default.post(this.url, {
      formData: this.formData,
      headers: this.headers,
    });
    return await response;
  }

  parse() {
    return 'aa';
  }
}

export {
  ABCMartHeader,
  ABCMartFormData,
  ABCMartCralwer
}