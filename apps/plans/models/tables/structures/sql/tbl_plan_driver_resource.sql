/*
 Navicat MySQL Data Transfer

 Driver Server         : wvanheem_core_local
 Driver Server Version : 50509
 Driver Host           : 127.0.0.1
 Driver Database       : core

 Resource Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 14:19:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_plan_driver_resource`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_plan_driver_resource`;
CREATE TABLE `tbl_plan_driver_resource` (
  `kp_PlanDriverResourceID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_PlanID` int(11) NOT NULL DEFAULT 0,  
  `kf_DriverID` int(11) NOT NULL DEFAULT 0,
  `kf_ResourceID` int(11) NOT NULL DEFAULT 0,
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_PlanDriverResourceID`),
  FOREIGN KEY (`kf_PlanID`) REFERENCES `tbl_plan` (`kp_PlanID`) ON DELETE CASCADE,  
  FOREIGN KEY (`kf_DriverID`) REFERENCES `tbl_driver` (`kp_DriverID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_ResourceID`) REFERENCES `tbl_resource` (`kp_ResourceID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `PlanDriver_Resource.ts_Created` BEFORE INSERT ON `tbl_plan_driver_resource` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
