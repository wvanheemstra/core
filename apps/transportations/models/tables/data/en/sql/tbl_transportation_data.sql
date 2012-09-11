/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:17:32 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_transportation_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_transportation_data`;
CREATE TABLE `tbl_transportation_data` (
  `kp_TransportationID` int(11) NOT NULL AUTO_INCREMENT,
  `TransportationName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL,
  `kf_KindOfTransportationID` int(11) NOT NULL,
  PRIMARY KEY (`kp_TransportationID`),
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE,
  KEY `kf_KindOfTransportationID` (`kf_KindOfTransportationID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_transportation_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_transportation_data` VALUES ('1', '', '0', '3'), ('2', '', '0', '4');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
