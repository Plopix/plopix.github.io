<?php
declare(strict_types=1);

use Symfony\Component\Yaml\Yaml;

include __DIR__."/../bootstrap.php";

$template = $twig->load('index.html.twig');
print $template->render(
    ['projects' => Yaml::parseFile(__DIR__."/../../contents/projects.yaml")]
);
