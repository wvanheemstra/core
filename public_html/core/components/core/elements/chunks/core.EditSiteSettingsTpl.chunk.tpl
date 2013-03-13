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
    <select id="SiteThemeCSSTV" name="SiteThemeCSSTV">
      <option value="theme-default.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-default.css`]]>[[%custom.label_default? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-aqua-marine.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-aqua-marine.css`]]>[[%custom.label_aqua_marine? &namespace=`custom`]]</option>
      <option value="theme-aqua.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-aqua.css`]]>[[%custom.label_aqua? &namespace=`custom`]]</option>
      <option value="theme-beige.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-beige.css`]]>[[%custom.label_beige? &namespace=`custom`]]</option>
      <option value="theme-blue-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-blue-violet.css`]]>[[%custom.label_blue_violet? &namespace=`custom`]]</option>
      <option value="theme-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-blue.css`]]>[[%custom.label_blue? &namespace=`custom`]]</option>
      <option value="theme-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-brown.css`]]>[[%custom.label_brown? &namespace=`custom`]]</option>
      <option value="theme-cadet-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-cadet-blue.css`]]>[[%custom.label_cadet_blue? &namespace=`custom`]]</option>
      <option value="theme-chart-reuse.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-chart-reuse.css`]]>[[%custom.label_chart_reuse? &namespace=`custom`]]</option>
      <option value="theme-coral.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-coral.css`]]>[[%custom.label_coral? &namespace=`custom`]]</option>
      <option value="theme-corn-flower-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-corn-flower-blue.css`]]>[[%custom.label_corn_flower_blue? &namespace=`custom`]]</option>
      <option value="theme-crimson.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-crimson.css`]]>[[%custom.label_crimson? &namespace=`custom`]]</option>
      <option value="theme-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-cyan.css`]]>[[%custom.label_cyan? &namespace=`custom`]]</option>
      <option value="theme-dark-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-blue.css`]]>[[%custom.label_dark_blue? &namespace=`custom`]]</option>
      <option value="theme-dark-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-cyan.css`]]>[[%custom.label_dark_cyan? &namespace=`custom`]]</option>
      <option value="theme-dark-gold-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-gold-rod.css`]]>[[%custom.label_dark_gold_rod? &namespace=`custom`]]</option>
      <option value="theme-dark-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-gray.css`]]>[[%custom.label_dark_gray? &namespace=`custom`]]</option>
      <option value="theme-dark-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-green.css`]]>[[%custom.label_dark_green? &namespace=`custom`]]</option>
      <option value="theme-dark-khaki.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-khaki.css`]]>[[%custom.label_dark_khaki? &namespace=`custom`]]</option>
      <option value="theme-dark-magenta.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-magenta.css`]]>[[%custom.label_dark_magenta? &namespace=`custom`]]</option>
      <option value="theme-dark-olive-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-olive-green.css`]]>[[%custom.label_dark_olive_green? &namespace=`custom`]]</option>
      <option value="theme-dark-orange.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-orange.css`]]>[[%custom.label_dark_orange? &namespace=`custom`]]</option>
      <option value="theme-dark-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-orchid.css`]]>[[%custom.label_dark_orchid? &namespace=`custom`]]</option>
      <option value="theme-dark-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-red.css`]]>[[%custom.label_dark_red? &namespace=`custom`]]</option>
      <option value="theme-dark-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-salmon.css`]]>[[%custom.label_dark_salmon? &namespace=`custom`]]</option>
      <option value="theme-dark-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-sea-green.css`]]>[[%custom.label_dark_sea_green? &namespace=`custom`]]</option>
      <option value="theme-dark-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-slate-blue.css`]]>[[%custom.label_dark_slate_blue? &namespace=`custom`]]</option>
      <option value="theme-dark-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-slate-gray.css`]]>[[%custom.label_dark_slate_gray? &namespace=`custom`]]</option>
      <option value="theme-dark-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-turquoise.css`]]>[[%custom.label_dark_turquoise? &namespace=`custom`]]</option>
      <option value="theme-dark-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-violet.css`]]>[[%custom.label_dark_violet? &namespace=`custom`]]</option>
      <option value="theme-deep-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-deep-pink.css`]]>[[%custom.label_deep_pink? &namespace=`custom`]]</option>
      <option value="theme-deep-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-deep-sky-blue.css`]]>[[%custom.label_deep_sky_blue? &namespace=`custom`]]</option>
      <option value="theme-dim-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dim-gray.css`]]>[[%custom.label_dim_gray? &namespace=`custom`]]</option>
      <option value="theme-dodger-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dodger-blue.css`]]>[[%custom.label_dodger_blue? &namespace=`custom`]]</option>
      <!--  Change the ones below still -->
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
    </select>
		</td>
		</tr><tr>
		<td>
    <label for="SiteBackgroundTV">
        [[%custom.label_choose_background? &namespace=`custom`]]:
        <span class="alert-box error">[[!+fi.error.SiteBackgroundTV]]</span>
    </label>
		</td>
		<td>
    <select id="SiteBackgroundTV" name="SiteBackgroundTV">
      <option value="background_000.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_000.jpg`]]>000</option>
      <option value="background_001.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>001</option>
      <option value="background_002.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>002</option>
      <option value="background_003.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>003</option>
      <option value="background_004.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>004</option>
      <option value="background_005.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>005</option>
      <option value="background_006.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>006</option>
      <option value="background_007.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>007</option>
      <option value="background_008.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>008</option>
      <option value="background_009.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>009</option>
      <option value="background_010.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>010</option>
      <option value="background_011.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>011</option>
      <option value="background_012.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>012</option>
      <option value="background_013.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>013</option>
      <option value="background_014.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>014</option>
      <option value="background_015.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>015</option>
      <option value="background_016.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>016</option>
    </select> 
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