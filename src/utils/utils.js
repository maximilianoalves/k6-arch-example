export default class Utils {

  static getBaseUrl() {
    let env = __ENV.env;

    switch (env) {
      case "PRD":
        return 'https://serverest.dev/';
        break;
      default:
        console.error("Url base not defined.");
        break;
    }
  }
}