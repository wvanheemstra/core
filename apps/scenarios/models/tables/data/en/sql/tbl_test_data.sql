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
--  Delete all records of `tbl_test_data`
-- ----------------------------
DELETE FROM `tbl_test_data`;

-- ----------------------------
--  Records of `tbl_test_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_test_data` VALUES ('1', 'My Test', 'My Test Description', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
