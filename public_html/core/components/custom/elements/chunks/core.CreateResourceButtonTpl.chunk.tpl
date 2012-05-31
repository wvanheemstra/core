[[!If?
  &subject=`[[+modx.user.id]]`
  &operator=`empty`
  &then=`
  <!-- we dont know who the user is, show no button -->
  `&else=`
  <!-- show the logged in user the create resource button -->
  <a href="[[~[[++custom.create_resource]]]]" id="create_resource_button" class="nice small radius [[++lgv.theme_color]] button">[[%custom.label_create_resource? &namespace=`custom`]]</a>
`]]