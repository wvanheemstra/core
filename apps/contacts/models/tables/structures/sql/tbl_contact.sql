/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/14/2012 21:41:28 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_contact`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_contact`;
CREATE TABLE `tbl_contact` (
  `__kp_ContactID` int(11) NOT NULL,
  `_kf_KindOfContactID` int(11) NOT NULL,
  `ContactValue` varchar(255) COLLATE utf8_bin NOT NULL,
  `_kf_MembershipID` int(11) NOT NULL,
  PRIMARY KEY (`__kp_ContactID`),
  UNIQUE KEY `__kp_ContactID` (`__kp_ContactID`),
  KEY `_kf_KindOfContactID` (`_kf_KindOfContactID`),
  KEY `_kf_MembershipID` (`_kf_MembershipID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
