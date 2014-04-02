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
--  Delete all records of `tbl_gender`
-- ----------------------------
DELETE FROM `tbl_gender`;

-- ----------------------------
--  Records of `tbl_gender`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_gender` VALUES 
('1', 'Gender', 'Male', '0', '1', '1', null, '0000-00-00 00:00:00'), 
('2', 'Gender', 'Female', '0', '1', '2', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
