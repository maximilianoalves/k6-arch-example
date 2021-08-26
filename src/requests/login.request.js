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
    this.token = "";
  }

  access() {
    let payload = JSON.stringify({
      email: 'fulano@qa.com',
      password: 'teste'
    })
    let response = http.post(`${Utils.getBaseUrl()}/login`, payload, this.params)
    this.token = response.json('authorization')
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }

  getToken() {
    return this.token;
  }
}