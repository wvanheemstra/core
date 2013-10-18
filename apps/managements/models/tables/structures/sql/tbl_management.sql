/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:38:18 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_management`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_management`;
CREATE TABLE `tbl_management` (
  `kp_ManagementID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_EventID` int(11) NOT NULL DEFAULT '0',
  `kf_OrganisationID` int(11) NOT NULL DEFAULT '0',
  `kf_RoleID` int(11) NOT NULL DEFAULT '0',
  `kf_ContactID` int(11) NOT NULL DEFAULT '0',
  `kf_MultimediaID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_ManagementID`),
  UNIQUE KEY `kp_ManagementID` (`kp_ManagementID`) USING BTREE,
  KEY `kf_EventID` (`kf_EventID`) USING BTREE,
  KEY `kf_OrganisationID` (`kf_OrganisationID`) USING BTREE,
  KEY `kf_RoleID` (`kf_RoleID`) USING BTREE,
  KEY `kf_ContactID` (`kf_ContactID`) USING BTREE,
  KEY `kf_MultimediaID` (`kf_MultimediaID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Management.ts_Created` BEFORE INSERT ON `tbl_management` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
