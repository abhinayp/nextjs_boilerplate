class Config {
  public readonly env = process.env.NODE_ENV || "development"
  public data
  constructor() {
    this.data = this.getEnvironmentData()
  }

  getEnvironmentData() {
    try {
      const data = require(`./environments/${this.env}`)
      return data
    } catch (error) {
      console.log(error);
      return {}
    }
  }
}

const config = new Config()
const ENV = config.env
const CONFIG = config.data

export { ENV, CONFIG }
export default config
