/*
 Navicat MySQL Data Transfer

 Driver Server         : wvanheem_core_local
 Driver Server Version : 50509
 Driver Host           : 127.0.0.1
 Driver Database       : core

 Driver Server Version : 50509
 File Encoding         : utf-8

 Date: 06/29/2012 12:40:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_driver`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_driver`;
CREATE TABLE `tbl_driver` (
  `kp_DriverID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfDriverID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_DriverID`),
  KEY `kf_KindOfDriverID` (`kf_KindOfDriverID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Driver.ts_Created` BEFORE INSERT ON `tbl_driver` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
