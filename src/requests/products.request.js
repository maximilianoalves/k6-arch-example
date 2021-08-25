import {check} from 'k6';
import http from 'k6/http';
import Utils from "../utils/utils.js";

export default class Products {

  constructor() {
    this.params = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'monitor': false,
      },
    };
  }

  list() {
    let response = http.get(`${Utils.getBaseUrl()}/produtos`, this.params)
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  }
}