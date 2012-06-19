<?php
$output = '';
$path = $modx->getOption('path',$scriptProperties,'');
$tpl = $modx->getOption('tpl',$scriptProperties,'');
$dir = isset($path) ? $_SERVER['DOCUMENT_ROOT'].'/'.$path : null;

if(null !== $dir){
    $ext = $modx->getOption('ext',$scriptProperties,'');
    $ext = isset($ext) ? $ext : 'jpg';

    foreach (new GlobIterator($dir.'*.'.$ext) as $filepath => $filename) {
        $imagefilepath = $path.basename($filename);
        $imagefilename = basename($filename);
        $output .= $modx->getChunk($tpl, 
          array(
            'imagefilepath' => $imagefilepath,
            'imagefilename' => $imagefilename,
          )
        );
    }
}

return $output;