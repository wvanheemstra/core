[[!Profile]]
<div class="row">
<div class="twelve columns centered">
<h5>Huidig Profiel Plaatje</h5>
[[!FileDownload?
  &getDir=`assets/uploads/[[+username]]`
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
<div class="twelve columns centered">
<h5>Vervang Profiel Plaatje</h5>
[[!FileUpload?
  &filefields=`1`
  &cssfile=`assets/templates/core/stylesheets/fileupload.css`
  &extensions=`gif,GIF,Gif,png,PNG,Png,jpeg,Jpeg,JPeg,JPEG,jpg,JPG`
  &outertpl=`core.FileUploadOuterTpl`
  &innertpl=`core.FileUploadInnerTpl`
  &messagetpl=`core.FileUploadMessageTpl`
  &uploadgroups=`Members,Editors,Publishers`
  &language=`[[++cultureKey]]`
  &allowoverwrite=`1`
  &createpath=`Yes`
  &path=`assets/uploads/[[+username]]/`
]]
</div>
</div>