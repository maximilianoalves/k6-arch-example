export default class Utils {

  static getBaseUrl() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://serverest.dev'
      default:
        console.error('Url or env not defined')
    }
  }
}