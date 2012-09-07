/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 10:24:37 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_group_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_group_data`;
CREATE TABLE `tbl_group_data` (
  `kp_GroupID` int(11) NOT NULL AUTO_INCREMENT,
  `GroupName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfGroupID` int(11) NOT NULL,
  PRIMARY KEY (`kp_GroupID`),
  KEY `kf_KindOfGroupID` (`kf_KindOfGroupID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
