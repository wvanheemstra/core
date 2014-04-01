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
--  Delete all records of `tbl_name`
-- ----------------------------
DELETE FROM `tbl_name`;

-- ----------------------------
--  Records of `tbl_name`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_name` VALUES 
('1', 'Name', 'Zenaida', '1', null, '0000-00-00 00:00:00'), ('2', 'Name', 'Rodarte', '3', null, '0000-00-00 00:00:00'), 
('3', 'Name', 'Giuseppe', '1', null, '0000-00-00 00:00:00'), ('4', 'Name', 'Cerda', '3', null, '0000-00-00 00:00:00'),
('5', 'Name', 'Ettiene', '1', null, '0000-00-00 00:00:00'), ('6', 'Name', 'Montero', '3', null, '0000-00-00 00:00:00'),
('7', 'Name', 'Lilibet', '1', null, '0000-00-00 00:00:00'), ('8', 'Name', 'Suárez', '3', null, '0000-00-00 00:00:00'),
('9', 'Name', 'Encarnación', '1', null, '0000-00-00 00:00:00'), ('10', 'Name', 'Correa', '3', null, '0000-00-00 00:00:00'),
('11', 'Name', 'Cesáreo', '1', null, '0000-00-00 00:00:00'), ('12', 'Name', 'Almonte', '3', null, '0000-00-00 00:00:00'),
('13', 'Name', 'Wenzel', '1', null, '0000-00-00 00:00:00'), ('14', 'Name', 'Solórzano', '3', null, '0000-00-00 00:00:00'),
('15', 'Name', 'Nikita', '1', null, '0000-00-00 00:00:00'), ('16', 'Name', 'Cardona', '3', null, '0000-00-00 00:00:00'),
('17', 'Name', 'Hermelando', '1', null, '0000-00-00 00:00:00'), ('18', 'Name', 'Medina', '3', null, '0000-00-00 00:00:00'),
('19', 'Name', 'Benilda', '1', null, '0000-00-00 00:00:00'), ('20', 'Name', 'Castellanos', '3', null, '0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
