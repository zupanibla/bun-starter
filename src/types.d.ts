declare namespace Types {
    type Card = 'A' | 'B';

    type Player = {
        hand: Card[],
        played_cards: Card[],
        placed_card: Card | null,
    }

    type GameState = {
        playerCount: number,
        players: Player[],
    };

    type Action = {
        type: 'PLACE_CARD',
        playerIdx: number,
        cardIdx: number,
    };
}
