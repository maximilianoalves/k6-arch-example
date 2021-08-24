import { sleep } from 'k6';
import Users from "../requests/users/users.service.js";

export default function () {
  let user = new Users();

  user.list()
}