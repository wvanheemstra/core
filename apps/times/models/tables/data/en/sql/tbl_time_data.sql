/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:16:15 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_time_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_time_data`;
CREATE TABLE `tbl_time_data` (
  `kp_TimeID` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStart` time NOT NULL,
  `TimeFinish` time NOT NULL,
  PRIMARY KEY (`kp_TimeID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_time_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_time_data` VALUES ('2', '00:00:00', '00:00:00'), ('4', '00:00:00', '00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
