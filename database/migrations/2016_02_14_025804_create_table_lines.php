<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableLines extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lines', function(Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('jira_name');
            $table->enum('type', ['progress', 'information']);
            $table->timestamps();
            $table->integer('list_order');
            $table->boolean('visible')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('lines');
    }
}
