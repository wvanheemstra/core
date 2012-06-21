/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:46:26 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_multimedia_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_multimedia_data`;
CREATE TABLE `tbl_kind_of_multimedia_data` (
  `kp_KindOfMultimediaID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfMultimediaName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfMultimediaID`),
  UNIQUE KEY `kp_KindOfMultimediaID` (`kp_KindOfMultimediaID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_multimedia_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_multimedia_data` VALUES ('1', 'Photo');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
