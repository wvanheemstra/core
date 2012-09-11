/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:47:26 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_kind_of_person_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_kind_of_person_data`;
CREATE TABLE `tbl_kind_of_person_data` (
  `kp_KindOfPersonID` int(11) NOT NULL AUTO_INCREMENT,
  `KindOfPersonName` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`kp_KindOfPersonID`),
  UNIQUE KEY `kp_KindOfPersonID` (`kp_KindOfPersonID`) USING BTREE
) ENGINE=Innodb AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_kind_of_person_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_person_data` VALUES ('1', 'Self'), ('2', 'Emergency'), ('3', 'Registrar');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
