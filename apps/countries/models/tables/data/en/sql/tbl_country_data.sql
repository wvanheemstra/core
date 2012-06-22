/*
 Navicat MySQL Data Transfer

 Source Server         : wvanheem_core_local
 Source Server Version : 50509
 Source Host           : 127.0.0.1
 Source Database       : core

 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 06/22/2012 21:50:29 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Delete all records of `tbl_country`
-- ----------------------------
DELETE FROM `tbl_country`;

-- ----------------------------
--  Records of `tbl_country`
-- ----------------------------
BEGIN;
INSERT INTO `tbl_country_data` VALUES ('1', 'AF', 'Afghanistan'), ('2', 'AX', 'Aland Islands'), ('3', 'AL', 'Albania'), ('4', 'DZ', 'Algeria'), ('5', 'AS', 'American Samoa'), ('6', 'AD', 'Andorra'), ('7', 'AO', 'Angola'), ('8', 'AI', 'Anguilla'), ('9', 'AQ', 'Antarctica'), ('10', 'AG', 'Antigua and Barbuda'), ('11', 'AR', 'Argentina'), ('12', 'AM', 'Armenia'), ('13', 'AW', 'Aruba'), ('14', 'AU', 'Australia'), ('15', 'AT', 'Austria'), ('16', 'AZ', 'Azerbaijan'), ('17', 'BS', 'Bahamas'), ('18', 'BH', 'Bahrain'), ('19', 'BD', 'Bangladesh'), ('20', 'BB', 'Barbados'), ('21', 'BY', 'Belarus'), ('22', 'BE', 'Belgium'), ('23', 'BZ', 'Belize'), ('24', 'BJ', 'Benin'), ('25', 'BM', 'Bermuda'), ('26', 'BT', 'Bhutan'), ('27', 'BO', 'Bolivia'), ('28', 'BA', 'Bosnia and Herzegovina'), ('29', 'BW', 'Botswana'), ('30', 'BV', 'Bouvet Island'), ('31', 'BR', 'Brazil'), ('32', 'IO', 'British Indian Ocean Territory'), ('33', 'BN', 'Brunei Darussalam'), ('34', 'BG', 'Bulgaria'), ('35', 'BF', 'Burkina Faso'), ('36', 'BI', 'Burundi'), ('37', 'KH', 'Cambodia'), ('38', 'CM', 'Cameroon'), ('39', 'CA', 'Canada'), ('40', 'CV', 'Cape Verde'), ('41', 'KY', 'Cayman Islands'), ('42', 'CF', 'Central African Republic'), ('43', 'TD', 'Chad'), ('44', 'CL', 'Chile'), ('45', 'CN', 'China'), ('46', 'CX', 'Christmas Island'), ('47', 'CC', 'Cocos (keeling) Islands'), ('48', 'CO', 'Colombia'), ('49', 'KM', 'Comoros'), ('50', 'CG', 'Congo'), ('51', 'CD', 'Congo, The Democratic Republic Of The'), ('52', 'CK', 'Cook Islands'), ('53', 'CR', 'Costa Rica'), ('54', 'CI', 'Cook Islands'), ('55', 'HR', 'Croatia'), ('56', 'CU', 'Cuba'), ('57', 'CY', 'Cyprus'), ('58', 'CZ', 'Czech Republic'), ('59', 'DK', 'Denmark'), ('60', 'DJ', 'Djibouti'), ('61', 'DM', 'Dominica'), ('62', 'DO', 'Dominican Republic'), ('63', 'EC', 'Ecuador'), ('64', 'EG', 'Egypt'), ('65', 'SV', 'El Salvador'), ('66', 'GQ', 'Equatorial Guinea'), ('67', 'ER', 'Eritrea'), ('68', 'EE', 'Estonia'), ('69', 'ET', 'Ethiopia'), ('70', 'FK', 'Falkland Islands (Malvinas)'), ('71', 'FO', 'Faroe Islands'), ('72', 'FJ', 'Fiji'), ('73', 'FI', 'Finland'), ('74', 'FR', 'France'), ('75', 'GF', 'French Guiana'), ('76', 'PF', 'French Polynesia'), ('77', 'TF', 'French Southern Territories'), ('78', 'GA', 'Gabon'), ('79', 'GM', 'Gambia'), ('80', 'GE', 'Georgia'), ('81', 'DE', 'Germany'), ('82', 'GH', 'Ghana'), ('83', 'GI', 'Gibraltar'), ('84', 'GR', 'Greece'), ('85', 'GL', 'Greenland'), ('86', 'GD', 'Grenada'), ('87', 'GP', 'Guadeloupe'), ('88', 'GU', 'Guam'), ('89', 'GT', 'Guatemala'), ('90', 'GG', 'Guernsey'), ('91', 'GN', 'Guinea'), ('92', 'GW', 'Guinea-bissau'), ('93', 'GY', 'Guyana'), ('94', 'HT', 'Haiti'), ('95', 'HM', 'Heard Island and McDonald Islands'), ('96', 'HN', 'Honduras'), ('97', 'HK', 'Hong Kong'), ('98', 'HU', 'Hungary'), ('99', 'IS', 'Iceland'), ('100', 'IN', 'India'), ('101', 'ID', 'Indonesia'), ('102', 'IR', 'Iran, Islamic Republic Of'), ('103', 'IQ', 'Iraq'), ('104', 'IE', 'Ireland'), ('105', 'IM', 'Isle Of Man'), ('106', 'IL', 'Israel'), ('107', 'IT', 'Italy'), ('108', 'JM', 'Jamaica'), ('109', 'JP', 'Japan'), ('110', 'JE', 'Jersey'), ('111', 'JO', 'Jordan'), ('112', 'KZ', 'Kazakhstan'), ('113', 'KE', 'Kenya'), ('114', 'KI', 'Kiribati'), ('115', 'KP', 'Korea, Democratic People\'s Republic Of'), ('116', 'KR', 'Korea, Republic Of'), ('117', 'KW', 'Kuwait'), ('118', 'KG', 'Kyrgyzstan'), ('119', 'LA', 'Lao People\'s Democratic Republic'), ('120', 'LV', 'Latvia'), ('121', 'LB', 'Lebanon'), ('122', 'LS', 'Lesotho'), ('123', 'LR', 'Liberia'), ('124', 'LY', 'Libyan Arab Jamahiriya'), ('125', 'LI', 'Liechtenstein'), ('126', 'LT', 'Lithuania'), ('127', 'LU', 'Luxembourg'), ('128', 'MO', 'Macao'), ('129', 'MK', 'Macedonia, The Former Yugoslav Republic Of'), ('130', 'MG', 'Madagascar'), ('131', 'MW', 'Malawi'), ('132', 'MY', 'Malaysia'), ('133', 'MV', 'Maldives'), ('134', 'ML', 'Mali'), ('135', 'MT', 'Malta'), ('136', 'MH', 'Marshall Islands'), ('137', 'MQ', 'Martinique'), ('138', 'MR', 'Mauritania'), ('139', 'MU', 'Mauritius'), ('140', 'YT', 'Mayotte'), ('141', 'MX', 'Mexico'), ('142', 'FM', 'Micronesia, Federated States Of'), ('143', 'MD', 'Moldova'), ('144', 'MC', 'Monaco'), ('145', 'MN', 'Mongolia'), ('146', 'ME', 'Montenegro'), ('147', 'MS', 'Montserrat'), ('148', 'MA', 'Morocco'), ('149', 'MZ', 'Mozambique'), ('150', 'MM', 'Myanmar'), ('151', 'NA', 'Namibia'), ('152', 'NR', 'Nauru'), ('153', 'NP', 'Nepal'), ('154', 'NL', 'Netherlands'), ('155', 'AN', 'Netherlands Antilles'), ('156', 'NC', 'New Caledonia'), ('157', 'NZ', 'New Zealand'), ('158', 'NI', 'Nicaragua'), ('159', 'NE', 'Niger'), ('160', 'NG', 'Nigeria'), ('161', 'NU', 'Niue'), ('162', 'NF', 'Norfolk Island'), ('163', 'MP', 'Northern Mariana Islands'), ('164', 'NO', 'Norway'), ('165', 'OM', 'Oman'), ('166', 'PK', 'Pakistan'), ('167', 'PW', 'Palau'), ('168', 'PS', 'Palestinian Territory, Occupied'), ('169', 'PA', 'Panama'), ('170', 'PG', 'Papua New Guinea'), ('171', 'PY', 'Paraguay'), ('172', 'PE', 'Peru'), ('173', 'PH', 'Philippines'), ('174', 'PN', 'Pitcairn'), ('175', 'PL', 'Poland'), ('176', 'PT', 'Portugal'), ('177', 'PR', 'Puerto Rico'), ('178', 'QA', 'Qatar'), ('179', 'RE', 'Reunion Island'), ('180', 'RO', 'Romania'), ('181', 'RU', 'Russian Federation'), ('182', 'RW', 'Rwanda'), ('183', 'BL', 'Saint Barth'), ('184', 'SH', 'Saint Helena'), ('185', 'KN', 'Saint Kitts and Nevis'), ('186', 'LC', 'Saint Lucia'), ('187', 'MF', 'Saint Martin'), ('188', 'PM', 'Saint Pierre and Miquelon'), ('189', 'VC', 'Saint Vincent and The Grenadines'), ('190', 'WS', 'Samoa'), ('191', 'SM', 'San Marino'), ('192', 'ST', 'Sao Tome and Principe'), ('193', 'SA', 'Saudi Arabia'), ('194', 'SN', 'Senegal'), ('195', 'RS', 'Serbia'), ('196', 'SC', 'Seychelles'), ('197', 'SL', 'Sierra Leone'), ('198', 'SG', 'Singapore'), ('199', 'SK', 'Slovakia'), ('200', 'SI', 'Slovenia'), ('201', 'SB', 'Solomon Islands'), ('202', 'SO', 'Somalia'), ('203', 'ZA', 'South Africa'), ('204', 'GS', 'South Georgia and The South Sandwich Islands'), ('205', 'ES', 'Spain'), ('206', 'LK', 'Sri Lanka'), ('207', 'SD', 'Sudan'), ('208', 'SR', 'Suriname'), ('209', 'SJ', 'Svalbard and Jan Mayen'), ('210', 'SZ', 'Swaziland'), ('211', 'SE', 'Sweden'), ('212', 'CH', 'Switzerland'), ('213', 'SY', 'Syrian Arab Republic'), ('214', 'TW', 'Taiwan, Province Of China'), ('215', 'TJ', 'Tajikistan'), ('216', 'TZ', 'Tanzania, United Republic Of'), ('217', 'TH', 'Thailand'), ('218', 'TL', 'Timor-leste'), ('219', 'TG', 'Togo'), ('220', 'TK', 'Tokelau'), ('221', 'TO', 'Tonga'), ('222', 'TT', 'Trinidad and Tobago'), ('223', 'TN', 'Tunisia'), ('224', 'TR', 'Turkey'), ('225', 'TM', 'Turkmenistan'), ('226', 'TC', 'Turks and Caicos Islands'), ('227', 'TV', 'Tuvalu'), ('228', 'UG', 'Uganda'), ('229', 'UA', 'Ukraine'), ('230', 'AE', 'United Arab Emirates'), ('231', 'GB', 'United Kingdom'), ('232', 'US', 'United States'), ('233', 'UM', 'United States Minor Outlying Islands'), ('234', 'UY', 'Uruguay'), ('235', 'UZ', 'Uzbekistan'), ('236', 'VU', 'Vanuatu'), ('237', 'VA', 'Vatican City State'), ('238', 'VE', 'Venezuela'), ('239', 'VN', 'Viet Nam'), ('240', 'VG', 'Virgin Islands, British'), ('241', 'VI', 'Virgin Islands, U.S.'), ('242', 'WF', 'Wallis and Futuna'), ('243', 'EH', 'Western Sahara'), ('244', 'YE', 'Yemen'), ('245', 'ZM', 'Zambia'), ('246', 'ZW', 'Zimbabwe'), ('247', 'XX', 'Xanadu');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
