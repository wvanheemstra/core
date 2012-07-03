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
INSERT INTO `tbl_gender` VALUES ('1', 'Male', 0x277b22656e2d4742223a224d616c65222c226e6c2d4e4c223a224d616e227d27, '0', null, '2012-07-03 10:20:37'), ('2', 'Female', 0x277b22656e2d4742223a2246656d616c65222c226e6c2d4e4c223a2256726f7577227d27, '0', null, '2012-07-03 10:24:39');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
