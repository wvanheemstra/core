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
--  Table structure for `tbl_organisation_party`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_organisation_party`;
CREATE TABLE `tbl_organisation_party` (
  `kp_OrganisationPartyID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_OrganisationID` int(11) NOT NULL DEFAULT 0,
  `kf_PartyID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_OrganisationPartyID`),  
  FOREIGN KEY (`kf_OrganisationID`) REFERENCES `tbl_organisation` (`kp_OrganisationID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_PartyID`) REFERENCES `tbl_party` (`kp_PartyID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Organisation_Party.ts_Created` BEFORE INSERT ON `tbl_organisation_party` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
