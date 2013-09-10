[[!If?
  &subject=`[[+modx.user.id]]`
  &operator=`empty`
  &then=`
  <!-- we dont know who the user is, show the login button -->
  <a href="#" id="login_button" class="nice small radius [[++custom.theme_color]] button" data-reveal-id="login" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal">[[+actionMsg]]</a>
  `&else=`
  <!-- show the logged in user the logout button -->
  <a href="[[~[[*id]]]]?service=logout" class="nice small radius [[++custom.theme_color]] button"  title="[[+actionMsg]]">[[+actionMsg]]</a>
`]]