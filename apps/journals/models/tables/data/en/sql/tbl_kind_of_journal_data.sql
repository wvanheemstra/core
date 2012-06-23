/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 09:44:54 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_journal_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_journal_data`;
CREATE TABLE `tbl_kind_of_journal_data` (
  `kp_KindOfJournalID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfJournalName` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`kp_KindOfJournalID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
