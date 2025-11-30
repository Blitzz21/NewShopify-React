<?php
// src/Controllers/ProductsController.php
namespace App\Controllers;

use App\Core\Response;
use App\Services\ShopifyClient;

class ProductsController
{
    private ShopifyClient $shopify;

    public function __construct()
    {
        $config       = require __DIR__ . '/../Config/config.php';
        $this->shopify = new ShopifyClient($config);
    }

    public function index(): void
    {
        $query = <<<'GRAPHQL'
        query GetProducts {
          products(first: 20) {
            nodes {
              id
              title
              description
              featuredImage {
                url
                altText
              }
              variants(first: 50) {
                nodes {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
        GRAPHQL;

        $data     = $this->shopify->query($query);
        $products = $data['products']['nodes'] ?? [];

        $result = array_map(function ($p) {
            return [
                'id'          => $p['id'],
                'title'       => $p['title'],
                'description' => $p['description'],
                'image'       => $p['featuredImage']['url'] ?? null,
                'variants'    => array_map(function ($v) {
                    $color = null;
                    $size  = null;

                    foreach ($v['selectedOptions'] as $opt) {
                        $name = strtolower($opt['name']);
                        if ($name === 'color') {
                            $color = $opt['value'];
                        } elseif ($name === 'size') {
                            $size = $opt['value'];
                        }
                    }

                    return [
                        'id'       => $v['id'],
                        'title'    => $v['title'],
                        'color'    => $color,
                        'size'     => $size,
                        'price'    => $v['price']['amount'],
                        'currency' => $v['price']['currencyCode'],
                    ];
                }, $p['variants']['nodes'] ?? []),
            ];
        }, $products);

        Response::json(['products' => $result]);
    }
}
