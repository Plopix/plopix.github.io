<?php
declare(strict_types=1);

require __DIR__.'/vendor/autoload.php';

use Contentful\Delivery\Client;
use Contentful\Delivery\ClientOptions;
use Symfony\Component\VarDumper\Cloner\VarCloner;
use Symfony\Component\VarDumper\Dumper\HtmlDumper;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;
use Twig\TwigFunction;
use Symfony\Component\Dotenv\Dotenv;

date_default_timezone_set("America/Los_Angeles");

(new Dotenv())->bootEnv(__DIR__.'/.env');

$debugMode = ($_SERVER['APP_ENV'] ?? 'dev') !== 'prod';
$templateDir = __DIR__."/templates";
$loader = new FilesystemLoader($templateDir);
$twig = new Environment($loader, ['debug' => $debugMode]);
if ($debugMode) {
    $twig->addFunction(
        new TwigFunction(
            'dump', function ($var) {
            $cloner = new VarCloner();
            $dumper = new HtmlDumper();

            return $dumper->dump($cloner->cloneVar($var));
        }
        )
    );
}

// Contentful Client
$isPreview = $_SERVER['CONTENTFUL_CONTENT_API'] === 'preview';
$options = ClientOptions::create();

if ($isPreview) {
    $options->usingPreviewApi();
}

$contentfulClient = new Client(
    $_SERVER[$isPreview ? 'CONTENTFUL_CONTENT_PREVIEW_API_ACCESS_TOKEN' : 'CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN'],
    $_SERVER['CONTENTFUL_SPACE_ID'],
    'master',
    $options
);
