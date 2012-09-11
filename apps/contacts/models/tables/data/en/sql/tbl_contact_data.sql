/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:32:23 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_contact_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_contact_data`;
CREATE TABLE `tbl_contact_data` (
  `kp_ContactID` int(11) NOT NULL,
  `kf_KindOfContactID` int(11) NOT NULL,
  `ContactValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_MembershipID` int(11) NOT NULL,
  PRIMARY KEY (`kp_ContactID`),
  UNIQUE KEY `kp_ContactID` (`kp_ContactID`) USING BTREE,
  KEY `kf_KindOfContactID` (`kf_KindOfContactID`) USING BTREE,
  KEY `kf_MembershipID` (`kf_MembershipID`) USING BTREE
) ENGINE=Innodb DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
