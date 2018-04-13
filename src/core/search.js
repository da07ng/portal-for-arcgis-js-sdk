import axios from 'axios';

import portalQueryConfig from './query-config';
import { serializeParams } from '../util/common';

/**
 * Search
 * @param  {[type]} token       [description]
 * @param  {[type]} q           [description]
 * @param  {[type]} start       [description]
 * @param  {[type]} num         [description]
 * @param  {[type]} sortField   [description]
 * @param  {[type]} sortOrder   [description]
 * @param  {[type]} filterQuery [description]
 * @param  {[type]} viewQuery   [description]
 * @return {[type]}             [description]
 */
function search(
  token,
  q,
  start,
  num,
  sortField,
  sortOrder,
  filterQuery,
  viewQuery
) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let query = q;
  // if (viewQuery) {
  // query = `${query} ${portalQueryConfig.viewQueries[viewQuery]}`
  // } else {
  query = `${query} ${portalQueryConfig.viewQueries['web']} ${
    portalQueryConfig.viewQueries['gis']
  }`;
  // }

  if (!filterQuery) {
    filterQuery = 'all';
  }
  query = `${query} ${portalQueryConfig.filterQueries[filterQuery].f}`;

  let url = `${portal.portalUrl}/arcgis/sharing/rest/search`;
  let params = {
    q: query,
    start: start,
    num: num,
    sortField: sortField,
    sortOrder: sortOrder,
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
 * User Search
 * @param  {[type]} token       [description]
 * @param  {[type]} q           [description]
 * @param  {[type]} start       [description]
 * @param  {[type]} num         [description]
 * @param  {[type]} sortField   [description]
 * @param  {[type]} sortOrder   [description]
 * @return {[type]}             [description]
 */
function userSearch(token, q, start, num, sortField, sortOrder) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/community/users`;
  let params = {
    q: q,
    start: start,
    num: num,
    sortField: sortField,
    sortOrder: sortOrder,
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
 * Group Search
 * @param  {[type]} token       [description]
 * @param  {[type]} q           [description]
 * @param  {[type]} start       [description]
 * @param  {[type]} num         [description]
 * @param  {[type]} sortField   [description]
 * @param  {[type]} sortOrder   [description]
 * @return {[type]}             [description]
 */
function groupSearch(token, q, start, num, sortField, sortOrder) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/community/groups`;
  let params = {
    q: q,
    start: start,
    num: num,
    sortField: sortField,
    sortOrder: sortOrder,
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

export { search, userSearch, groupSearch };
