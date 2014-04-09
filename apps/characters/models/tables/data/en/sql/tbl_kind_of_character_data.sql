/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 17:47:26 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Delete all records of `tbl_kind_of_character`
-- ----------------------------
DELETE FROM `tbl_kind_of_character`;

-- ----------------------------
--  Records of `tbl_kind_of_character`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_character` VALUES 
('1','Kind of Character','Animal','0','1',null,'0000-00-00 00:00:00'),
('1','Kind of Character','Child','0','1',null,'0000-00-00 00:00:00'),
('1','Kind of Character','Robot','0','1',null,'0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
