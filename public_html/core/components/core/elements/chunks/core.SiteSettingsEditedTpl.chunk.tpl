[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="five columns">
                        [[$core.CreateResourceButtonTpl]]
			</div>
			<div class="two columns" style="color:#ffffff">[[$core.UserNameTpl]]</div>
			<div class="one columns" style="text-align:right;">
			[[$core.EditSiteSettingsButtonTpl]]
			</div>
			<div class="one columns" style="text-align:right;">
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
                  <div id="edit_site_settings" class="twelve columns">
		[[!Profile]]
		[[!FormItRetriever? 
		&redirectToOnNotFound=`[[++custom.error]]`
		]]

<form class="custom nice" action="">
<table style="width:100%;">
<thead>
  <tr>
<th><h5>[[%custom.label_site_settings_edited? &namespace=`custom`]]:</h5></th><th><h5>[[!getResources? &resources=`[[++custom.site_start]]` &tpl=`core.SiteSettingsEditedRowTpl`]]</h5></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
    <label for="SiteThemeCSSTV">
        [[%custom.label_choose_theme? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SiteThemeCSSTV]]</span>
    </label>
    </td><td>
       <table style="width:100%;">
       <thead>
		<tr>
			<th>[[%custom.label_name? &namespace=`custom`]]</th>
			<th style="text-align:center;">[[%custom.label_base_color? &namespace=`custom`]]</th>
			<th colspan="2" style="text-align:center;">[[%custom.label_complementary_colors? &namespace=`custom`]]</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><div style="display:none">[[!getResources? &resources=`[[++custom.site_settings]]` &tpl=`core.SiteSettingsThemeCSSRowTpl` &includeTVs=`1` &processTVs=`1` &tvPrefix=``]]</div>
			[[!+fi.SiteThemeCSSTitle]]
			</td>
			<td style="background-color:[[!+fi.SiteThemeCSSBaseColor]];"></td>
			<td style="background-color:;"></td>
			<td style="background-color:;"></td>
		</tr>
	</tbody>
	</table>
    </td><tr>
    <td>
    <label for="SiteBackgroundTV">
        [[%custom.label_choose_background? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SiteBackgroundTV]]</span>
    </label>
    </td><td>
       <table style="width:100%;">
       <thead>
		<tr>
			<th>[[%custom.label_name? &namespace=`custom`]]</th>
			<th>[[%custom.label_background? &namespace=`custom`]]</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><div style="display:none">[[!getResources? &resources=`[[++custom.site_settings]]` &tpl=`core.SiteSettingsBackgroundRowTpl` &includeTVs=`1` &processTVs=`1` &tvPrefix=``]]</div>
			[[!+fi.SiteBackgroundTitle]]
			</td>
			<td style="min-width:200px;background-image:url('assets/templates/core/images/backgrounds/[[!+fi.SiteBackgroundFileName]]')">&nbsp;</td>
		</tr>
	</tbody>
	</table>
    </td>
  </tr>
</tbody>
</table>
</form>
                  </div><!-- #edit_site_settings -->
                </div>
		<!-- END  Edit site settings -->
   </div><!-- #page -->
[[$core.FooterTpl]]