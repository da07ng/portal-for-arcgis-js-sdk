import * as core from './core';
import * as content from './content';
import * as community from './community';
import * as portals from './portals';

export default class Portal {
  constructor({
    portalUrl = 'https://www.arcgis.com',
    username = '',
    token = '',
    withCredentials = false
  } = {}) {
    // Portal properties.
    this.portalUrl = portalUrl;
    this.username = username;
    this.token = token;
    this.withCredentials = withCredentials;

    /*
     * Core portal methods.
     */
    this.generateToken = core.generateToken;
    this.search = core.search;
    this.userSearch = core.userSearch;
    this.groupSearch = core.groupSearch;

    /*
     * Content methods.
     */
    // Content - Item methods.
    this.addItem = content.item.addItem;
    this.updateItem = content.item.updateItem;
    this.addPart = content.item.addPart;
    this.cancel = content.item.cancel;
    this.commit = content.item.commit;
    this.Parts = content.item.Parts;
    this.publishItem = content.item.publishItem;
    this.features = content.item.features;
    this.generate = content.item.generate;
    this.analyze = content.item.analyze;
    this.getItemStatus = content.item.getItemStatus;
    this.createService = content.item.createService;
    this.getUserItemInfo = content.item.getUserItemInfo;
    this.addRelationship = content.item.addRelationship;
    this.deleteRelationship = content.item.deleteRelationship;
    this.relateditems = content.item.relateditems;
    this.exportItem = content.item.exportItem;
    this.reassignItem = content.item.reassignItem;
    this.deleteItem = content.item.deleteItem;
    this.moveItem = content.item.moveItem;
    this.shareItemAsOwner = content.item.shareItemAsOwner;
    this.unshareItemAsOwner = content.item.unshareItemAsOwner;
    this.getItemInfo = content.item.getItemInfo;
    this.getItemGroups = content.item.getItemGroups;
    this.getItemData = content.item.getItemData;
    this.getItemPkinfo = content.item.getItemPkinfo;
    this.getItemInfoFile = content.item.getItemInfoFile;

    // Content - Item resources methods.

    // Content - Item comments methods.
    this.addComment = content.itemComments.addComment;
    this.getAllComment = content.itemComments.getAllComment;
    this.addCommentInfo = content.itemComments.addCommentInfo;
    this.updateComment = content.itemComments.updateComment;
    this.deleteComment = content.itemComments.deleteComment;

    // Content - Item rating methods.
    this.addRating = content.itemRating.addRating;
    this.deleteRating = content.itemRating.deleteRating;
    this.getRatingInfo = content.itemRating.getRatingInfo;

    // Content - Items methods.
    this.getUserContent = content.items.getUserContent;
    this.createFolder = content.items.createFolder;
    this.deleteFolder = content.items.deleteFolder;
    this.shareItems = content.items.shareItems;
    this.unshareItems = content.items.unshareItems;
    this.moveItems = content.items.moveItems;
    this.deleteItems = content.items.deleteItems;

    // Content - Group content methods.
    this.shareItemAsGroupAdmin = content.groupContent.shareItemAsGroupAdmin;
    this.unshareItemAsGroupAdmin = content.groupContent.unshareItemAsGroupAdmin;

    /*
     * Community methods.
     */
    this.communitySelf = community.community.communitySelf;

    // Community - Group(owner or manager) methods.
    this.getGroupInfo = community.groupManager.getGroupInfo;
    this.createGroup = community.groupManager.createGroup;
    this.deleteGroup = community.groupManager.deleteGroup;
    this.updateGroup = community.groupManager.updateGroup;
    this.reassignGroup = community.groupManager.reassignGroup;
    this.inviteGroup = community.groupManager.inviteGroup;
    this.addUserToGroup = community.groupManager.addUserToGroup;
    this.removeGroupMember = community.groupManager.removeGroupMember;
    this.getGroupUser = community.groupManager.getGroupUser;
    this.getGroupAllApplication = community.groupManager.getGroupAllApplication;
    this.getGroupApplication = community.groupManager.getGroupApplication;
    this.acceptGroupApplication = community.groupManager.acceptGroupApplication;
    this.declineGroupApplication =
      community.groupManager.declineGroupApplication;

    // Community - Group(member) methods.
    this.acceptInvitation = community.groupMember.acceptInvitation;
    this.declineInvitation = community.groupMember.declineInvitation;
    this.getUserInvitations = community.groupMember.getUserInvitations;
    this.getUserInvitation = community.groupMember.getUserInvitation;
    this.joinGroup = community.groupMember.joinGroup;
    this.leaveGroup = community.groupMember.leaveGroup;

    // Community - User methods.
    this.getUserInfo = community.user.getUserInfo;
    this.updateUser = community.user.updateUser;
    this.deleteUser = community.user.deleteUser;
    this.getAllNotification = community.user.getAllNotification;
    this.getNotification = community.user.getNotification;
    this.deleteNotification = community.user.deleteNotification;
    this.getAllTag = community.user.getAllTag;

    /*
     * Portals methods.
     */
    // Portals - Portal methods.
    this.getPortalSelf = portals.portal.getPortalSelf;
    this.getPortalInfo = portals.portal.getPortalInfo;
    this.updatePortal = portals.portal.updatePortal;
    this.checkServiceName = portals.portal.checkServiceName;
    this.getAllLanguage = portals.portal.getAllLanguage;
    this.getAllRegion = portals.portal.getAllRegion;
    this.getAllResource = portals.portal.getAllResource;
    this.addResource = portals.portal.addResource;
    this.removeResource = portals.portal.removeResource;

    // Portals - User methods.
    this.getAllUsers = portals.users.getAllUsers;
    this.removeUsers = portals.users.removeUsers;
    this.updateUserRole = portals.users.updateUserRole;

    // Portals - Federated servers methods.
    this.registerServer = portals.federatedServers.registerServer;

    // Portals - Distributed collaboration methods.
  }
}
