import { check } from 'k6';
import http from 'k6/http';
import Utils from "../../utils/utils.js";

export default class Users {


  list() {
    let params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let response = http.get(`${Utils.getBaseUrl()}/usuarios`, params)

    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  }
}