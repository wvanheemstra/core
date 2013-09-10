/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 21:50:29 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Delete all records of `tbl_kind_of_step`
-- ----------------------------
DELETE FROM `tbl_kind_of_step`;

-- ----------------------------
--  Records of `tbl_kind_of_step`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_step` VALUES ('1', 'Some Step', null, '0000-00-00 00:00:00'), ('2', 'Some Other Step', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
