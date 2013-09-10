<!-- core.NavigationOuterTpl: style is applied to the drop-down items -->
<style>
#main_nav ul li .sublist {
  display: none;
}
#main_nav ul li:hover .sublist {
  display: block;
}
#main_nav ul li .sublist li {
  display: none;
}
#main_nav ul li:hover .sublist li {
  display: block;
}
</style>
<ul style="width:970px;background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(226, 230, 234)), to(rgb(196, 200, 204)));background-color: rgb(226, 230, 234);">
  [[+wf.wrapper]]
  <li style="height:30px;overflow:hidden;width:303px;">
    <form method="get" action="[[~[[++custom.search_results]]]]" id="search_form">
      <fieldset class="search">
        <input type="search" value="" name="core_search_field" class="box" id="searchField">
        <input type="hidden" value="[[++custom.search_results]]" name="id">
      </fieldset>
    </form>
  </li>
</ul>