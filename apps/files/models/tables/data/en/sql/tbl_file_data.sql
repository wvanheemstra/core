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
--  Delete all records of `tbl_file`
-- ----------------------------
DELETE FROM `tbl_file`;

-- ----------------------------
--  Records of `tbl_file`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_file` VALUES ('1', 'My File Name', 'My File Description', '0', '0', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
