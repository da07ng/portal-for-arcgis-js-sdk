import axios from 'axios';

import { serializeParams } from '../util/common';

/**
 * Generate Token
 * @param  {[type]} username   [description]
 * @param  {[type]} password   [description]
 * @param  {[type]} client     referer/ip
 * @param  {[type]} ip         [description]
 * @param  {[type]} referer    [description]
 * @param  {[type]} expiration [description]
 * @return {[type]}            [description]
 */
function generateToken(username, password, client, ip, referer, expiration) {
  let portal = this;
  let url = `${portal.portalUrl}/arcgis/sharing/rest/generateToken`;
  let params = {
    username: username,
    password: password,
    client: client,
    ip: ip,
    referer: referer,
    expiration: expiration,
    f: 'json'
  };

  return axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: serializeParams(params)
  });
}

export { generateToken };
