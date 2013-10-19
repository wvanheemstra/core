/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:37:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_geometry`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_geometry`;
CREATE TABLE `tbl_geometry` (
  `kp_GeometryID` int(11) NOT NULL AUTO_INCREMENT,
  `GeometryName` varchar(255) COLLATE utf8_bin NOT NULL,
  `GeometryDescription` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfGeometryID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_GeometryID`),
  UNIQUE KEY `kp_GeometryID` (`kp_GeometryID`) USING BTREE,
  KEY `kf_KindOfGeometryID` (`kf_KindOfGeometryID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Geometry.ts_Created` BEFORE INSERT ON `tbl_geometry` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
