<?php
/**
 * @package getUNIXTimeStamp
 *
 * choose from:
 * [seconds] for example 45 
 * [minutes] for example 52
 * [hours] for example 14
 * [mday] for example 24
 * [wday] for example 2
 * [mon] for example 1
 * [year] for example 2006
 * [yday] for example 23
 * [weekday] for example Tuesday
 * [month] for example January
 * [0] for example 1138110765
 */
$fragment = isset($fragment) ? $fragment : '0';
$output = getdate(date("U"));
switch ($fragment) {
    case "seconds":
        $output = $output[seconds];
        break;
    case "minutes":
        $output = $output[minutes];
        break;
    case "hours":
        $output = $output[hours];
        break;
    case "mday":
        $output = $output[mday];
        break;
    case "wday":
        $output = $output[wday];
        break;
    case "mon":
        $output = $output[mon];
        break;
    case "year":
        $output = $output[year];
        break;
    case "yday":
        $output = $output[yday];
        break;
    case "weekday":
        $output = $output[weekday];
        break;
    case "month":
        $output = $output[month];
        break;
    case "0":
        $output = $output[0];
        break;
}

return $output;