import * as core from './core'

class Portal {
  constructor(portalUrl = 'http://www.arcgis.com') {
    this.portalUrl = portalUrl

    this.generateToken = core.generateToken
  }
}

export default Portal
