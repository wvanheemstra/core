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
--  Delete all records of `tbl_input_data`
-- ----------------------------
DELETE FROM `tbl_input_data`;

-- ----------------------------
--  Records of `tbl_input_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_input_data` VALUES ('1', 'My Input', 'My Input Description', null, null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
