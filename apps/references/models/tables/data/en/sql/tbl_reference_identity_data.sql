/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 14:19:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_reference_identity_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_reference_identity_data`;
CREATE TABLE `tbl_reference_identity_data` (
  `kf_ReferenceID` int(11) NOT NULL DEFAULT '0',
  `kf_IdentityID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `kf_ReferenceID` (`kf_ReferenceID`) USING BTREE,
  KEY `kf_IdentityID` (`kf_IdentityID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Reference_Identity.ts_Created` BEFORE INSERT ON `tbl_reference_identity_data` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
