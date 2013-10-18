/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:53:39 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_location_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_location_data`;
CREATE TABLE `tbl_location_data` (
  `kp_LocationID` int(11) NOT NULL AUTO_INCREMENT,
  `LocationAddress` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPlace` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationPostalCode` varchar(255) COLLATE utf8_bin NOT NULL,
  `LocationRegion` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_CountryID` int(11) NOT NULL DEFAULT '0',
  `kf_KindOfLocationID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kp_LocationID`),
  UNIQUE KEY `kp_LocationID` (`kp_LocationID`) USING BTREE,
  KEY `kf_CountryID` (`kf_CountryID`) USING BTREE,
  KEY `kf_KindOfLocationID` (`kf_KindOfLocationID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_location_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_location_data` VALUES ('8', '5 Dunedin Street', 'Edinburgh', 'EH7 4JB', 'Midlothian', '231', '0'), ('9', '63 Frederick Street', 'Edinburgh', 'EH2 1LH', 'City of Edinburgh', '231', '1'), ('10', 'Fleet Street 6', 'Aberville', '45R 6TF', 'AK', '2', '0'), ('11', '54b fjfjfds\rjfjfjdfjds', 'Ahhaah', '14234', 'GE', '1', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
