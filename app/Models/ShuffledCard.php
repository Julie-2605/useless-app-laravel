<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShuffledCard extends Model
{
    protected $fillable = ['number', 'quote', 'author'];
}
