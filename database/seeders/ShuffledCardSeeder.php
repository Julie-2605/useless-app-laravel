<?php

namespace Database\Seeders;

use App\Models\ShuffledCard;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ShuffledCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $shuffledCards = [
            ['number' => '4', 'quote' => "La violence n'est pas une solution, c'est la solution.", 'author' => 'Le Joueur du Grenier'],
            ['number' => '6', 'quote' => "La vie est une maladie mortelle sexuellement transmissible.", 'author' => 'Woody Allen'],
            ['number' => '2', 'quote' => "Mieux vaut mobiliser son intelligence sur des conneries que mobiliser sa connerie sur des choses intelligentes.", 'author' => 'Jacques Rouxel'],
            ['number' => '3', 'quote' => "Je peux résister à tout sauf à la tentation.", 'author' => 'Oscar Wilde'],
            ['number' => '1', 'quote' => "Deux choses sont infinies: l'univers et la stupidité humaine... Et je ne suis pas sûr pour l'univers.", 'author' => 'Albert Einstein'],
            ['number' => '5', 'quote' => "Tout arrive à qui sait attendre. La mort, par exemple.", 'author' => 'Bradley'],
            // ['number' => '', 'quote' => "L'homme n'est que poussière. La femme est aspirateur", 'author' => 'François Cavanna'],
            // ['number' => '', 'quote' => "Les statistiques, c'est comme le bikini: ça montre beaucoup, mais cache l'essentiel.", 'author' => 'Aaron Levenstein'],
            // ['number' => '', 'quote' => "La logique vous mènera de A à B. L'imagination vous mènera partout.", 'author' => 'Albert Einstein'],
            // ['number' => '', 'quote' => "L'argent ne fait pas le bonheur mais fait le malheur de ceux qui n'en ont pas.", 'author' => 'Kai Demaegd'],
            // ['number' => '', 'quote' => "Il faut toujours viser la lune, car même en cas d'échec, on atterit dans les étoiles.", 'author' => 'Oscar Wilde'],
        ];

        foreach ($shuffledCards as $index => $card) {
            ShuffledCard::create([
                'number' => $card['number'],
                'quote' => $card['quote'],
                'author' => $card['quote'],
            ]);
        }
    }
}
