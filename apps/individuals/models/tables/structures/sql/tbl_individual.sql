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
--  Table structure for `tbl_individual`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_individual`;
CREATE TABLE `tbl_individual` (
  `kp_IndividualID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfIndividualID` int(11) NOT NULL DEFAULT 0,
  `RelationshipWithSelf` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_RequirementID` int(11) NOT NULL DEFAULT 0,
  `kf_SkillID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_IndividualID`),
  KEY `kf_KindOfIndividualID` (`kf_KindOfIndividualID`) USING BTREE,
  KEY `kf_RequirementID` (`kf_RequirementID`) USING BTREE,
  KEY `kf_SkillID` (`kf_SkillID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Individual.ts_Created` BEFORE INSERT ON `tbl_individual` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
