[[!If?
  &subject=`[[+modx.user.id]]`
  &operator=`empty`
  &then=`
  <!-- we dont know who the user is, show no name -->
  `&else=`
  <!-- show the logged in user name -->
  [[!Profile]][[+modx.user.username]]
`]]