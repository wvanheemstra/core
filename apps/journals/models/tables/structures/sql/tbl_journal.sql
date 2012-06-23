/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 09:34:58 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_journal`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_journal`;
CREATE TABLE `tbl_journal` (
  `kp_JournalID` int(11) NOT NULL,
  `kf_KindOfJournalID` int(11) NOT NULL,
  `kf_BatchID` int(11) NOT NULL,
  `kf_DateID` int(11) NOT NULL,
  PRIMARY KEY (`kp_JournalID`),
  KEY `kf_KindOfJournalID` (`kf_KindOfJournalID`),
  KEY `kf_BatchID` (`kf_BatchID`),
  KEY `kf_DateID` (`kf_DateID`),
  CONSTRAINT `kf_BatchID` FOREIGN KEY (`kf_BatchID`) REFERENCES `tbl_batch` (`kp_BatchID`),
  CONSTRAINT `kf_KindOfJournalID` FOREIGN KEY (`kf_KindOfJournalID`) REFERENCES `tbl_kind_of_journal` (`kp_KindOfJournalID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
