

let board;
board = {
    "id": 0,
    "timestarted": 0,
    "tiles": {
        "go": {
            "ppl": []
        },
        "med": {
            "name": "mediterranean avenue",
            "rents": [2, 10, 30, 90, 160, 250],
            "level": 0
        },
        "baltic": {
            "name": "baltic avenue",
            "rents": [4, 20, 60, 180, 320, 450],
            "level": 0
        }
    },
    "status": {
        "players": [],
        "houses": 32,
        "hotels": 12
    }
}
export const MoleopolyGame = {
    setup: () => ({
        board: board
    }),
    moves : {
        rolLDice: (G, ctx, id) => {
            if(G.board.status.players.includes(ctx.currentPlayer)) {
                console.log("ada")
            } else {
                G.board.status.players.push(ctx.currentPlayer)
                console.log("lol")
            }
        }
    }
};