import axios from "axios"
import { BASE_URL } from "./constants"

async function guessLetter(payload) {
    // id needs to be game id
    const { data } = await axios.post(`${BASE_URL}/game/guess`, { gameId: 2, letter: payload });

    return data;
}

export default guessLetter