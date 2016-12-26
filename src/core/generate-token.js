import 'isomorphic-fetch'

import { serializeParams } from '../util'

/**
 * Generate Token
 * @param {string} username - username
 * @param {string} password - password
 * @param {string} client - client type. exp: referer/ip
 * @param {string} ip - ip address if client is ip
 * @param {string} referer - referer address if client id referer
 * @param {string} expiration - Set expiration of the token
 * @returns {Promise}
 */
function generateToken(username, password, client, ip, referer, expiration) {
  let portal = this
  let url = `${portal.portalUrl}sharing/rest/generateToken`

  let params = {
    username: username,
    password: password,
    client: client,
    ip: ip,
    referer: referer,
    expiration: expiration,
    f: 'json'
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: serializeParams(params)
  })
}

export { generateToken }
