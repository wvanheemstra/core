/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:38:58 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_multimedia`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_multimedia`;
CREATE TABLE `tbl_multimedia` (
  `kp_MultimediaID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfMultimediaID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_MultimediaID`),
  UNIQUE KEY `kp_MultimediaID` (`kp_MultimediaID`) USING BTREE,
  KEY `kf_KindOfMultimediaID` (`kf_KindOfMultimediaID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Multimedia.ts_Created` BEFORE INSERT ON `tbl_multimedia` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
