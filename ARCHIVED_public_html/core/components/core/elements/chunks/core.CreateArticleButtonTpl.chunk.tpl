[[!If?
  &subject=`[[+modx.user.id]]`
  &operator=`empty`
  &then=`
  <!-- we dont know who the user is, show no button -->
  `&else=`
  <!-- show the logged in user the create article button -->
[[!FormIt?
&hooks=`spam,redirect`&store=`1`&redirectTo=`[[++custom.create_article]]`&submitVar=`create_article`]]
<form action="[[~[[*id]]]]" method="post">
<input type="hidden" name="nospam" value="" />
<input type="submit" name="create_article" class="nice small radius [[++custom.theme_color]] button" style="font-weight:bold;" value="[[%custom.label_create_article? &namespace=`custom`]]" /></form>
`]]