import axios from 'axios';

import { serializeParams } from '../util/common';

function registerServer(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/servers/register`;
  let params = {
    culture: 'zh-cn',
    f: 'json',
    token: token
  };

  return axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: serializeParams(params)
  });
}

export { registerServer };
