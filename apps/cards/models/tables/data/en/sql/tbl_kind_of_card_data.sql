/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 13:20:13 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_card_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_card_data`;
CREATE TABLE `tbl_kind_of_card_data` (
  `kp_KindOfCardID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfCardName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfCardID`),
  UNIQUE KEY `kp_KindOfCardID` (`kp_KindOfCardID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
