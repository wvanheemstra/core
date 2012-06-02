<?php
if (empty($input)) {
 return 'No Visual Lightbox images found for this resource!';
 }
$tpl = $modx->getOption('tpl',$scriptProperties,'core.VisualLightboxImagesOptionRowTpl');
if ($modx->getChunk($tpl) == '') {
 return 'The chunk for this snippet was not found: '.$tpl;
}

$output = array();
$imagefilepaths = explode(',', $input);

foreach ($imagefilepaths as $key => $value) {
  $imagefilepathsandnames = array(
    'id' => $key,
    'imagefilepath' => $value,
    'imagefilename' => basename($value)
  );

  $output[] = $modx->getChunk($tpl,$imagefilepathsandnames);
}

return implode('',$output);