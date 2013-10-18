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
--  Table structure for `tbl_file_tag`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_file_tag`;
CREATE TABLE `tbl_file_tag` (
  `kf_FileID` int(11) NOT NULL DEFAULT '0',
  `kf_TagID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`kf_FileID`) REFERENCES `tbl_file` (`kp_FileID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_TagID`) REFERENCES `tbl_tag` (`kp_TagID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `File_Tag.ts_Created` BEFORE INSERT ON `tbl_file_tag` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
