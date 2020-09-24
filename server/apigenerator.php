<?php
/*************************************************************************
* The purpose of this file is to generate auth headers to be used by
* the client, so we don't expose our API secret to everyone
**************************************************************************/
$apiKey = "XXXX";
$apiSecret = "XXXX";

$time = time();

$return = [
	"authDate" => $time,
	"authKey" => $apiKey,
	"authString" => sha1($apiKey.$apiSecret.$time)
];

header("Access-Control-Allow-Origin: *");

print json_encode($return);
?>