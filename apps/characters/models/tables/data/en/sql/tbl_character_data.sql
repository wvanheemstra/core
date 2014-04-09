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
--  Delete all records of `tbl_plot`
-- ----------------------------
DELETE FROM `tbl_plot`;

-- ----------------------------
--  Records of `tbl_plot`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_plot` VALUES 
('1','Plot','Circle','1','0','1',null,'0000-00-00 00:00:00'),
('2','Plot','Switch','1','0','2',null,'0000-00-00 00:00:00'),
('3','Plot','Character Transformation','1','0','3',null,'0000-00-00 00:00:00'),
('4','Plot','Copycat','2','0','4',null,'0000-00-00 00:00:00'),
('5','Plot','Stuck','2','0','5',null,'0000-00-00 00:00:00'),
('6','Plot','Contest','2','0','6',null,'0000-00-00 00:00:00'),
('7','Plot','Physical Transformation','2','0','7',null,'0000-00-00 00:00:00'),
('8','Plot','Metamorphosis','2','0','8',null,'0000-00-00 00:00:00'),
('9','Plot','Transformation','2','0','9',null,'0000-00-00 00:00:00'),
('10','Plot','Maturation','2','0','10',null,'0000-00-00 00:00:00'),
('11','Plot','Love','2','0','11',null,'0000-00-00 00:00:00'),
('12','Plot','Forbidden Love','2','0','12',null,'0000-00-00 00:00:00'),
('13','Plot','Sacrifice','2','0','13',null,'0000-00-00 00:00:00'),
('14','Plot','Discovery','2','0','14',null,'0000-00-00 00:00:00'),
('15','Plot','Wretched Excess','2','0','15',null,'0000-00-00 00:00:00'),
('16','Plot','Ascension','2','0','16',null,'0000-00-00 00:00:00'),
('17','Plot','Descension','2','0','17',null,'0000-00-00 00:00:00'),
('18','Plot','Quest','2','0','18',null,'0000-00-00 00:00:00'),
('19','Plot','Adventure','2','0','19',null,'0000-00-00 00:00:00'),
('20','Plot','Pursuit','2','0','20',null,'0000-00-00 00:00:00'),
('21','Plot','Rescue','2','0','21',null,'0000-00-00 00:00:00'),
('22','Plot','Escape','2','0','22',null,'0000-00-00 00:00:00'),
('23','Plot','Revenge','2','0','23',null,'0000-00-00 00:00:00'),
('24','Plot','The Riddle','2','0','24',null,'0000-00-00 00:00:00'),
('25','Plot','Rivalry','2','0','25',null,'0000-00-00 00:00:00'),
('26','Plot','Underdog','2','0','26',null,'0000-00-00 00:00:00'),
('27','Plot','Temptation','2','0','27',null,'0000-00-00 00:00:00'),
('28','Plot','Madness','3','0','26',null,'0000-00-00 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
