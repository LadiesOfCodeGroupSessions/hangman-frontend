import startGame from "./startGame";
import axios from "axios";

jest.mock("axios");

describe("startGame", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Returns secret word length and game id", async () => {
        const payload = {
            playerId: 1,
            gameInProgress: true
        };

        axios.post.mockResolvedValueOnce({
            data: {
                gameId: 2,
                secretWordLength: 5
            }
        });

        const data = await startGame(payload)

        expect(data.secretWordLength).toEqual(5)
        expect(data.gameId).toEqual(2);
    });

    it("Returns error", async () => {
        const payload = {
            playerId: 1,
            gameInProgress: true
        };

        const errorMsg = {
            error: "Cannot start the game, sorry :(",
        };

        axios.post.mockReturnValue(Promise.reject(errorMsg));

        await expect(startGame(payload)).rejects.toBe(errorMsg);
    });
});
