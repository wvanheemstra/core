/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Delete all records of `tbl_individual_name`
-- ----------------------------
DELETE FROM `tbl_individual_name`;

-- ----------------------------
--  Records of `tbl_individual_name`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_individual_name` VALUES 
('1', '1', '1', null, '0000-00-00 00:00:00'),
('2', '1', '3001', null, '0000-00-00 00:00:00'),
('3', '2', '2', null, '0000-00-00 00:00:00'),
('4', '2', '3002', null, '0000-00-00 00:00:00'),
('5', '3', '3', null, '0000-00-00 00:00:00'),
('6', '3', '3003', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
