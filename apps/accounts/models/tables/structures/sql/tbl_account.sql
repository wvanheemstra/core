/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 08:50:30 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_account`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_account`;
CREATE TABLE `tbl_account` (
  `kp_AccountID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfAccountID` int(11) NOT NULL,
  PRIMARY KEY (`kp_AccountID`),
  KEY `kf_KindOfAccountID` (`kf_KindOfAccountID`),
  CONSTRAINT `kf_KindOfAccountID` FOREIGN KEY (`kf_KindOfAccountID`) REFERENCES `tbl_kind_of_account` (`kp_KindOfAccountID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
