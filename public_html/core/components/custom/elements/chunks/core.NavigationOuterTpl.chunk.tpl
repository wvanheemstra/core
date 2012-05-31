<!-- core.NavigationOuterTpl -->
<ul class="nav-bar [[+wf.classnames]]">
    [[+wf.wrapper]]
  <li>
    <form method="get" action="[[~[[++custom.search_results]]]]" id="search_form">
      <fieldset class="search">
        <input type="search" value="" name="core_search_field" class="box" id="searchField">
        <input type="hidden" value="108" name="id">
      </fieldset>
    </form>
  </li>
</ul>