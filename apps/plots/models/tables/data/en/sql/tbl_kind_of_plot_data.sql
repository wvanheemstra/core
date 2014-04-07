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
--  Delete all records of `tbl_kind_of_plot`
-- ----------------------------
DELETE FROM `tbl_kind_of_plot`;

-- ----------------------------
--  Records of `tbl_kind_of_plot`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_kind_of_plot` VALUES 
('1','Kind of Plot','Master Plot','0','1',null,'0000-00-00 00:00:00'),
('2','Kind of Plot','Sub Plot','0','2',null,'0000-00-00 00:00:00'),
('3','Kind of Plot','Detail Plot','0','3',null,'0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
