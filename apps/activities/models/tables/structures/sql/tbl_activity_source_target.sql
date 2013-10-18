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
--  Table structure for `tbl_activity_source_target`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_activity_source_target`;
CREATE TABLE `tbl_activity_source_target` (
  `kp_ActivitySourceTargetID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_ActivityID` int(11) NOT NULL DEFAULT 0,  
  `kf_SourceID` int(11) NOT NULL DEFAULT 0,
  `kf_TargetID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_ActivitySourceTargetID`),
  FOREIGN KEY (`kf_ActivityID`) REFERENCES `tbl_activity` (`kp_ActivityID`) ON DELETE CASCADE,  
  FOREIGN KEY (`kf_SourceID`) REFERENCES `tbl_source` (`kp_SourceID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_TargetID`) REFERENCES `tbl_target` (`kp_TargetID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `ActivitySource_Target.ts_Created` BEFORE INSERT ON `tbl_activity_source_target` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
