import axios from "axios"
import { BASE_URL } from "./constants"

async function startGame(payload) {
    const { data } = await axios.post(`${BASE_URL}/game/start`, payload);
    return data
}

export default startGame

