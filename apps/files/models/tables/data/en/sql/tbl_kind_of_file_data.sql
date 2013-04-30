/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:47:26 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_file_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_file_data`;
CREATE TABLE `tbl_kind_of_file_data` (
  `kp_KindOfFileID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfFileName` varchar(255) COLLATE utf8_bin NOT NULL,
  `KindOfFileExtension` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfFileID`),
  UNIQUE KEY `kp_KindOfFileID` (`kp_KindOfFileID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_file_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_file_data` VALUES ('1', 'Word Document', 'doc'), ('2', 'Plain Text Document', 'txt'), ('3', 'HTML Document', 'html');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
