<?php
// src/Controllers/DesignsController.php

namespace App\Controllers;

use App\Core\Response;
use App\Database\Connection;
use PDOException;

class DesignsController
{
    public function store(): void
    {
        $raw = file_get_contents('php://input');
        $data = json_decode($raw, true);

        if (!is_array($data)) {
            Response::json(['error' => 'Invalid JSON body'], 400);
        }

        // Basic required fields
        $required = [
            'productId',
            'variantId',
            'quantity',
            'artworkFile',
            'artworkUrl',
            'cartId',
            'checkoutUrl',
        ];

        foreach ($required as $field) {
            if (!isset($data[$field]) || $data[$field] === '') {
                Response::json(['error' => "Missing field: {$field}"], 400);
            }
        }

        $productId   = $data['productId'];
        $variantId   = $data['variantId'];
        $color       = $data['color'] ?? null;
        $size        = $data['size'] ?? null;
        $quantity    = (int) ($data['quantity'] ?? 1);
        $artworkFile = $data['artworkFile'];
        $artworkUrl  = $data['artworkUrl'];
        $cartId      = $data['cartId'];
        $checkoutUrl = $data['checkoutUrl'];
        $status      = $data['status'] ?? 'pending';

        try {
            $pdo = Connection::get();

            $stmt = $pdo->prepare(
                "INSERT INTO designs
                 (product_id, variant_id, color, size, quantity,
                  artwork_file, artwork_url, cart_id, checkout_url, status)
                 VALUES
                 (:product_id, :variant_id, :color, :size, :quantity,
                  :artwork_file, :artwork_url, :cart_id, :checkout_url, :status)"
            );

            $stmt->execute([
                ':product_id'   => $productId,
                ':variant_id'   => $variantId,
                ':color'        => $color,
                ':size'         => $size,
                ':quantity'     => $quantity,
                ':artwork_file' => $artworkFile,
                ':artwork_url'  => $artworkUrl,
                ':cart_id'      => $cartId,
                ':checkout_url' => $checkoutUrl,
                ':status'       => $status,
            ]);

            $id = (int) $pdo->lastInsertId();

            Response::json([
                'success' => true,
                'id'      => $id,
            ]);
        } catch (PDOException $e) {
            // Log $e->getMessage() in real app
            Response::json(['error' => 'Failed to save design'], 500);
        }
    }

    public function index(): void
    {
        $status = $_GET['status'] ?? null;
        $page   = max(1, (int)($_GET['page'] ?? 1));
        $perPage = max(1, min(100, (int)($_GET['perPage'] ?? 20)));
        $offset = ($page - 1) * $perPage;

        try {
            $pdo = Connection::get();

            $where = '';
            $params = [];

            if ($status) {
                $where = 'WHERE status = :status';
                $params[':status'] = $status;
            }

            $stmt = $pdo->prepare(
                "SELECT id, product_id, variant_id, color, size, quantity,
                        artwork_file, artwork_url, cart_id, checkout_url,
                        status, created_at
                FROM designs
                {$where}
                ORDER BY created_at DESC
                LIMIT :limit OFFSET :offset"
            );

            $stmt->bindValue(':limit', $perPage, \PDO::PARAM_INT);
            $stmt->bindValue(':offset', $offset, \PDO::PARAM_INT);

            foreach ($params as $key => $value) {
                $stmt->bindValue($key, $value);
            }

            $stmt->execute();
            $rows = $stmt->fetchAll();

            Response::json([
                'designs' => $rows,
                'page' => $page,
                'perPage' => $perPage,
            ]);
        } catch (\PDOException $e) {
            Response::json(['error' => 'Failed to load designs'], 500);
        }
    }

}
