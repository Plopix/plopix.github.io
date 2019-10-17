<?php
declare(strict_types=1);

require __DIR__.'/vendor/autoload.php';

use Symfony\Component\VarDumper\Cloner\VarCloner;
use Symfony\Component\VarDumper\Dumper\HtmlDumper;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;
use Twig\TwigFunction;

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
