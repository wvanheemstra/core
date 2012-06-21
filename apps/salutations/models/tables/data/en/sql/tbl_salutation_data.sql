/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:12:46 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_salutation_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_salutation_data`;
CREATE TABLE `tbl_salutation_data` (
  `kp_SalutationID` int(11) NOT NULL AUTO_INCREMENT,
  `SalutationAbbreviation` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`kp_SalutationID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_salutation_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_salutation_data` VALUES ('1', 'Mr', '1'), ('2', 'Mrs', '1'), ('3', 'Miss', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
