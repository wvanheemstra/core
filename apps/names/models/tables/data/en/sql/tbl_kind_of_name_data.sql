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
--  Delete all records of `tbl_name`
-- ----------------------------
DELETE FROM `tbl_kind_of_name`;

-- ----------------------------
--  Records of `tbl_name`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_name` VALUES 
('1', 'Kind', 'First Name', null, '0000-00-00 00:00:00'), 
('2', 'Kind', 'Middle Name', null, '0000-00-00 00:00:00'), 
('3', 'Kind', 'Last Name', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
