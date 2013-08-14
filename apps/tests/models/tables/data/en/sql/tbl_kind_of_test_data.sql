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
--  Delete all records of `tbl_kind_of_test`
-- ----------------------------
DELETE FROM `tbl_kind_of_test`;

-- ----------------------------
--  Records of `tbl_kind_of_test`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_test` VALUES ('1', 'Functionality', null, '0000-00-00 00:00:00'), ('2', 'Performance', null, '0000-00-00 00:00:00'), ('3', 'Load', null, '0000-00-00 00:00:00'), ('4', 'Compatibility', null, '0000-00-00 00:00:00'), ('5', '(Un)installation', null, '0000-00-00 00:00:00'), ('6', 'Usability', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
