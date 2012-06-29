/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:29:57 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_contact`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_contact`;
CREATE TABLE `tbl_contact` (
  `kp_ContactID` int(11) NOT NULL,
  `kf_KindOfContactID` int(11) NOT NULL,
  `ContactValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_MembershipID` int(11) NOT NULL,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_ContactID`),
  UNIQUE KEY `kp_ContactID` (`kp_ContactID`) USING BTREE,
  KEY `kf_KindOfContactID` (`kf_KindOfContactID`) USING BTREE,
  KEY `kf_MembershipID` (`kf_MembershipID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Contact.ts_Created` BEFORE INSERT ON `tbl_contact` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
