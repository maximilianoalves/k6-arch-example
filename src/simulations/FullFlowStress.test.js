import Users from "../requests/users.request.js";
import Login from "../requests/login.request.js";
import Products from "../requests/products.request.js";

import {group} from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 2 },
    { duration: '30s', target: 4 },
    { duration: '30s', target: 6 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default function () {
  let user = new Users();
  let login = new Login();
  let products = new Products();

  group('List valid users', () => {
    user.list();
  });
  group('Access with admin user', () => {
    login.access();
  });
  group('List products', () => {
    products.list();
  })
}