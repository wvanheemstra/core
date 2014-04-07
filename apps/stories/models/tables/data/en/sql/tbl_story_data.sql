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
--  Delete all records of `tbl_story`
-- ----------------------------
DELETE FROM `tbl_story`;

-- ----------------------------
--  Records of `tbl_story`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_story` VALUES 
('1','Story','Psycho','1','0','1',null,'0000-00-00 00:00:00'),
('1','Story','Alice in Wonderland','1','0','2',null,'0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
