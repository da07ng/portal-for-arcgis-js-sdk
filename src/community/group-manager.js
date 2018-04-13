import axios from 'axios';

import { serializeParams } from '../util/common';

function getGroupInfo(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}`;
  let params = {
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

function createGroup(token, title, snippet, tags, access) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${portal.portalUrl}/arcgis/sharing/rest/community/createGroup`;
  let params = {
    title: title,
    snippet: snippet,
    tags: tags,
    access: access,
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

function deleteGroup(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/delete`;
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

function updateGroup(token, groupId, title, snippet, tags, access) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/update`;
  let params = {
    title: title,
    snippet: snippet,
    tags: tags,
    access: access,
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

function reassignGroup(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/reassign`;
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

function inviteGroup(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/invite`;
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

function addUserToGroup(token, groupId, users) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/addUsers`;
  let params = {
    users: users,
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

function removeGroupMember(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/removeUsers`;
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

function getGroupUser(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/users`;
  let params = {
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

function getGroupAllApplication(token, groupId) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/applications`;
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

function getGroupApplication(token, groupId, userName) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/applications/${userName}`;
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

function acceptGroupApplication(token, groupId, userName) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/applications/${userName}/accept`;
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

function declineGroupApplication(token, groupId, userName) {
  let portal = this;
  if (token === undefined || token === '') {
    token = portal.token;
  }

  let url = `${
    portal.portalUrl
  }/arcgis/sharing/rest/community/groups/${groupId}/applications/${userName}/decline`;
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
  getGroupInfo,
  createGroup,
  deleteGroup,
  updateGroup,
  reassignGroup,
  inviteGroup,
  addUserToGroup,
  removeGroupMember,
  getGroupUser,
  getGroupAllApplication,
  getGroupApplication,
  acceptGroupApplication,
  declineGroupApplication
};
