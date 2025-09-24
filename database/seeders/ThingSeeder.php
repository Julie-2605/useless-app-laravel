<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Thing;

class ThingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $things = [
            ['name' => '🍌 Banane', 'color' => '#ffd83cff'],
            ['name' => '🦄 Licorne', 'color' => '#80e2cdff'],
            ['name' => '🧠 Big Brain', 'color' => '#ff6bbccc'],
            ['name' => '🤘 Metal', 'color' => '#f33c3cff'],
            ['name' => '🦝 Racoon', 'color' => '#b6b6b6ff'],
        ];

        foreach ($things as $index => $thing) {
            Thing::create([
                'name' => $thing['name'],
                'color' => $thing['color'],
                'position' => $index,
            ]);
        }
    }
}