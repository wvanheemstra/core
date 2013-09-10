<?php
$action= $modx->newObject('modAction');
$action->fromArray(array(
    'id' => 1,
    'namespace' => 'smurf',
    'parent' => '0',
    'controller' => 'index',
    'haslayout' => '1',
    'lang_topics' => 'smurf:default,file',
    'assets' => '',
),'',true,true);
$menu= $modx->newObject('modMenu');
$menu->fromArray(array(
    'text' => 'smurf',
    'parent' => 'components',
    'description' => 'smurf_desc',
    'icon' => 'images/icons/plugin.gif',
    'menuindex' => '0',
    'params' => '',
    'handler' => '',
),'',true,true);
$menu->addOne($action);