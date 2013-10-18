/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:35:49 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_resource_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_resource_data`;
CREATE TABLE `tbl_resource_data` (
  `kp_ResourceID` int(11) NOT NULL AUTO_INCREMENT,
  `ResourceName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_WhereaboutsID` int(11) NOT NULL DEFAULT 0,
  `kf_KindOfResourceID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_ResourceID`),
  UNIQUE KEY `kp_ResourceID` (`kp_ResourceID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfResourceID` (`kf_KindOfResourceID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
