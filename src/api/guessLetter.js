import axios from "axios"
import { BASE_URL } from "./constants"

async function guessLetter(payload) {
    // id needs to be game id
    console.log("*** payload ", payload)
    const { data } = await axios.post(`${BASE_URL}/game/guess`, payload);

    return data;
}

export default guessLetter