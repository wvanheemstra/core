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
--  Delete all records of `tbl_salutation`
-- ----------------------------
DELETE FROM `tbl_salutation`;

-- ----------------------------
--  Records of `tbl_salutation`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_salutation` VALUES ('1', 'Mr', 0x7b22656e2d4742223a224d72222c2265732d4553223a2253c3b172222c226e6c2d4e4c223a224d72227d, '1', null, '2012-07-03 15:13:59'), ('2', 'Mrs', 0x7b22656e2d4742223a224d7273222c2265732d4553223a22537261222c226e6c2d4e4c223a224d657672227d, '1', null, '2012-07-03 15:14:38'), ('3', 'Miss', 0x7b22656e2d4742223a224d697373222c2265732d4553223a2253727461227d, '1', null, '2012-07-03 15:15:29'), ('4', 'Ms', 0x7b22656e2d4742223a224d73222c2265732d4553223a22537261227d, '1', null, '2012-07-03 15:16:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
