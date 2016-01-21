<?php

/**
 * @var \Silex\Application $app
 * $var \Silex\ControllerCollection $api
 */
use Symfony\Component\HttpFoundation\Response;

use app\data\Data;

$api = $app['controllers_factory'];

$api->post('/send-mail/', function() use ($app) {
    $request = $_POST
    $message = \Swift_Message::newInstance()
        ->setSubject('Chelsea Request')
        ->setFrom(array('benzins@gmail.com'))
        ->setTo(array('benzins@gmail.com'))
        ->setBody($request);

    return $app['mailer']->send($message);
});



return $api;