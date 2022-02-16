import axios from "axios"
import guessLetter from "./guessLetter"

jest.mock("axios");

describe("guessLetter", ()  => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Returns the whole game's state", async () => {
        const payload = {
            letter: 'A',
            gameId: 1   
        }

        const response = {
            "gameId": 1,
            "secretWord": "APPLE",
            "gameInProgress": true,
            "lives": 10,
            "incorrectLetters": [],
            "correctLetters": [
                {
                    "letter": "A",
                    "position": [
                        0
                    ]
                }
            ]
        }

        axios.post.mockResolvedValueOnce({data: response});

        const data = await guessLetter(payload);
        expect(data).toEqual(response);

    })

})
