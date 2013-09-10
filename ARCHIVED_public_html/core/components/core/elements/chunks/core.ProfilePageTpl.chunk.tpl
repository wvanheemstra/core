[[!Profile]]
<div class="three columns">
[[!FileDownload?
  &getDir=`assets/templates/[[++custom.domain_abbreviation]]/uploads/[[+username]]`
  &extShown=`gif,GIF,Gif,png,PNG,Png,jpeg,Jpeg,JPeg,JPEG,jpg,JPG`
  &noDownload=`1`
  &browseDirectories=`0`
  &tplDir=`tpl-dir`
  &tplFile=`core.FileDownloadShowFileTpl`
  &tplGroupDir=`tpl-group`
  &tplWrapper=`core.FileDownloadNoWrapperTpl`
  &fileCss=`assets/templates/core/stylesheets/filedownload.css`
]]
</div>

<div class="nine columns">
<div class="row">
<table width="100%">
<thead>
  <tr>
    <th colspan="2"><h5>[[+fullname]]</h5></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>[[!%login.username? &namespace=`login`]]:</td><td>[[+username]]</td>
  </tr>
  <tr>
    <td>[[!%login.fullname]]:</td><td>[[+fullname]]</td>
  </tr> 
  <tr>
    <td>[[!%login.email]]:</td><td>[[+email]]</td>
  </tr> 
  <tr>
    <td>[[!%login.phone]]:</td><td>[[+phone]]</td>
  </tr> 
  <tr>
    <td>[[!%login.mobilephone]]:</td><td>[[+mobilephone]]</td>
  </tr> 
  <tr>
    <td>[[!%login.fax]]:</td><td>[[+fax]]</td>
  </tr>
  <tr>
    <td>[[!%login.country]]:</td><td>[[+country]]</td>
  </tr> 
  <tr>
    <td>[[!%login.state]]:</td><td>[[+state]]</td>
  </tr> 
  <tr>
    <td>[[!%login.zip]]:</td><td>[[+zip]]</td>
  </tr> 
  <tr>
    <td>[[!%login.website]]:</td><td>[[+website]]</td>
  </tr>  
</tbody>
<tfoot>
  <tr>
    <td colspan="2" style="text-align:right;">
      <a href="[[~[[++custom.update_profile]]]]">[[!%login.update_profile]]</a>&nbsp;&raquo;
    </td>
  </tr>
</tfoot>
</table>
</div>
</div>