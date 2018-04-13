import axios from 'axios';

import { serializeParams } from '../util/common';

/**
 * The Portal Self resource is used to return the view of the portal as seen by the current user, anonymous or logged in.
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
function getPortalSelf(token) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/portals/self`;
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

function getPortalInfo(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/portals/${portalId}`;
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

function updatePortal(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/update`;
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

function checkServiceName(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/isServiceNameAvailable`;
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

/**
 * Lists available languages.
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
function getAllLanguage(token) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/portals/languages`;
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

/**
 * Lists the available regions.
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
function getAllRegion(token) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/portals/regions`;
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

function getAllResource(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/resources`;
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

function addResource(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/addResource`;
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

function removeResource(token, portalId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/portals/${portalId}/removeResource`;
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

export {
  getPortalSelf,
  getPortalInfo,
  updatePortal,
  checkServiceName,
  getAllLanguage,
  getAllRegion,
  getAllResource,
  addResource,
  removeResource
};
