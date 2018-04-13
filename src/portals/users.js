import axios from 'axios';

import { serializeParams } from '../util/common';

function getAllUsers(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/portals/${portalId}/users`;
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

function removeUsers(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/removeUsers`;
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

function updateUserRole(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/updateUserRole`;
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

export { getAllUsers, removeUsers, updateUserRole };
