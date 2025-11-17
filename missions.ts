import type { DailyMission } from './types';

export const MISSIONS: DailyMission[] = [
    // Sprechen
    { id: 'm1', type: 'SPRECHEN', prompt: 'Seu amigo quer visitar a Alemanha. Dê um conselho sobre quais cidades visitar e por quê. (Use "solltest", "könntest").' },
    { id: 'm2', type: 'SPRECHEN', prompt: 'Conte uma história sobre algo engraçado que aconteceu com você recentemente. Use Perfekt e Präteritum.' },
    { id: 'm3', type: 'SPRECHEN', prompt: 'Descreva suas férias dos sonhos. Para onde você iria, com quem e o que faria? (Use Konjunktiv II: "würde", "könnte").' },
    { id: 'm4', type: 'SPRECHEN', prompt: 'Você está em uma festa. Apresente-se a uma nova pessoa e pergunte sobre seus hobbies e trabalho.' },
    { id: 'm5', type: 'SPRECHEN', prompt: 'Explique as regras do seu esporte ou jogo favorito em alemão.' },

    // Schreiben
    { id: 'm6', type: 'SCHREIBEN', prompt: 'Escreva um e-mail para o seu senhorio relatando um problema em seu apartamento (ex: o aquecimento não está funcionando).' },
    { id: 'm7', type: 'SCHREIBEN', prompt: 'Escreva um cartão postal para um amigo de suas férias. Descreva o tempo e suas atividades.' },
    { id: 'm8', type: 'SCHREIBEN', prompt: 'Escreva um post curto em um blog sobre seu filme ou livro favorito. Explique por que os outros deveriam assistir/ler. (Use "deshalb", "weil").' },
    { id: 'm9', type: 'SCHREIBEN', prompt: 'Seu amigo está doente. Escreva uma mensagem desejando-lhe uma rápida recuperação ("Gute Besserung") e oferecendo ajuda.' },
    { id: 'm10', type: 'SCHREIBEN', prompt: 'Escreva uma história curta (3-4 frases) usando as palavras: "plötzlich", "glücklicherweise", "am Ende".' },

    // Grammatik
    { id: 'm11', type: 'GRAMMATIK', prompt: 'Crie uma frase com uma oração relativa: "Das ist der Mann, ..."' },
    { id: 'm12', type: 'GRAMMATIK', prompt: 'Combine estas duas frases com "obwohl": "Es regnet. Ich gehe spazieren."' },
    { id: 'm13', type: 'GRAMMATIK', prompt: 'Coloque o adjetivo na forma correta: "Ich habe einen ______ (rot) Pullover und eine ______ (neu) Hose gekauft."' },
    { id: 'm14', type: 'GRAMMATIK', prompt: 'Responda à pergunta usando o caso genitivo: "Wessen Auto ist das?" (Ex: Das ist das Auto meines Vaters).' },
    { id: 'm15', type: 'GRAMMATIK', prompt: 'Reescreva a frase no Präteritum: "Wir gehen ins Kino und essen Popcorn."' },
    
    // Wortschatz
    { id: 'm16', type: 'WORTSCHATZ', prompt: 'Nomeie 5 coisas que você encontraria em um escritório ("im Büro").' },
    { id: 'm17', type: 'WORTSCHATZ', prompt: 'Liste 5 sintomas de quando você está doente ("krank").' },
    { id: 'm18', type: 'WORTSCHATZ', prompt: 'Descreva o caráter de uma pessoa com 3 adjetivos positivos e 2 negativos.' },
    { id: 'm19', type: 'WORTSCHATZ', prompt: 'Nomeie 5 coisas que você precisa levar para uma viagem à praia ("an den Strand").' },
    { id: 'm20', type: 'WORTSCHATZ', prompt: 'Quais são 5 sentimentos ("Gefühle") que você pode ter? (ex: "glücklich", "traurig").' },

    // Lesen
    { id: 'm21', type: 'LESEN', prompt: 'Leia em voz alta: "Ich interessiere mich für die deutsche Kultur, deshalb möchte ich nächstes Jahr nach Berlin reisen."' },
    { id: 'm22', type: 'LESEN', prompt: 'Leia em voz alta: "Der Film, den wir gestern gesehen haben, war sehr spannend."' },
    { id: 'm23', type: 'LESEN', prompt: 'Leia em voz alta: "Während ich kochte, hörte mein Bruder Musik."' },
    { id: 'm24', type: 'LESEN', prompt: 'Leia uma previsão do tempo curta: "Am Wochenende wird es sonnig, aber am Montag könnte es wieder regnen."' },
    { id: 'm25', type: 'LESEN', prompt: 'Leia esta pergunta com a entonação correta: "Könnten Sie mir bitte helfen?"' }
];
