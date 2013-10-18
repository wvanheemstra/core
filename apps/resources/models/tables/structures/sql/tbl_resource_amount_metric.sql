/*
 Navicat MySQL Data Transfer

 Amount Server         : wvanheem_core_local
 Amount Server Version : 50509
 Amount Host           : 127.0.0.1
 Amount Database       : core

 Metric Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 14:19:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_resource_amount_metric`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_resource_amount_metric`;
CREATE TABLE `tbl_resource_amount_metric` (
  `kp_ResourceAmountMetricID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_ResourceID` int(11) NOT NULL DEFAULT '0',  
  `kf_AmountID` int(11) NOT NULL DEFAULT '0',
  `kf_MetricID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`kp_ResourceAmountMetricID`),
  FOREIGN KEY (`kf_ResourceID`) REFERENCES `tbl_resource` (`kp_ResourceID`) ON DELETE CASCADE,  
  FOREIGN KEY (`kf_AmountID`) REFERENCES `tbl_amount` (`kp_AmountID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_MetricID`) REFERENCES `tbl_metric` (`kp_MetricID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `ResourceAmount_Metric.ts_Created` BEFORE INSERT ON `tbl_resource_amount_metric` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
