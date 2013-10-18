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
--  Table structure for `tbl_person_group`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_person_group`;
CREATE TABLE `tbl_person_group` (
  `kp_PersonGroupID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PersonID` int(11) NOT NULL DEFAULT '0',
  `kf_GroupID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_PersonGroupID`),
  FOREIGN KEY (`kf_PersonID`) REFERENCES `tbl_person` (`kp_PersonID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_GroupID`) REFERENCES `tbl_group` (`kp_GroupID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Person_Group.ts_Created` BEFORE INSERT ON `tbl_person_group` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
