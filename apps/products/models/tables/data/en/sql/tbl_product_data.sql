/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:11:39 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_product_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_product_data`;
CREATE TABLE `tbl_product_data` (
  `kp_ProductID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfProductID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_ProductID`),
  KEY `kf_KindOfProductID` (`kf_KindOfProductID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_product_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_product_data` VALUES ('8', '1', '26'), ('9', '1', '29'), ('10', '1', '30');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
