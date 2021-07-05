<?php
declare(strict_types=1);

use Contentful\Delivery\Query;
use Twig\Environment;

include __DIR__."/../bootstrap.php";

/** @var Environment $twig */
$template = $twig->load('index.html.twig');

/** @var Contentful\Delivery\Client\ClientInterface $contentfulClient */

$projectQuery = new Query();
$projectQuery->setContentType('openSourceProject');

$certificationQuery = new Query();
$certificationQuery->setContentType('certification');

print $template->render(
    [
        'projects' => $contentfulClient->getEntries($projectQuery),
        'certifications' => $contentfulClient->getEntries($certificationQuery),
        'person' => $contentfulClient->getEntry('8Tt1bk4SABZNz1LHtF1FN')
    ]
);
