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
--  Delete all records of `tbl_individual_gender`
-- ----------------------------
DELETE FROM `tbl_individual_gender`;

-- ----------------------------
--  Records of `tbl_individual_gender`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_individual_gender` VALUES 
('1', '1', '2', null, '0000-00-00 00:00:00'), 
('2', '2', '1', null, '0000-00-00 00:00:00'), 
('3', '3', '1', null, '0000-00-00 00:00:00'), 
('4', '4', '2', null, '0000-00-00 00:00:00'), 
('5', '5', '2', null, '0000-00-00 00:00:00'), 
('6', '6', '1', null, '0000-00-00 00:00:00'), 
('7', '7', '1', null, '0000-00-00 00:00:00'), 
('8', '8', '2', null, '0000-00-00 00:00:00'), 
('9', '9', '1', null, '0000-00-00 00:00:00'), 
('10', '10', '2', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
