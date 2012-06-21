/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:42:52 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_contact`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_contact`;
CREATE TABLE `tbl_kind_of_contact` (
  `kp_KindOfContactID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfContactName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfContactID`),
  KEY `kp_KindOfContactID` (`kp_KindOfContactID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
