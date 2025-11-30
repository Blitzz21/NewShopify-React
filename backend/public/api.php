<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Core\Router;
use App\Core\Response;
use App\Controllers\ProductsController;
use App\Controllers\CartController; 
use App\Controllers\UploadController; 

$router = new Router();

// register routes
$router->get('/api/products', [ProductsController::class, 'index']);
$router->post('/api/cart/lines', [CartController::class, 'addLine']);
$router->post('/api/upload', [UploadController::class, 'upload']);

try {
    $router->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
} catch (Throwable $e) {
    Response::json(['error' => $e->getMessage()], 500);
}
