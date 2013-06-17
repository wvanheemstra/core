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
--  View structure for `tag_deck`
-- ----------------------------
DROP VIEW IF EXISTS `tag_deck`;
CREATE VIEW `tag_deck` AS 
  SELECT `kf_TagID`,
	`kf_DeckID`,
	`ts_Created`,
	`ts_Updated`
FROM tbl_tag_deck;

SET FOREIGN_KEY_CHECKS = 1;