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
--  Table structure for `tbl_individual_party`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_individual_party`;
CREATE TABLE `tbl_individual_party` (
  `kp_IndividualPartyID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_IndividualID` int(11) NOT NULL DEFAULT 0,
  `kf_PartyID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_IndividualPartyID`),  
  FOREIGN KEY (`kf_IndividualID`) REFERENCES `tbl_individual` (`kp_IndividualID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_PartyID`) REFERENCES `tbl_party` (`kp_PartyID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Individual_Party.ts_Created` BEFORE INSERT ON `tbl_individual_party` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;