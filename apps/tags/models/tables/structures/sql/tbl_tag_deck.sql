/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/05/2012 14:19:56 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_tag_deck`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_tag_deck`;
CREATE TABLE `tbl_tag_deck` (
  `kf_TagID` int(11) NOT NULL DEFAULT '0',
  `kf_DeckID` int(11) NOT NULL DEFAULT '0',
  `ts_Created` datetime DEFAULT NULL,
  `ts_Updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`kf_TagID`) REFERENCES `tbl_tag` (`kp_TagID`) ON DELETE CASCADE,
  FOREIGN KEY (`kf_DeckID`) REFERENCES `tbl_deck` (`kp_DeckID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
delimiter ;;
CREATE TRIGGER `Tag_Deck.ts_Created` BEFORE INSERT ON `tbl_tag_deck` FOR EACH ROW BEGIN
	SET NEW.ts_Created = CURRENT_TIMESTAMP();
END;
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
