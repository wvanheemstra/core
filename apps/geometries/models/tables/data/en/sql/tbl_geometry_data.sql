/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:53:39 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_geometry_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_geometry_data`;
CREATE TABLE `tbl_geometry_data` (
  `kp_GeometryID` int(11) NOT NULL AUTO_INCREMENT,
  `GeometryName` varchar(255) COLLATE utf8_bin NOT NULL,
  `GeometryDescription` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfGeometryID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_GeometryID`),
  UNIQUE KEY `kp_GeometryID` (`kp_GeometryID`) USING BTREE,
  KEY `kf_KindOfGeometryID` (`kf_KindOfGeometryID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_geometry_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_geometry_data` VALUES ('1', 'My Geometry Name', 'My Geometry Description', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
