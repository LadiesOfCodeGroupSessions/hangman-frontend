import axios from "axios"
import { BASE_URL } from "./constants"

async function guessLetter(payload) {
    const { data } = await axios.post(`${BASE_URL}/game/guess`, payload);
    return data;
}

export default guessLetter