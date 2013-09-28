/**
 * The mock nationality service object.
 */
Ext.define("Core.service.nationality.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getNationalitySlide: function() {
        this.logger.debug("getNationalitySlide");

        var response = {
            success: true,
            nationalitySlide: [
                { kp_NationalityID: 1,    NationalityName:  'Afghan'}, 
				{ kp_NationalityID: 2,    NationalityName:  'Albanian'}
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getNationalityList: function() {
        this.logger.debug("getNationalityList");

        var response = {
            success: true,
            nationalityList: [
                { kp_NationalityID: 1,    NationalityName:  'Afghan'}, 
				{ kp_NationalityID: 2,    NationalityName:  'Albanian'}
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getNationalityTile: function() {
        this.logger.debug("getNationalityTile");

        var response = {
            success: true,
            nationalityTile: [
                { kp_NationalityID: 1,    NationalityName:  'Afghan'}, 
				{ kp_NationalityID: 2,    NationalityName:  'Albanian'}
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createNationality: function(nationality) {
        this.logger.debug("createNationality");

        var response = {
            success: true,
            nationality: {
                kp_NationalityID: this.getRandomInt(1000, 99999),
				NationalityName: nationality.NationalityName
            }
        };

        response = Ext.create("Core.model.nationality.Model", response.nationality);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateNationality: function(nationality) {
        this.logger.debug("updateNationality: kp_NationalityID = ", nationality.kp_NationalityID);

        var response = {
            success: true,
            nationality: {
                kp_NationalityID: nationality.kp_NationalityID,
				NationalityName: nationality.NationalityName		
            }
        };

        response = Ext.create("Core.model.nationality.Model", response.nationality);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteNationality: function(nationality) {
        this.logger.debug("deleteNationality: kp_NationalityID = ", nationality.kp_NationalityID);

        var response = {
            success: true,
            nationality: {
                kp_NationalityID: nationality.kp_NationalityID,
				NationalityName: nationality.NationalityName
            }
        };

        response = Ext.create("Core.model.nationality.Model", response.nationality);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readNationalities: function() {
        this.logger.debug("readNationalities");

        var response = {
            success: true,
            nationalities: [
				{ kp_NationalityID: 1,    NationalityName:  'Afghan'}, 
				{ kp_NationalityID: 2,    NationalityName:  'Albanian'}, 
				{ kp_NationalityID: 3,    NationalityName:  'Algerian'}, 
				{ kp_NationalityID: 4,    NationalityName:  'American'}, 
				{ kp_NationalityID: 5,    NationalityName:  'Andorran'}, 
				{ kp_NationalityID: 6,    NationalityName:  'Angolan'}, 
				{ kp_NationalityID: 7,    NationalityName:  'Antiguans'}, 
				{ kp_NationalityID: 8,    NationalityName:  'Argentinean'}, 
				{ kp_NationalityID: 9,    NationalityName:  'Armenian'}, 
				{ kp_NationalityID: 10,    NationalityName:  'Australian'}, 
				{ kp_NationalityID: 11,    NationalityName:  'Austrian'}, 
				{ kp_NationalityID: 12,    NationalityName:  'Azerbaijani'}, 
				{ kp_NationalityID: 13,    NationalityName:  'Bahamian'}, 
				{ kp_NationalityID: 14,    NationalityName:  'Bahraini'}, 
				{ kp_NationalityID: 15,    NationalityName:  'Bangladeshi'}, 
				{ kp_NationalityID: 16,    NationalityName:  'Barbadian'}, 
				{ kp_NationalityID: 17,    NationalityName:  'Barbudans'}, 
				{ kp_NationalityID: 18,    NationalityName:  'Batswana'}, 
				{ kp_NationalityID: 19,    NationalityName:  'Belarusian'}, 
				{ kp_NationalityID: 20,    NationalityName:  'Belgian'}, 
				{ kp_NationalityID: 21,    NationalityName:  'Belizean'}, 
				{ kp_NationalityID: 22,    NationalityName:  'Beninese'}, 
				{ kp_NationalityID: 23,    NationalityName:  'Bhutanese'}, 
				{ kp_NationalityID: 24,    NationalityName:  'Bolivian'}, 
				{ kp_NationalityID: 25,    NationalityName:  'Bosnian'}, 
				{ kp_NationalityID: 26,    NationalityName:  'Brazilian'}, 
				{ kp_NationalityID: 27,    NationalityName:  'British'}, 
				{ kp_NationalityID: 28,    NationalityName:  'Bruneian'}, 
				{ kp_NationalityID: 29,    NationalityName:  'Bulgarian'}, 
				{ kp_NationalityID: 30,    NationalityName:  'Burkinabe'}, 
				{ kp_NationalityID: 31,    NationalityName:  'Burmese'}, 
				{ kp_NationalityID: 32,    NationalityName:  'Burundian'}, 
				{ kp_NationalityID: 33,    NationalityName:  'Cambodian'}, 
				{ kp_NationalityID: 34,    NationalityName:  'Cameroonian'}, 
				{ kp_NationalityID: 35,    NationalityName:  'Canadian'}, 
				{ kp_NationalityID: 36,    NationalityName:  'Cape Verdean'}, 
				{ kp_NationalityID: 37,    NationalityName:  'Central African'}, 
				{ kp_NationalityID: 38,    NationalityName:  'Chadian'}, 
				{ kp_NationalityID: 39,    NationalityName:  'Chilean'}, 
				{ kp_NationalityID: 40,    NationalityName:  'Chinese'}, 
				{ kp_NationalityID: 41,    NationalityName:  'Colombian'}, 
				{ kp_NationalityID: 42,    NationalityName:  'Comoran'}, 
				{ kp_NationalityID: 43,    NationalityName:  'Congolese'}, 
				{ kp_NationalityID: 44,    NationalityName:  'Costa Rican'}, 
				{ kp_NationalityID: 45,    NationalityName:  'Croatian'}, 
				{ kp_NationalityID: 46,    NationalityName:  'Cuban'}, 
				{ kp_NationalityID: 47,    NationalityName:  'Cypriot'}, 
				{ kp_NationalityID: 48,    NationalityName:  'Czech'}, 
				{ kp_NationalityID: 49,    NationalityName:  'Danish'}, 
				{ kp_NationalityID: 50,    NationalityName:  'Djibouti'}, 
				{ kp_NationalityID: 51,    NationalityName:  'Dominican'}, 
				{ kp_NationalityID: 52,    NationalityName:  'Dutch'}, 
				{ kp_NationalityID: 53,    NationalityName:  'East Timorese'}, 
				{ kp_NationalityID: 54,    NationalityName:  'Ecuadorean'}, 
				{ kp_NationalityID: 55,    NationalityName:  'Egyptian'}, 
				{ kp_NationalityID: 56,    NationalityName:  'Emirian'}, 
				{ kp_NationalityID: 57,    NationalityName:  'Equatorial Guinean'}, 
				{ kp_NationalityID: 58,    NationalityName:  'Eritrean'}, 
				{ kp_NationalityID: 59,    NationalityName:  'Estonian'}, 
				{ kp_NationalityID: 60,    NationalityName:  'Ethiopian'}, 
				{ kp_NationalityID: 61,    NationalityName:  'Fijian'}, 
				{ kp_NationalityID: 62,    NationalityName:  'Filipino'}, 
				{ kp_NationalityID: 63,    NationalityName:  'Finnish'}, 
				{ kp_NationalityID: 64,    NationalityName:  'French'}, 
				{ kp_NationalityID: 65,    NationalityName:  'Gabonese'}, 
				{ kp_NationalityID: 66,    NationalityName:  'Gambian'}, 
				{ kp_NationalityID: 67,    NationalityName:  'Georgian'}, 
				{ kp_NationalityID: 68,    NationalityName:  'German'}, 
				{ kp_NationalityID: 69,    NationalityName:  'Ghanaian'}, 
				{ kp_NationalityID: 70,    NationalityName:  'Greek'}, 
				{ kp_NationalityID: 71,    NationalityName:  'Grenadian'}, 
				{ kp_NationalityID: 72,    NationalityName:  'Guatemalan'}, 
				{ kp_NationalityID: 73,    NationalityName:  'Guinea-Bissauan'}, 
				{ kp_NationalityID: 74,    NationalityName:  'Guinean'}, 
				{ kp_NationalityID: 75,    NationalityName:  'Guyanese'}, 
				{ kp_NationalityID: 76,    NationalityName:  'Haitian'}, 
				{ kp_NationalityID: 77,    NationalityName:  'Herzegovinian'}, 
				{ kp_NationalityID: 78,    NationalityName:  'Honduran'}, 
				{ kp_NationalityID: 79,    NationalityName:  'Hungarian'}, 
				{ kp_NationalityID: 80,    NationalityName:  'I-Kiribati'}, 
				{ kp_NationalityID: 81,    NationalityName:  'Icelander'}, 
				{ kp_NationalityID: 82,    NationalityName:  'Indian'}, 
				{ kp_NationalityID: 83,    NationalityName:  'Indonesian'}, 
				{ kp_NationalityID: 84,    NationalityName:  'Iranian'}, 
				{ kp_NationalityID: 85,    NationalityName:  'Iraqi'}, 
				{ kp_NationalityID: 86,    NationalityName:  'Irish'}, 
				{ kp_NationalityID: 87,    NationalityName:  'Israeli'}, 
				{ kp_NationalityID: 88,    NationalityName:  'Italian'}, 
				{ kp_NationalityID: 89,    NationalityName:  'Ivorian'}, 
				{ kp_NationalityID: 90,    NationalityName:  'Jamaican'}, 
				{ kp_NationalityID: 91,    NationalityName:  'Japanese'}, 
				{ kp_NationalityID: 92,    NationalityName:  'Jordanian'}, 
				{ kp_NationalityID: 93,    NationalityName:  'Kazakhstani'}, 
				{ kp_NationalityID: 94,    NationalityName:  'Kenyan'}, 
				{ kp_NationalityID: 95,    NationalityName:  'Kittian and Nevisian'}, 
				{ kp_NationalityID: 96,    NationalityName:  'Kuwaiti'}, 
				{ kp_NationalityID: 97,    NationalityName:  'Kyrgyz'}, 
				{ kp_NationalityID: 98,    NationalityName:  'Laotian'}, 
				{ kp_NationalityID: 99,    NationalityName:  'Latvian'}, 
				{ kp_NationalityID: 100,    NationalityName:  'Lebanese'}, 
				{ kp_NationalityID: 101,    NationalityName:  'Liberian'}, 
				{ kp_NationalityID: 102,    NationalityName:  'Libyan'}, 
				{ kp_NationalityID: 103,    NationalityName:  'Liechtensteiner'}, 
				{ kp_NationalityID: 104,    NationalityName:  'Lithuanian'}, 
				{ kp_NationalityID: 105,    NationalityName:  'Luxembourger'}, 
				{ kp_NationalityID: 106,    NationalityName:  'Macedonian'}, 
				{ kp_NationalityID: 107,    NationalityName:  'Malagasy'}, 
				{ kp_NationalityID: 108,    NationalityName:  'Malawian'}, 
				{ kp_NationalityID: 109,    NationalityName:  'Malaysian'}, 
				{ kp_NationalityID: 110,    NationalityName:  'Maldivan'}, 
				{ kp_NationalityID: 111,    NationalityName:  'Malian'}, 
				{ kp_NationalityID: 112,    NationalityName:  'Maltese'}, 
				{ kp_NationalityID: 113,    NationalityName:  'Marshallese'}, 
				{ kp_NationalityID: 114,    NationalityName:  'Mauritanian'}, 
				{ kp_NationalityID: 115,    NationalityName:  'Mauritian'}, 
				{ kp_NationalityID: 116,    NationalityName:  'Mexican'}, 
				{ kp_NationalityID: 117,    NationalityName:  'Micronesian'}, 
				{ kp_NationalityID: 118,    NationalityName:  'Moldovan'}, 
				{ kp_NationalityID: 119,    NationalityName:  'Monacan'}, 
				{ kp_NationalityID: 120,    NationalityName:  'Mongolian'}, 
				{ kp_NationalityID: 121,    NationalityName:  'Moroccan'}, 
				{ kp_NationalityID: 122,    NationalityName:  'Mosotho'}, 
				{ kp_NationalityID: 123,    NationalityName:  'Motswana'}, 
				{ kp_NationalityID: 124,    NationalityName:  'Mozambican'}, 
				{ kp_NationalityID: 125,    NationalityName:  'Namibian'}, 
				{ kp_NationalityID: 126,    NationalityName:  'Nauruan'}, 
				{ kp_NationalityID: 127,    NationalityName:  'Nepalese'}, 
				{ kp_NationalityID: 128,    NationalityName:  'New Zealander'}, 
				{ kp_NationalityID: 129,    NationalityName:  'Nicaraguan'}, 
				{ kp_NationalityID: 130,    NationalityName:  'Nigerian'}, 
				{ kp_NationalityID: 131,    NationalityName:  'Nigerien'}, 
				{ kp_NationalityID: 132,    NationalityName:  'North Korean'}, 
				{ kp_NationalityID: 133,    NationalityName:  'Northern Irish'}, 
				{ kp_NationalityID: 134,    NationalityName:  'Norwegian'}, 
				{ kp_NationalityID: 135,    NationalityName:  'Omani'}, 
				{ kp_NationalityID: 136,    NationalityName:  'Pakistani'}, 
				{ kp_NationalityID: 137,    NationalityName:  'Palauan'}, 
				{ kp_NationalityID: 138,    NationalityName:  'Panamanian'}, 
				{ kp_NationalityID: 139,    NationalityName:  'Papua New Guinean'}, 
				{ kp_NationalityID: 140,    NationalityName:  'Paraguayan'}, 
				{ kp_NationalityID: 141,    NationalityName:  'Peruvian'}, 
				{ kp_NationalityID: 142,    NationalityName:  'Polish'}, 
				{ kp_NationalityID: 143,    NationalityName:  'Portuguese'}, 
				{ kp_NationalityID: 144,    NationalityName:  'Qatari'}, 
				{ kp_NationalityID: 145,    NationalityName:  'Romanian'}, 
				{ kp_NationalityID: 146,    NationalityName:  'Russian'}, 
				{ kp_NationalityID: 147,    NationalityName:  'Rwandan'}, 
				{ kp_NationalityID: 148,    NationalityName:  'Saint Lucian'}, 
				{ kp_NationalityID: 149,    NationalityName:  'Salvadoran'}, 
				{ kp_NationalityID: 150,    NationalityName:  'Samoan'}, 
				{ kp_NationalityID: 151,    NationalityName:  'San Marinese'}, 
				{ kp_NationalityID: 152,    NationalityName:  'Sao Tomean'}, 
				{ kp_NationalityID: 153,    NationalityName:  'Saudi'}, 
				{ kp_NationalityID: 154,    NationalityName:  'Scottish'}, 
				{ kp_NationalityID: 155,    NationalityName:  'Senegalese'}, 
				{ kp_NationalityID: 156,    NationalityName:  'Serbian'}, 
				{ kp_NationalityID: 157,    NationalityName:  'Seychellois'}, 
				{ kp_NationalityID: 158,    NationalityName:  'Sierra Leonean'}, 
				{ kp_NationalityID: 159,    NationalityName:  'Singaporean'}, 
				{ kp_NationalityID: 160,    NationalityName:  'Slovakian'}, 
				{ kp_NationalityID: 161,    NationalityName:  'Slovenian'}, 
				{ kp_NationalityID: 162,    NationalityName:  'Solomon Islander'}, 
				{ kp_NationalityID: 163,    NationalityName:  'Somali'}, 
				{ kp_NationalityID: 164,    NationalityName:  'South African'}, 
				{ kp_NationalityID: 165,    NationalityName:  'South Korean'}, 
				{ kp_NationalityID: 166,    NationalityName:  'Spanish'}, 
				{ kp_NationalityID: 167,    NationalityName:  'Sri Lankan'}, 
				{ kp_NationalityID: 168,    NationalityName:  'Sudanese'}, 
				{ kp_NationalityID: 169,    NationalityName:  'Surinamer'}, 
				{ kp_NationalityID: 170,    NationalityName:  'Swazi'}, 
				{ kp_NationalityID: 171,    NationalityName:  'Swedish'}, 
				{ kp_NationalityID: 172,    NationalityName:  'Swiss'}, 
				{ kp_NationalityID: 173,    NationalityName:  'Syrian'}, 
				{ kp_NationalityID: 174,    NationalityName:  'Taiwanese'}, 
				{ kp_NationalityID: 175,    NationalityName:  'Tajik'}, 
				{ kp_NationalityID: 176,    NationalityName:  'Tanzanian'}, 
				{ kp_NationalityID: 177,    NationalityName:  'Thai'}, 
				{ kp_NationalityID: 178,    NationalityName: 'Togolese'}, 
				{ kp_NationalityID: 179,    NationalityName:  'Tongan'}, 
				{ kp_NationalityID: 180,    NationalityName:  'Trinidadian or Tobagonian'}, 
				{ kp_NationalityID: 181,    NationalityName:  'Tunisian'}, 
				{ kp_NationalityID: 182,    NationalityName:  'Turkish'}, 
				{ kp_NationalityID: 183,    NationalityName:  'Tuvaluan'}, 
				{ kp_NationalityID: 184,    NationalityName:  'Ugandan'}, 
				{ kp_NationalityID: 185,    NationalityName:  'Ukrainian'}, 
				{ kp_NationalityID: 186,    NationalityName:  'Uruguayan'}, 
				{ kp_NationalityID: 187,    NationalityName:  'Uzbekistani'}, 
				{ kp_NationalityID: 188,    NationalityName:  'Venezuelan'}, 
				{ kp_NationalityID: 189,    NationalityName:  'Vietnamese'}, 
				{ kp_NationalityID: 190,    NationalityName:  'Welsh'}, 
				{ kp_NationalityID: 191,    NationalityName:  'Yemenite'}, 
				{ kp_NationalityID: 192,    NationalityName:  'Zambian'}, 
				{ kp_NationalityID: 193,    NationalityName:  'Zimbabwean'}
            ]
        };

        return this.delayedSuccess(response);
    }
});