/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:52:10 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Delete all records of `tbl_language`
-- ----------------------------
DELETE FROM `tbl_language`;

-- ----------------------------
--  Records of `tbl_language`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_language` VALUES ('1', 'Language', 'English', '0', '1', '1', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
