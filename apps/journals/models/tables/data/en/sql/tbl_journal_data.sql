/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 10:08:48 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_journal_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_journal_data`;
CREATE TABLE `tbl_journal_data` (
  `kp_JournalID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfJournalID` int(11) NOT NULL,
  `kf_BatchID` int(11) NOT NULL,
  `kf_DateID` int(11) NOT NULL,
  PRIMARY KEY (`kp_JournalID`),
  KEY `kf_KindOfJournalID` (`kf_KindOfJournalID`),
  KEY `kf_BatchID` (`kf_BatchID`),
  KEY `kf_DateID` (`kf_DateID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
