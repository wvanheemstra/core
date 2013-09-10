<?php
$output = '';
$path = $modx->getOption('path',$scriptProperties,'');
$ext = $modx->getOption('ext',$scriptProperties,'jpg');
$dir = isset($path) ? $_SERVER['DOCUMENT_ROOT'].'/'.$path : null;

if(null !== $dir){
    $ext = $modx->getOption('ext',$scriptProperties,'');
    $ext = isset($ext) ? $ext : 'jpg';
    $imagefilepathsandnames = array();

    foreach (new GlobIterator($dir.'*.'.$ext) as $filepath => $filename) {
        $imagefilepath = $path.basename($filename);
        $imagefilename = basename($filename);
        $imagefilepathsandnames[] = $imagefilename . '==' . $imagefilepath;
    }
}

$output = implode("||",$imagefilepathsandnames);

return $output;