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
--  Delete all records of `tbl_identity`
-- ----------------------------
DELETE FROM `tbl_identity`;

-- ----------------------------
--  Records of `tbl_identity`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_identity` VALUES ('1', 'joe', '1', null, '2012-07-05 14:14:14');
INSERT INTO `tbl_identity` VALUES ('2', 'secret', '2', null, '2012-07-05 14:14:14');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
