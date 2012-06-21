/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:43:21 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_contact_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_contact_data`;
CREATE TABLE `tbl_kind_of_contact_data` (
  `kp_KindOfContactID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfContactName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfContactID`),
  UNIQUE KEY `kp_KindOfContactID` (`kp_KindOfContactID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_contact_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_contact_data` VALUES ('1', 'TelephoneLandlineNumber'), ('2', 'TelephoneMobileNumber'), ('3', 'ElectronicMailAddress'), ('4', 'FaxNumber');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
