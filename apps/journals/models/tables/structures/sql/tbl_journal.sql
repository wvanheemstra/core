/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 16:02:59 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_journal`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_journal`;
CREATE TABLE `tbl_journal` (
  `kp_JournalID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfJournalID` int(11) NOT NULL,
  `kf_BatchID` int(11) NOT NULL,
  `kf_DateID` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_JournalID`),
  KEY `kf_KindOfJournalID` (`kf_KindOfJournalID`),
  KEY `kf_BatchID` (`kf_BatchID`),
  KEY `kf_DateID` (`kf_DateID`)
) ENGINE=Innodb DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Journal.ts_Created` BEFORE INSERT ON `tbl_journal` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
