[[!If?
  &subject=`[[+modx.user.id]]`
  &operator=`empty`
  &then=`
  <!-- we dont know who the user is, show no button -->
  `&else=`
  <!-- show the logged in user the site settings button -->
  <a href="[[~[[++custom.site_settings]]]]" id="site_settings_button" class="nice small radius [[++custom.theme_color]] button" title="[[%custom.label_site_settings? &namespace=`custom`]]">[[%custom.label_site_settings? &namespace=`custom`]]</a>
`]]