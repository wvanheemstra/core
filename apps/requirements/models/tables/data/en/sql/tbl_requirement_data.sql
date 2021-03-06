/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:10:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_requirement_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_requirement_data`;
CREATE TABLE `tbl_requirement_data` (
  `kp_RequirementID` int(11) NOT NULL AUTO_INCREMENT,
  `RequirementName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_RequirementID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_requirement_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_requirement_data` VALUES ('194', 'vegetarian, no cats\rsome more', '0'), ('195', 'carrots', '0'), ('196', 'something else', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
