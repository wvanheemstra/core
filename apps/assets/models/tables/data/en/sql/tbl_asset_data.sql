/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/23/2012 10:24:37 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_asset_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_asset_data`;
CREATE TABLE `tbl_asset_data` (
  `kp_AssetID` int(11) NOT NULL AUTO_INCREMENT,
  `kf_KindOfAssetID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kp_AssetID`),
  KEY `kf_KindOfAssetID` (`kf_KindOfAssetID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
