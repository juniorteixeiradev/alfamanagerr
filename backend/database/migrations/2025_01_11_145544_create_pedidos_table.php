<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vendedor_id')->constrained('users');
            $table->foreignId('cliente_id')->constrained('clientes');
            $table->foreignId('categoria_id')->constrained('categorias');
            $table->enum('type',['ecommerce', 'loja']);
            $table->enum('forma_pagamento', ['dinheiro', 'cartao', 'pix', 'condicional']);
            $table->decimal('desconto', 8, 2)->default(0);
            $table->decimal('total', 8, 2);
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
