<?php
/**
 *  CORE settings file
 */
$modx_core_path = MODX_CORE_PATH;

if (!defined('CORE_SNIPPETS_PATH')) {
    $core_snippets_path= $modx_core_path.'components/core/elements/snippets/';
    define('CORE_SNIPPETS_PATH', $core_snippets_path);
}
?>