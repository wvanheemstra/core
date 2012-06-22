/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  View structure for `contact`
-- ----------------------------
DROP VIEW IF EXISTS `contact`;
CREATE VIEW `contact` AS 
  SELECT `kp_ContactID`, 
	`kf_KindOfContactID`, 
	`ContactValue`, 
	`kf_MembershipID`
FROM tbl_contact;

SET FOREIGN_KEY_CHECKS = 1;
