<!-- core.NavigationOuterTpl -->
<style>
.nav-bar li ul {
    opacity: 0;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
    height: 32px;
    display: none;
}

.nav-bar li:hover ul {
    opacity: 1;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
    height: 67px;
    display: auto;
}​
</style>

<ul class="nav-bar [[+wf.classnames]]">
    [[+wf.wrapper]]
  <li style="height:32px;">
    <form method="get" action="[[~[[++custom.search_results]]]]" id="search_form">
      <fieldset class="search">
        <input type="search" value="" name="core_search_field" class="box" id="searchField">
        <input type="hidden" value="[[++custom.search_results]]" name="id">
      </fieldset>
    </form>
  </li>
</ul>