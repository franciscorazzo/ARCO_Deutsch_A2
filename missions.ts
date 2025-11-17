import type { DailyMission } from './types';

export const MISSIONS: DailyMission[] = [
    // Sprechen
    { id: 'm1', type: 'SPRECHEN', prompt: 'Grave um áudio descrevendo o que você fez no último fim de semana (no Perfekt).' },
    { id: 'm2', type: 'SPRECHEN', prompt: 'Descreva seu melhor amigo ou amiga. Fale sobre a aparência e a personalidade.' },
    { id: 'm3', type: 'SPRECHEN', prompt: 'Planeje uma viagem de fim de semana. Grave um áudio explicando para onde você vai e o que vai fazer.' },
    { id: 'm4', type: 'SPRECHEN', prompt: 'Explique o caminho da sua casa até o supermercado mais próximo em alemão.' },
    { id: 'm5', type: 'SPRECHEN', prompt: 'Grave um áudio fazendo um pedido em um restaurante (uma bebida e uma refeição).' },

    // Schreiben
    { id: 'm6', type: 'SCHREIBEN', prompt: 'Escreva um e-mail curto para um hotel, perguntando sobre a disponibilidade de um quarto para duas noites.' },
    { id: 'm7', type: 'SCHREIBEN', prompt: 'Descreva sua rotina diária em 5 frases, usando verbos separáveis (z.B. aufstehen, einkaufen).' },
    { id: 'm8', type: 'SCHREIBEN', prompt: 'Escreva uma mensagem para um amigo, se desculpando por não poder ir à sua festa e explicando o motivo (use "weil").' },
    { id: 'm9', type: 'SCHREIBEN', prompt: 'Escreva um pequeno parágrafo sobre seus hobbies e por que você gosta deles (use "weil").' },
    { id: 'm10', type: 'SCHREIBEN', prompt: 'Você está doente. Escreva uma mensagem para seu chefe explicando que você não pode ir hoje.' },

    // Grammatik
    { id: 'm11', type: 'GRAMMATIK', prompt: 'Complete com a preposição correta (acusativo ou dativo): "Ich stelle die Tasse ______ den Tisch."' },
    { id: 'm12', type: 'GRAMMATIK', prompt: 'Complete a frase no Perfekt: "Gestern ______ ich meine Hausaufgaben ______."' },
    { id: 'm13', type: 'GRAMMATIK', prompt: 'Forme uma frase subordinada com "weil": "Ich lerne Deutsch, ..."' },
    { id: 'm14', type: 'GRAMMATIK', prompt: 'Use o comparativo de "schnell": "Ein Auto ist ______ als ein Fahrrad."' },
    { id: 'm15', type: 'GRAMMATIK', prompt: 'Complete com o pronome reflexivo correto: "Morgens ______ ich mich schnell an."' },
    
    // Wortschatz
    { id: 'm16', type: 'WORTSCHATZ', prompt: 'Liste 5 peças de roupa (Kleidungsstücke) que você está vestindo.' },
    { id: 'm17', type: 'WORTSCHATZ', prompt: 'Liste 5 tipos de vegetais (Gemüse) que você gosta.' },
    { id: 'm18', type: 'WORTSCHATZ', prompt: 'Quais são 3 móveis (Möbelstücke) que você tem no seu quarto?' },
    { id: 'm19', type: 'WORTSCHATZ', prompt: 'Liste 3 meios de transporte (Verkehrsmittel) que você usa com frequência.' },
    { id: 'm20', type: 'WORTSCHATZ', prompt: 'Escreva 5 adjetivos para descrever o tempo (das Wetter).' },

    // Lesen
    { id: 'm21', type: 'LESEN', prompt: 'Leia em voz alta: "Ich muss zum Bahnhof gehen, weil mein Zug in zwanzig Minuten abfährt."' },
    { id: 'm22', type: 'LESEN', prompt: 'Leia em voz alta: "Obwohl das Wetter schlecht war, sind wir spazieren gegangen."' },
    { id: 'm23', type: 'LESEN', prompt: 'Leia em voz alta a pergunta e a resposta: "Entschuldigung, könnten Sie mir sagen, wie spät es ist? - Ja, klar. Es ist Viertel nach drei."' },
    { id: 'm24', type: 'SCHREIBEN', prompt: 'Escreva uma frase usando um verbo modal no passado (Präteritum), como "wollte", "konnte" ou "musste".' },
    { id: 'm25', type: 'SPRECHEN', prompt: 'Diga o que você comeu no café da manhã hoje, usando o Perfekt.' }
];