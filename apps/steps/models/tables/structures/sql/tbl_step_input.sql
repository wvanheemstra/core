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
--  Table structure for `tbl_step_input`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_step_input`;
CREATE TABLE `tbl_step_input` (
  `kf_StepID` int(11) NOT NULL DEFAULT '0',
  `kf_InputID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`kf_StepID`) REFERENCES `tbl_step` (`kp_StepID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_InputID`) REFERENCES `tbl_input` (`kp_InputID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Step_Input.ts_Created` BEFORE INSERT ON `tbl_step_input` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
