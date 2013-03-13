[[!If?
  &subject=`[[+modx.user.id]]`
  &operator=`empty`
  &then=`
  <!-- we dont know who the user is, show no button -->
  `&else=`<!-- show the logged in user the edit site settings button -->
[[!FormIt? &submitVar=`edit_site_settings`&hooks=`spam,redirect`&store=`1`&validate=``&redirectTo=`[[++custom.edit_site_settings]]`]]
<form action="[[~[[*id]]]]" method="post">
<input type="hidden" name="nospam" value="" />
<input type="hidden" name="id" id="id" value="[[++custom.site_settings]]" />
<input type="hidden" name="url" id="url" value="[[~[[++custom.site_start]]]]" />
<input type="hidden" name="parent" id="parent" value="[[*parent]]" />
<input type="hidden" name="SiteThemeCSSTV" id="SiteThemeCSSTV" value="[[*SiteThemeCSSTV]]" />
<input type="hidden" name="SiteBackgroundTV" id="SiteBackgroundTV" value="[[*SiteBackgroundTV]]" />
<input type="submit" name="edit_site_settings" class="nice small radius [[++custom.theme_color]] button" style="font-weight:bold;" value="[[%custom.label_edit_site_settings? &namespace=`custom`]]" />
</form>`]]