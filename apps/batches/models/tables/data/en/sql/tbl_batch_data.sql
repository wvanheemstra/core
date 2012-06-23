/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 09:36:25 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_batch_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_batch_data`;
CREATE TABLE `tbl_batch_data` (
  `kp_BatchID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`kp_BatchID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
