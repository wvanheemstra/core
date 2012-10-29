<?php
/**
 * Build the setup options form.
 *
 * @package smurf
 * @subpackage build
 */
/* set some default values */
$values = array(
    'emailsTo' => 'my@emailhere.com',
    'emailsFrom' => 'my@emailhere.com',
    'emailsReplyTo' => 'my@emailhere.com',
);
switch ($options[xPDOTransport::PACKAGE_ACTION]) {
    case xPDOTransport::ACTION_INSTALL:
    case xPDOTransport::ACTION_UPGRADE:
        $setting = $modx->getObject('modSystemSetting',array('key' => 'smurf.emailsTo'));
        if ($setting != null) { $values['emailsTo'] = $setting->get('value'); }
        unset($setting);
 
        $setting = $modx->getObject('modSystemSetting',array('key' => 'smurf.emailsFrom'));
        if ($setting != null) { $values['emailsFrom'] = $setting->get('value'); }
        unset($setting);
 
        $setting = $modx->getObject('modSystemSetting',array('key' => 'smurf.emailsReplyTo'));
        if ($setting != null) { $values['emailsReplyTo'] = $setting->get('value'); }
        unset($setting);
    break;
    case xPDOTransport::ACTION_UNINSTALL: break;
}
 
$output = '<label for="smurf-emailsTo">Emails To:</label>
<input type="text" name="emailsTo" id="smurf-emailsTo" width="300" value="'.$values['emailsTo'].'" />
<br /><br />
 
<label for="smurf-emailsFrom">Emails From:</label>
<input type="text" name="emailsFrom" id="smurf-emailsFrom" width="300" value="'.$values['emailsFrom'].'" />
<br /><br />
 
<label for="smurf-emailsReplyTo">Emails Reply-To:</label>
<input type="text" name="emailsReplyTo" id="smurf-emailsReplyTo" width="300" value="'.$values['emailsReplyTo'].'" />';
 
return $output;