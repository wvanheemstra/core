[[!UpdateProfile? &placeholder=`message`]]
<div class="three columns">
[[!FileDownload?
  &getDir=`assets/uploads/[[+username]]`
  &extShown=`gif,png,jpeg,jpg`
  &noDownload=`1`
  &browseDirectories=`0`
  &tplDir=`tpl-dir`
  &tplFile=`core.FileDownloadShowFileTpl`
  &tplGroupDir=`tpl-group`
  &tplWrapper=`core.FileDownloadNoWrapperTpl`
  &fileCss=`assets/templates/core/stylesheets/filedownload.css`
]]
<a href="[[~[[++custom.update_profile_picture]]]]">[[!%login.update_profile_picture]]</a>&nbsp;&raquo;
</div>

<div class="update-profile nine columns">
<div class="row">
  <div class="updprof-error">
   [[+error.message]]
  </div>
[[+login.update_success:if=`[[+login.update_success]]`:is=`1`:then=`[[%login.profile_updated? &namespace=`login` &topic=`updateprofile`]]`]]
    <form class="form" action="[[~[[*id]]]]" method="post">
    <input type="hidden" name="nospam:blank" value="" />
<table width="100%">
<thead>
  <tr>
    <th>
        <label for="fullname">[[!%login.fullname? &namespace=`login` &topic=`updateprofile`]]:
            <span class="error">[[+error.fullname]]</span>
        </label>
    </th>
    <th>
        <input type="text" name="fullname" id="fullname" value="[[+fullname]]" size="50"/>
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <label for="username">[[!%login.username]]:
      </label>
    </td>
    <td>
      [[+username]]
    </td>
  </tr>
  <tr>
    <td>
      <label for="email">[[!%login.email]]:
        <span class="error">[[+error.email]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="email:required:email" id="email" value="[[+email]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td>
      <label for="phone">[[!%login.phone]]:
        <span class="error">[[+error.phone]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="phone" id="phone" value="[[+phone]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td> 
      <label for="mobilephone">[[!%login.mobilephone]]:
        <span class="error">[[+error.mobilephone]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="mobilephone" id="mobilephone" value="[[+mobilephone]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td> 
      <label for="fax">[[!%login.fax]]:
        <span class="error">[[+error.fax]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="fax" id="fax" value="[[+fax]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td> 
      <label for="address">[[!%login.address]]:
        <span class="error">[[+error.address]]</span>
      </label>
    </td>
    <td>
      <textarea id="address" cols="100" rows="3" name="address">[[+address]]</textarea>
    </td>
  </tr>
  <tr>
    <td>
      <label for="country">[[!%login.country]]:
        <span class="error">[[+error.country]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="country" id="country" value="[[+country]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td> 
      <label for="city">[[!%login.city]]:
        <span class="error">[[+error.city]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="city" id="city" value="[[+city]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td>  
      <label for="state">[[!%login.state]]:
        <span class="error">[[+error.state]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="state" id="state" value="[[+state]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td>
      <label for="zip">[[!%login.zip]]:
        <span class="error">[[+error.zip]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="zip" id="zip" value="[[+zip]]" size="50"/>
    </td>
  </tr>
  <tr>
    <td> 
      <label for="website">[[!%login.website]]:
        <span class="error">[[+error.website]]</span>
      </label>
    </td>
    <td>
      <input type="text" name="website" id="website" value="[[+website]]" size="50"/>
    </td>
  </tr>
</tbody>
<tfoot>
  <tr>
    <td colspan="2" style="text-align:right;">
      <div class="form-buttons">
        <input class="nice small white button" type="submit" name="login-updprof-btn" value="[[!%login.update_profile]]" />
      </div>
    </td>
  </tr>
</tfoot>
</form>
</table>
</div>
</div>