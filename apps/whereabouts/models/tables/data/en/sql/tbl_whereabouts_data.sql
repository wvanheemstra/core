/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:19:21 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_whereabouts_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_whereabouts_data`;
CREATE TABLE `tbl_whereabouts_data` (
  `kp_WhereaboutsID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_TimeID` int(11) NOT NULL,
  `kf_LocationID` int(11) NOT NULL,
  `kf_DateID` int(11) NOT NULL,
  PRIMARY KEY (`kp_WhereaboutsID`),
  KEY `kf_TimeID` (`kf_TimeID`) USING BTREE,
  KEY `kf_LocationID` (`kf_LocationID`) USING BTREE,
  KEY `kf_DateID` (`kf_DateID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_whereabouts_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_whereabouts_data` VALUES ('8', '0', '8', '0'), ('9', '0', '9', '0'), ('10', '0', '10', '0'), ('11', '2', '0', '7'), ('12', '0', '0', '8'), ('13', '4', '0', '9'), ('14', '0', '11', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
