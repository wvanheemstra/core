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
--  Delete all records of `tbl_reference`
-- ----------------------------
DELETE FROM `tbl_reference`;

-- ----------------------------
--  Records of `tbl_reference`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_reference` VALUES ('1', '0123456789', 'Example Reference', null, '2012-07-05 14:14:14');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
