import {check} from 'k6';
import http from 'k6/http';
import Utils from "../utils/utils.js";

export default class Login {

  constructor() {
    this.params = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'monitor': false,
      },
    };
  }

  access() {
    let payload = JSON.stringify({
      email: 'fulano@qa.com',
      password: 'teste'
    })
    let response = http.post(`${Utils.getBaseUrl()}/login`, payload, this.params)
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  }

}