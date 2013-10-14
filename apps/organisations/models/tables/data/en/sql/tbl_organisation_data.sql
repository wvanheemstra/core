/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 13:27:09 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_organisation_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_organisation_data`;
CREATE TABLE `tbl_organisation_data` (
  `kp_OrganisationID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_WhereaboutsID` int(11) NOT NULL,
  `OrganisationName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_KindOfOrganisationID` int(11) NOT NULL,  
  PRIMARY KEY (`kp_OrganisationID`),
  UNIQUE KEY `kp_OrganisationID` (`kp_OrganisationID`) USING BTREE,
  KEY `kf_WhereaboutsID` (`kf_WhereaboutsID`) USING BTREE,
  KEY `kf_KindOfOrganisationID` (`kf_KindOfOrganisationID`) USING BTREE  
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_organisation_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_organisation_data` VALUES ('8', '8', '', '0'), ('9', '9', 'Randolph School of English', '0'), ('10', '10', '', '0'), ('11', '14', '', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
