import axios from 'axios';

import { serializeParams } from '../util/common';

function addComment(token, itemId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/content/items/${itemId}/addComment`;
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

function getAllComment(token, itemId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/content/items/${itemId}/comments`;
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

function addCommentInfo(token, itemId, commentId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/content/items/${itemId}/comments/${commentId}`;
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

function updateComment(token, itemId, commentId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/content/items/${itemId}/comments/${commentId}/update`;
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

function deleteComment(token, itemId, commentId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/content/items/${itemId}/comments/${commentId}/delete`;
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
  addComment,
  getAllComment,
  addCommentInfo,
  updateComment,
  deleteComment
};
