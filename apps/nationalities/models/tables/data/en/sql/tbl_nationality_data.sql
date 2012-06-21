/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/21/2012 18:01:26 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_nationality_data`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_nationality_data`;
CREATE TABLE `tbl_nationality_data` (
  `kp_NationalityID` int(11) NOT NULL AUTO_INCREMENT,
  `NationalityName` varchar(255) COLLATE utf8_bin NOT NULL,
  `kf_LanguageID` int(11) NOT NULL,
  PRIMARY KEY (`kp_NationalityID`),
  UNIQUE KEY `kp_NationalityID` (`kp_NationalityID`) USING BTREE,
  KEY `kf_LanguageID` (`kf_LanguageID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=194 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `tbl_nationality_data`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_nationality_data` VALUES ('1', 'Afghan', '1'), ('2', 'Albanian', '1'), ('3', 'Algerian', '1'), ('4', 'American', '1'), ('5', 'Andorran', '1'), ('6', 'Angolan', '1'), ('7', 'Antiguans', '1'), ('8', 'Argentinean', '1'), ('9', 'Armenian', '1'), ('10', 'Australian', '1'), ('11', 'Austrian', '1'), ('12', 'Azerbaijani', '1'), ('13', 'Bahamian', '1'), ('14', 'Bahraini', '1'), ('15', 'Bangladeshi', '1'), ('16', 'Barbadian', '1'), ('17', 'Barbudans', '1'), ('18', 'Batswana', '1'), ('19', 'Belarusian', '1'), ('20', 'Belgian', '1'), ('21', 'Belizean', '1'), ('22', 'Beninese', '1'), ('23', 'Bhutanese', '1'), ('24', 'Bolivian', '1'), ('25', 'Bosnian', '1'), ('26', 'Brazilian', '1'), ('27', 'British', '1'), ('28', 'Bruneian', '1'), ('29', 'Bulgarian', '1'), ('30', 'Burkinabe', '1'), ('31', 'Burmese', '1'), ('32', 'Burundian', '1'), ('33', 'Cambodian', '1'), ('34', 'Cameroonian', '1'), ('35', 'Canadian', '1'), ('36', 'Cape Verdean', '1'), ('37', 'Central African', '1'), ('38', 'Chadian', '1'), ('39', 'Chilean', '1'), ('40', 'Chinese', '1'), ('41', 'Colombian', '1'), ('42', 'Comoran', '1'), ('43', 'Congolese', '1'), ('44', 'Costa Rican', '1'), ('45', 'Croatian', '1'), ('46', 'Cuban', '1'), ('47', 'Cypriot', '1'), ('48', 'Czech', '1'), ('49', 'Danish', '1'), ('50', 'Djibouti', '1'), ('51', 'Dominican', '1'), ('52', 'Dutch', '1'), ('53', 'East Timorese', '1'), ('54', 'Ecuadorean', '1'), ('55', 'Egyptian', '1'), ('56', 'Emirian', '1'), ('57', 'Equatorial Guinean', '1'), ('58', 'Eritrean', '1'), ('59', 'Estonian', '1'), ('60', 'Ethiopian', '1'), ('61', 'Fijian', '1'), ('62', 'Filipino', '1'), ('63', 'Finnish', '1'), ('64', 'French', '1'), ('65', 'Gabonese', '1'), ('66', 'Gambian', '1'), ('67', 'Georgian', '1'), ('68', 'German', '1'), ('69', 'Ghanaian', '1'), ('70', 'Greek', '1'), ('71', 'Grenadian', '1'), ('72', 'Guatemalan', '1'), ('73', 'Guinea-Bissauan', '1'), ('74', 'Guinean', '1'), ('75', 'Guyanese', '1'), ('76', 'Haitian', '1'), ('77', 'Herzegovinian', '1'), ('78', 'Honduran', '1'), ('79', 'Hungarian', '1'), ('80', 'I-Kiribati', '1'), ('81', 'Icelander', '1'), ('82', 'Indian', '1'), ('83', 'Indonesian', '1'), ('84', 'Iranian', '1'), ('85', 'Iraqi', '1'), ('86', 'Irish', '1'), ('87', 'Israeli', '1'), ('88', 'Italian', '1'), ('89', 'Ivorian', '1'), ('90', 'Jamaican', '1'), ('91', 'Japanese', '1'), ('92', 'Jordanian', '1'), ('93', 'Kazakhstani', '1'), ('94', 'Kenyan', '1'), ('95', 'Kittian and Nevisian', '1'), ('96', 'Kuwaiti', '1'), ('97', 'Kyrgyz', '1'), ('98', 'Laotian', '1'), ('99', 'Latvian', '1'), ('100', 'Lebanese', '1'), ('101', 'Liberian', '1'), ('102', 'Libyan', '1'), ('103', 'Liechtensteiner', '1'), ('104', 'Lithuanian', '1'), ('105', 'Luxembourger', '1'), ('106', 'Macedonian', '1'), ('107', 'Malagasy', '1'), ('108', 'Malawian', '1'), ('109', 'Malaysian', '1'), ('110', 'Maldivan', '1'), ('111', 'Malian', '1'), ('112', 'Maltese', '1'), ('113', 'Marshallese', '1'), ('114', 'Mauritanian', '1'), ('115', 'Mauritian', '1'), ('116', 'Mexican', '1'), ('117', 'Micronesian', '1'), ('118', 'Moldovan', '1'), ('119', 'Monacan', '1'), ('120', 'Mongolian', '1'), ('121', 'Moroccan', '1'), ('122', 'Mosotho', '1'), ('123', 'Motswana', '1'), ('124', 'Mozambican', '1'), ('125', 'Namibian', '1'), ('126', 'Nauruan', '1'), ('127', 'Nepalese', '1'), ('128', 'New Zealander', '1'), ('129', 'Nicaraguan', '1'), ('130', 'Nigerian', '1'), ('131', 'Nigerien', '1'), ('132', 'North Korean', '1'), ('133', 'Northern Irish', '1'), ('134', 'Norwegian', '1'), ('135', 'Omani', '1'), ('136', 'Pakistani', '1'), ('137', 'Palauan', '1'), ('138', 'Panamanian', '1'), ('139', 'Papua New Guinean', '1'), ('140', 'Paraguayan', '1'), ('141', 'Peruvian', '1'), ('142', 'Polish', '1'), ('143', 'Portuguese', '1'), ('144', 'Qatari', '1'), ('145', 'Romanian', '1'), ('146', 'Russian', '1'), ('147', 'Rwandan', '1'), ('148', 'Saint Lucian', '1'), ('149', 'Salvadoran', '1'), ('150', 'Samoan', '1'), ('151', 'San Marinese', '1'), ('152', 'Sao Tomean', '1'), ('153', 'Saudi', '1'), ('154', 'Scottish', '1'), ('155', 'Senegalese', '1'), ('156', 'Serbian', '1'), ('157', 'Seychellois', '1'), ('158', 'Sierra Leonean', '1'), ('159', 'Singaporean', '1'), ('160', 'Slovakian', '1'), ('161', 'Slovenian', '1'), ('162', 'Solomon Islander', '1'), ('163', 'Somali', '1'), ('164', 'South African', '1'), ('165', 'South Korean', '1'), ('166', 'Spanish', '1'), ('167', 'Sri Lankan', '1'), ('168', 'Sudanese', '1'), ('169', 'Surinamer', '1'), ('170', 'Swazi', '1'), ('171', 'Swedish', '1'), ('172', 'Swiss', '1'), ('173', 'Syrian', '1'), ('174', 'Taiwanese', '1'), ('175', 'Tajik', '1'), ('176', 'Tanzanian', '1'), ('177', 'Thai', '1'), ('178', 'Togolese', '1'), ('179', 'Tongan', '1'), ('180', 'Trinidadian or Tobagonian', '1'), ('181', 'Tunisian', '1'), ('182', 'Turkish', '1'), ('183', 'Tuvaluan', '1'), ('184', 'Ugandan', '1'), ('185', 'Ukrainian', '1'), ('186', 'Uruguayan', '1'), ('187', 'Uzbekistani', '1'), ('188', 'Venezuelan', '1'), ('189', 'Vietnamese', '1'), ('190', 'Welsh', '1'), ('191', 'Yemenite', '1'), ('192', 'Zambian', '1'), ('193', 'Zimbabwean', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
