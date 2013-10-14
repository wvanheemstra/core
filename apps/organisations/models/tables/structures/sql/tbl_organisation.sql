/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:39:43 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_organisation`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_organisation`;
CREATE TABLE `tbl_organisation` (
  `kp_OrganisationID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_WhereaboutsID` int(11) NOT NULL,
  `OrganisationName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfOrganisationID` int(11) NOT NULL, 
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_OrganisationID`),
  UNIQUE KEY `kp_OrganisationID` (`kp_OrganisationID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfOrganisationID` (`kf_KindOfOrganisationID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Organisation.ts_Created` BEFORE INSERT ON `tbl_organisation` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
