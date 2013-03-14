[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="five columns">
			</div>
			<div class="two columns" style="color:#ffffff">[[$core.UserNameTpl]]</div>
			<div class="five columns" style="text-align:right;">
			[[$core.LoginButtonTpl]]
			</div>
		</div>
		<!-- END Optional toolbar -->

                <!-- START Optional breadcrumbs -->
		[[switch?
		&get=`[[*BreadCrumbTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			<div id="breadcrumbs" class="twelve columns">
                               [[$core.BreadCrumbTpl]]
			</div><!-- #breadcrumbs -->
		</div>
		`&default=``]]
		<!-- END Optional breadcrumbs -->

                <!-- START Edit site settings -->
                <div class="row">
                  <div id="edit_site_settings">
		[[!Profile]]

		[[!FormItRetriever]]

		[[!FormIt? 
		&hooks=`spam,formit2resource,redirect` 
		&preHooks=`resource2formit`
		&redirectTo=`[[++custom.site_settings_edited]]`
		&store=`1`
		&validate=``
		&template=`[[++custom.site_settings_template]]`
		&clearFieldsOnSuccess=`0`
		&resource2formitfields=`SiteThemeCSSTV,SiteBackgroundTV`
		&successMessage=`[[%custom.label_site_settings_edited? &namespace=`custom`]].`
		&successMessagePlaceholder=`fi.successMessage`
		]]

		[[!+fi.error_message:notempty=`<div class="alert-box error">[[!+fi.error_message]]</div>`]]
		[[!+fi.successMessage:notempty=`<div class="alert-box success">[[!+fi.successMessage]]</div>`]]

<p>[[+fi.error.error_message]]</p>
<form id="edit_site_settings_form" class="form custom nice" action="[[~[[*id]]]]" method="post">
<div class="panel">
<table style="width:100%">
	<thead>
    <tr><th>
    <h5>[[%custom.label_edit_site_settings? &namespace=`custom`]]: <a href="[[+fi.url]]">[[++custom.site_name]]</a></h5>
    <input name="nospam:blank" type="hidden" />
    <input name="resource_id" type="hidden" value="[[+fi.id]]" />
    <input name="published" type="hidden" value="1" />
    <input name="isfolder" type="hidden" value="1" />
    </h5></th>
	<th><h5>[[!getResources? &resources=`[[++custom.site_start]]` &tpl=`core.SiteSettingsEditedRowTpl`]]</h5></th>
	  </tr>
	</thead>
	<tbody>
		<tr>
		<td>
    <label for="SiteThemeCSSTV">
        [[%custom.label_choose_theme? &namespace=`custom`]]:
        <span class="alert-box error">[[!+fi.error.SiteThemeCSSTV]]</span>
    </label>
		</td>
		<td>
		  <table style="width:100%;">
			<thead>
			    <tr>
			      <th></th>
			      <th>[[%custom.label_name? &namespace=`custom`]]</th>
			      <th style="text-align:center;">[[%custom.label_base_color? &namespace=`custom`]]</th>
			      <th colspan="2" style="text-align:center;">[[%custom.label_complementary_colors? &namespace=`custom`]]</th>
			    </tr>
			</thead>
			<tbody>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-default.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-default.css`]] ></td>
			      <td>[[%custom.label_default? &namespace=`custom`]]</td>
			      <td style="background-color:#c4c8cc;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-antique-white.css`]] ></td>
			      <td>[[%custom.label_antique_white? &namespace=`custom`]]</td>
			      <td style="background-color:#faebd7;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-aqua-marine.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-aqua-marine.css`]] ></td>
			      <td>[[%custom.label_aqua_marine? &namespace=`custom`]]</td>
			      <td style="background-color:#7fffd4;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-aqua.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-aqua.css`]] ></td>
			      <td>[[%custom.label_aqua? &namespace=`custom`]]</td>
			      <td style="background-color:#00ffff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-beige.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-beige.css`]] ></td>
			      <td>[[%custom.label_beige? &namespace=`custom`]]</td>
			      <td style="background-color:#f5f5dc;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-blue-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-blue-violet.css`]] ></td>
			      <td>[[%custom.label_blue_violet? &namespace=`custom`]]</td>
			      <td style="background-color:#8a2be2;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-blue.css`]] ></td>
			      <td>[[%custom.label_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#0000ff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-brown.css`]] ></td>
			      <td>[[%custom.label_brown? &namespace=`custom`]]</td>
			      <td style="background-color:#a52a2a;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-cadet-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-cadet-blue.css`]] ></td>
			      <td>[[%custom.label_cadet_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#5f9ea0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-chart-reuse.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-chart-reuse.css`]] ></td>
			      <td>[[%custom.label_chart_reuse? &namespace=`custom`]]</td>
			      <td style="background-color:#7fff00;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-coral.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-coral.css`]] ></td>
			      <td>[[%custom.label_coral? &namespace=`custom`]]</td>
			      <td style="background-color:#ff7f50;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-corn-flower-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-corn-flower-blue.css`]] ></td>
			      <td>[[%custom.label_corn_flower_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#6495ed;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-crimson.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-crimson.css`]] ></td>
			      <td>[[%custom.label_crimson? &namespace=`custom`]]</td>
			      <td style="background-color:#dc143c;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-cyan.css`]] ></td>
			      <td>[[%custom.label_cyan? &namespace=`custom`]]</td>
			      <td style="background-color:#00ffff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-blue.css`]] ></td>
			      <td>[[%custom.label_dark_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#00008b;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-cyan.css`]] ></td>
			      <td>[[%custom.label_dark_cyan? &namespace=`custom`]]</td>
			      <td style="background-color:#008b8b;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-golden-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-golden-rod.css`]] ></td>
			      <td>[[%custom.label_dark_golden_rod? &namespace=`custom`]]</td>
			      <td style="background-color:#b8860b;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-gray.css`]] ></td>
			      <td>[[%custom.label_dark_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#a9a9a9;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-green.css`]] ></td>
			      <td>[[%custom.label_dark_green? &namespace=`custom`]]</td>
			      <td style="background-color:#006400;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-khaki.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-khaki.css`]] ></td>
			      <td>[[%custom.label_dark_khaki? &namespace=`custom`]]</td>
			      <td style="background-color:#bdb76b;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-magenta.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-magenta.css`]] ></td>
			      <td>[[%custom.label_dark_magenta? &namespace=`custom`]]</td>
			      <td style="background-color:#8b008b;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-olive-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-olive-green.css`]] ></td>
			      <td>[[%custom.label_dark_olive_green? &namespace=`custom`]]</td>
			      <td style="background-color:#556b2f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-orange.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-orange.css`]] ></td>
			      <td>[[%custom.label_dark_orange? &namespace=`custom`]]</td>
			      <td style="background-color:#ff8c00;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-orchid.css`]] ></td>
			      <td>[[%custom.label_dark_orchid? &namespace=`custom`]]</td>
			      <td style="background-color:#9932cc;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-red.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-red.css`]] ></td>
			      <td>[[%custom.label_dark_red? &namespace=`custom`]]</td>
			      <td style="background-color:#8b0000;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-salmon.css`]] ></td>
			      <td>[[%custom.label_dark_salmon? &namespace=`custom`]]</td>
			      <td style="background-color:#e9967a;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-sea-green.css`]] ></td>
			      <td>[[%custom.label_dark_sea_green? &namespace=`custom`]]</td>
			      <td style="background-color:#8fbc8f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-slate-blue.css`]] ></td>
			      <td>[[%custom.label_dark_slate_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#483d8b;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-slate-gray.css`]] ></td>
			      <td>[[%custom.label_dark_slate_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#2f4f4f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-turquoise.css`]] ></td>
			      <td>[[%custom.label_dark_turquoise? &namespace=`custom`]]</td>
			      <td style="background-color:#00ced1;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dark-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dark-violet.css`]] ></td>
			      <td>[[%custom.label_dark_violet? &namespace=`custom`]]</td>
			      <td style="background-color:#9400d3;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-deep-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-deep-pink.css`]] ></td>
			      <td>[[%custom.label_deep_pink? &namespace=`custom`]]</td>
			      <td style="background-color:#ff1493;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-deep-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-deep-sky-blue.css`]] ></td>
			      <td>[[%custom.label_deep_sky_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#00bfff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dim-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dim-gray.css`]] ></td>
			      <td>[[%custom.label_dim_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#696969;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-dodger-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-dodger-blue.css`]] ></td>
			      <td>[[%custom.label_dodger_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#1e90ff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-firebrick.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-firebrick.css`]] ></td>
			      <td>[[%custom.label_firebrick? &namespace=`custom`]]</td>
			      <td style="background-color:#b22222;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-floral-white.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-floral-white.css`]] ></td>
			      <td>[[%custom.label_floral_white? &namespace=`custom`]]</td>
			      <td style="background-color:#fffaf0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-forest-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-forest-green.css`]] ></td>
			      <td>[[%custom.label_forest_green? &namespace=`custom`]]</td>
			      <td style="background-color:#228b22;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-gainsboro.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-gainsboro.css`]] ></td>
			      <td>[[%custom.label_gainsboro? &namespace=`custom`]]</td>
			      <td style="background-color:#dcdcdc;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-ghost-white.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-ghost-white.css`]] ></td>
			      <td>[[%custom.label_ghost_white? &namespace=`custom`]]</td>
			      <td style="background-color:#f8f8ff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-gold.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-gold.css`]] ></td>
			      <td>[[%custom.label_gold? &namespace=`custom`]]</td>
			      <td style="background-color:#ffd700;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-golden-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-golden-rod.css`]] ></td>
			      <td>[[%custom.label_golden_rod? &namespace=`custom`]]</td>
			      <td style="background-color:#daa520;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-gray.css`]] ></td>
			      <td>[[%custom.label_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#808080;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-green-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-green-yellow.css`]] ></td>
			      <td>[[%custom.label_green_yellow? &namespace=`custom`]]</td>
			      <td style="background-color:#adff2f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-green.css`]] ></td>
			      <td>[[%custom.label_green? &namespace=`custom`]]</td>
			      <td style="background-color:#008000;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-honeydew.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-honeydew.css`]] ></td>
			      <td>[[%custom.label_honeydew? &namespace=`custom`]]</td>
			      <td style="background-color:#f0fff0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-hot-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-hot-pink.css`]] ></td>
			      <td>[[%custom.label_hot_pink? &namespace=`custom`]]</td>
			      <td style="background-color:#ff69b4;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-indian-red.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-indian-red.css`]] ></td>
			      <td>[[%custom.label_indian_red? &namespace=`custom`]]</td>
			      <td style="background-color:#cd5c5c;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-indigo.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-indigo.css`]] ></td>
			      <td>[[%custom.label_indigo? &namespace=`custom`]]</td>
			      <td style="background-color:#4b0082;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-ivory.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-ivory.css`]] ></td>
			      <td>[[%custom.label_ivory? &namespace=`custom`]]</td>
			      <td style="background-color:#fffff0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-khaki.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-khaki.css`]] ></td>
			      <td>[[%custom.label_khaki? &namespace=`custom`]]</td>
			      <td style="background-color:#f0e68c;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-lavender-blush.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-lavender-blush.css`]] ></td>
			      <td>[[%custom.label_lavender_blush? &namespace=`custom`]]</td>
			      <td style="background-color:#fff0f5;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-lavender.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-lavender.css`]] ></td>
			      <td>[[%custom.label_lavender? &namespace=`custom`]]</td>
			      <td style="background-color:#e6e6fa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-lawn-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-lawn-green.css`]] ></td>
			      <td>[[%custom.label_lawn_green? &namespace=`custom`]]</td>
			      <td style="background-color:#7cfc00;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-lemon-chiffon.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-lemon-chiffon.css`]] ></td>
			      <td>[[%custom.label_lemon_chiffon? &namespace=`custom`]]</td>
			      <td style="background-color:#fffacd;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-blue.css`]] ></td>
			      <td>[[%custom.label_light_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#add8e6;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-coral.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-coral.css`]] ></td>
			      <td>[[%custom.label_light_coral? &namespace=`custom`]]</td>
			      <td style="background-color:#f08080;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-cyan.css`]] ></td>
			      <td>[[%custom.label_light_cyan? &namespace=`custom`]]</td>
			      <td style="background-color:#e0ffff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-golden-rod-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-golden-rod-yellow.css`]] ></td>
			      <td>[[%custom.label_light_golden_rod_yellow? &namespace=`custom`]]</td>
			      <td style="background-color:#fafad2;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-gray.css`]] ></td>
			      <td>[[%custom.label_light_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#d3d3d3;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-green.css`]] ></td>
			      <td>[[%custom.label_light_green? &namespace=`custom`]]</td>
			      <td style="background-color:#90ee90;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-pink.css`]] ></td>
			      <td>[[%custom.label_light_pink? &namespace=`custom`]]</td>
			      <td style="background-color:#ffb6c1;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-salmon.css`]] ></td>
			      <td>[[%custom.label_light_salmon? &namespace=`custom`]]</td>
			      <td style="background-color:#ffa07a;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-sea-green.css`]] ></td>
			      <td>[[%custom.label_light_sea_green? &namespace=`custom`]]</td>
			      <td style="background-color:#20b2aa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-sky-blue.css`]] ></td>
			      <td>[[%custom.label_light_sky_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#87cefa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-slate-gray.css`]] ></td>
			      <td>[[%custom.label_light_slate_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#778899;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-steel-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-steel-blue.css`]] ></td>
			      <td>[[%custom.label_light_steel_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#b0c4de;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-light-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-light-yellow.css`]] ></td>
			      <td>[[%custom.label_light_yellow? &namespace=`custom`]]</td>
			      <td style="background-color:#ffffe0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-lime-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-lime-green.css`]] ></td>
			      <td>[[%custom.label_lime_green? &namespace=`custom`]]</td>
			      <td style="background-color:#32cd32;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-lime.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-lime.css`]] ></td>
			      <td>[[%custom.label_lime? &namespace=`custom`]]</td>
			      <td style="background-color:#00ff00;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-linen.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-linen.css`]] ></td>
			      <td>[[%custom.label_linen? &namespace=`custom`]]</td>
			      <td style="background-color:#faf0e6;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-magenta-fuchsia.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-magenta-fuchsia.css`]] ></td>
			      <td>[[%custom.label_magenta_fuchsia? &namespace=`custom`]]</td>
			      <td style="background-color:#ff00ff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-maroon.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-maroon.css`]] ></td>
			      <td>[[%custom.label_maroon? &namespace=`custom`]]</td>
			      <td style="background-color:#800000;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-aqua-marine.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-aqua-marine.css`]] ></td>
			      <td>[[%custom.label_medium_aqua_marine? &namespace=`custom`]]</td>
			      <td style="background-color:#66cdaa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-blue.css`]] ></td>
			      <td>[[%custom.label_medium_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#0000cd;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-orchid.css`]] ></td>
			      <td>[[%custom.label_medium_orchid? &namespace=`custom`]]</td>
			      <td style="background-color:#ba55d3;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-purple.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-purple.css`]] ></td>
			      <td>[[%custom.label_medium_purple? &namespace=`custom`]]</td>
			      <td style="background-color:#9370db;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-sea-green.css`]] ></td>
			      <td>[[%custom.label_medium_sea_green? &namespace=`custom`]]</td>
			      <td style="background-color:#3cb371;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-slate-blue.css`]] ></td>
			      <td>[[%custom.label_medium_slate_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#7b68ee;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-spring-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-spring-green.css`]] ></td>
			      <td>[[%custom.label_medium_spring_green? &namespace=`custom`]]</td>
			      <td style="background-color:#00fa9a;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-turquoise.css`]] ></td>
			      <td>[[%custom.label_medium_turquoise? &namespace=`custom`]]</td>
			      <td style="background-color:#48d1cc;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-medium-violet-red.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-medium-violet-red.css`]] ></td>
			      <td>[[%custom.label_medium_violet_red? &namespace=`custom`]]</td>
			      <td style="background-color:#c71585;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-midnight-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-midnight-blue.css`]] ></td>
			      <td>[[%custom.label_midnight_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#191970;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-mint-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-mint-green.css`]] ></td>
			      <td>[[%custom.label_mint_green? &namespace=`custom`]]</td>
			      <td style="background-color:#f5fffa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-misty-rose.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-misty-rose.css`]] ></td>
			      <td>[[%custom.label_misty_rose? &namespace=`custom`]]</td>
			      <td style="background-color:#ffe4e1;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-moccasin.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-moccasin.css`]] ></td>
			      <td>[[%custom.label_moccasin? &namespace=`custom`]]</td>
			      <td style="background-color:#ffe4b5;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-navajo-white.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-navajo-white.css`]] ></td>
			      <td>[[%custom.label_navajo_white? &namespace=`custom`]]</td>
			      <td style="background-color:#ffdead;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-navy.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-navy.css`]] ></td>
			      <td>[[%custom.label_navy? &namespace=`custom`]]</td>
			      <td style="background-color:#000080;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-old-lace.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-old-lace.css`]] ></td>
			      <td>[[%custom.label_old_lace? &namespace=`custom`]]</td>
			      <td style="background-color:#fdf5e6;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-olive-drab.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-olive-drab.css`]] ></td>
			      <td>[[%custom.label_olive_drab? &namespace=`custom`]]</td>
			      <td style="background-color:#6b8e23;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-olive.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-olive.css`]] ></td>
			      <td>[[%custom.label_olive? &namespace=`custom`]]</td>
			      <td style="background-color:#808000;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-orange-red.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-orange-red.css`]] ></td>
			      <td>[[%custom.label_orange_red? &namespace=`custom`]]</td>
			      <td style="background-color:#ff4500;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-orange.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-orange.css`]] ></td>
			      <td>[[%custom.label_orange? &namespace=`custom`]]</td>
			      <td style="background-color:#ffa500;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-orchid.css`]] ></td>
			      <td>[[%custom.label_orchid? &namespace=`custom`]]</td>
			      <td style="background-color:#da70d6;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-pale-golden-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-pale-golden-rod.css`]] ></td>
			      <td>[[%custom.label_pale_golden_rod? &namespace=`custom`]]</td>
			      <td style="background-color:#eee8aa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-pale-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-pale-green.css`]] ></td>
			      <td>[[%custom.label_pale_green? &namespace=`custom`]]</td>
			      <td style="background-color:#98fb98;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-pale-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-pale-turquoise.css`]] ></td>
			      <td>[[%custom.label_pale_turquoise? &namespace=`custom`]]</td>
			      <td style="background-color:#afeeee;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-pale-violet-red.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-pale-violet-red.css`]] ></td>
			      <td>[[%custom.label_pale_violet_red? &namespace=`custom`]]</td>
			      <td style="background-color:#db7093;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-papaya-whip.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-papaya-whip.css`]] ></td>
			      <td>[[%custom.label_papaya_whip? &namespace=`custom`]]</td>
			      <td style="background-color:#ffefd5;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-peach-puff.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-peach-puff.css`]] ></td>
			      <td>[[%custom.label_peach_puff? &namespace=`custom`]]</td>
			      <td style="background-color:#ffdab9;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-peru.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-peru.css`]] ></td>
			      <td>[[%custom.label_peru? &namespace=`custom`]]</td>
			      <td style="background-color:#cd853f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-pink.css`]] ></td>
			      <td>[[%custom.label_pink? &namespace=`custom`]]</td>
			      <td style="background-color:#ffc0cb;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-plum.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-plum.css`]] ></td>
			      <td>[[%custom.label_plum? &namespace=`custom`]]</td>
			      <td style="background-color:#dda0dd;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-powder-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-powder-blue.css`]] ></td>
			      <td>[[%custom.label_powder_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#b0e0e6;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-purple.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-purple.css`]] ></td>
			      <td>[[%custom.label_purple? &namespace=`custom`]]</td>
			      <td style="background-color:#800080;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-red.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-red.css`]] ></td>
			      <td>[[%custom.label_red? &namespace=`custom`]]</td>
			      <td style="background-color:#ff0000;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-rosy-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-rosy-brown.css`]] ></td>
			      <td>[[%custom.label_rosy_brown? &namespace=`custom`]]</td>
			      <td style="background-color:#bc8f8f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-royal-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-royal-blue.css`]] ></td>
			      <td>[[%custom.label_royal_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#4169e1;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-saddle-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-saddle-brown.css`]] ></td>
			      <td>[[%custom.label_saddle_brown? &namespace=`custom`]]</td>
			      <td style="background-color:#8b4513;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-salmon.css`]] ></td>
			      <td>[[%custom.label_salmon? &namespace=`custom`]]</td>
			      <td style="background-color:#fa8072;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-sandy-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-sandy-brown.css`]] ></td>
			      <td>[[%custom.label_sandy_brown? &namespace=`custom`]]</td>
			      <td style="background-color:#f4a460;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-sea-green.css`]] ></td>
			      <td>[[%custom.label_sea_green? &namespace=`custom`]]</td>
			      <td style="background-color:#2e8b57;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-sea-shell.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-sea-shell.css`]] ></td>
			      <td>[[%custom.label_sea_shell? &namespace=`custom`]]</td>
			      <td style="background-color:#fff5ee;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-sienna.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-sienna.css`]] ></td>
			      <td>[[%custom.label_sienna? &namespace=`custom`]]</td>
			      <td style="background-color:#a0522d;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-silver.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-silver.css`]] ></td>
			      <td>[[%custom.label_silver? &namespace=`custom`]]</td>
			      <td style="background-color:#c0c0c0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-sky-blue.css`]] ></td>
			      <td>[[%custom.label_sky_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#87ceeb;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-slate-blue.css`]] ></td>
			      <td>[[%custom.label_slate_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#6a5acd;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-slate-gray.css`]] ></td>
			      <td>[[%custom.label_slate_gray? &namespace=`custom`]]</td>
			      <td style="background-color:#708090;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-snow.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-snow.css`]] ></td>
			      <td>[[%custom.label_snow? &namespace=`custom`]]</td>
			      <td style="background-color:#fffafa;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-spring-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-spring-green.css`]] ></td>
			      <td>[[%custom.label_spring_green? &namespace=`custom`]]</td>
			      <td style="background-color:#00ff7f;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-steel-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-steel-blue.css`]] ></td>
			      <td>[[%custom.label_steel_blue? &namespace=`custom`]]</td>
			      <td style="background-color:#4682b4;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-tan.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-tan.css`]] ></td>
			      <td>[[%custom.label_tan? &namespace=`custom`]]</td>
			      <td style="background-color:#d2b48c;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-teal.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-teal.css`]] ></td>
			      <td>[[%custom.label_teal? &namespace=`custom`]]</td>
			      <td style="background-color:#008080;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-thistle.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-thistle.css`]] ></td>
			      <td>[[%custom.label_thistle? &namespace=`custom`]]</td>
			      <td style="background-color:#d8bfd8;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-tomato.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-tomato.css`]] ></td>
			      <td>[[%custom.label_tomato? &namespace=`custom`]]</td>
			      <td style="background-color:#ff6347;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-turquoise.css`]] ></td>
			      <td>[[%custom.label_turquoise? &namespace=`custom`]]</td>
			      <td style="background-color:#40e0d0;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-violet.css`]] ></td>
			      <td>[[%custom.label_violet? &namespace=`custom`]]</td>
			      <td style="background-color:#ee82ee;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-wheat.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-wheat.css`]] ></td>
			      <td>[[%custom.label_wheat? &namespace=`custom`]]</td>
			      <td style="background-color:#f5deb3;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-white-smoke.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-white-smoke.css`]] ></td>
			      <td>[[%custom.label_white_smoke? &namespace=`custom`]]</td>
			      <td style="background-color:#f5f5f5;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-white.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-white.css`]] ></td>
			      <td>[[%custom.label_white? &namespace=`custom`]]</td>
			      <td style="background-color:#ffffff;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-yellow-green.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-yellow-green.css`]] ></td>
			      <td>[[%custom.label_yellow_green? &namespace=`custom`]]</td>
			      <td style="background-color:#9acd32;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			    <tr>
			      <td><input type="radio" name="SiteThemeCSSTV[]" value="theme-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsChecked=`theme-yellow.css`]] ></td>
			      <td>[[%custom.label_yellow? &namespace=`custom`]]</td>
			      <td style="background-color:#ffff00;"></td>
			      <td style="background-color:;"></td>
			      <td style="background-color:;"></td>
			    </tr>
			</tbody>
		</table>
		</td>
		</tr><tr>
		<td>
    <label for="SiteBackgroundTV">
        [[%custom.label_choose_background? &namespace=`custom`]]:
        <span class="alert-box error">[[!+fi.error.SiteBackgroundTV]]</span>
    </label>
		</td>
		<td>
		  <table style="width:100%;">
			<thead>
			    <tr>
			      <th></th>
				  <th>[[%custom.label_name? &namespace=`custom`]]</th>
			      <th colspan="3" style="min-width:200px;">[[%custom.label_background? &namespace=`custom`]]</th>
			    </tr>
			</thead>
			<tbody>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_000.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_000.jpg`]] ></td>
				  <td>000&nbsp;[[%custom.label_default? &namespace=`custom`]]</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_000.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_001.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_001.jpg`]] ></td>
				  <td>001</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_001.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_002.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_002.jpg`]] ></td>
				  <td>002</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_002.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_003.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_003.jpg`]] ></td>
				  <td>003</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_003.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_004.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_004.jpg`]] ></td>
				  <td>004</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_004.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_005.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_005.jpg`]] ></td>
				  <td>005</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_005.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_006.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_006.jpg`]] ></td>
				  <td>006</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_006.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_007.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_007.jpg`]] ></td>
				  <td>007</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_007.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_008.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_008.jpg`]] ></td>
				  <td>008</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_008.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_009.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_009.jpg`]] ></td>
				  <td>009</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_009.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_010.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_010.jpg`]] ></td>
				  <td>010</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_010.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_011.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_011.jpg`]] ></td>
				  <td>011</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_011.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_012.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_012.jpg`]] ></td>
				  <td>012</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_012.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_013.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_013.jpg`]] ></td>
				  <td>013</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_013.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_014.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_014.jpg`]] ></td>
				  <td>014</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_014.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_015.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_015.jpg`]] ></td>
				  <td>015</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_015.jpg');"></td>
			    </tr>			
			    <tr>
			      <td><input type="radio" name="SiteBackgroundTV[]" value="background_016.jpg" [[!+fi.SiteBackgroundTV:FormItIsChecked=`background_016.jpg`]] ></td>
				  <td>016</td>
			      <td colspan="3" style="background-image:url('assets/templates/core/images/backgrounds/background_016.jpg');"></td>
			    </tr>			
			</tbody>
		</table>	
		</td>
		</tr><tr>
		<td colspan="2">
			<br class="clear" />
			    <div class="form-buttons">
			        <input class="nice small white button" type="submit" value="[[%custom.label_edit_site_settings? &namespace=`custom`]]" />
			    </div>
		</td></tr>	
	</tbody>
</table>
</div>
</form>
                  </div><!-- #edit_site_settings -->
                </div>
		<!-- END  Edit site settings -->
   </div><!-- #page -->

   [[$core.TinyMCEScriptTpl]]
   <script type="text/javascript" >
      $('edit_site_settings_form').bind('form-pre-serialize', function(e) {
          tinyMCE.triggerSave();
      });
   </script >
[[$core.FooterTpl]]