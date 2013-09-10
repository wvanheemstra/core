[[!Profile]]
<tr[[+fd.class]]>
  <td>
    <img src="assets/templates/[[++custom.domain_abbreviation]]/uploads/[[+username]]/[[+fd.filename]]">
  </td>
</tr>
  [[-- This is the description row if the &chkDesc=`chunkName` is provided --]]
  [[+fd.description:notempty=`<tr>
    <td></td>
    <td colspan="3">[[+fd.description]]</td>
  </tr>`:default=``
  ]]