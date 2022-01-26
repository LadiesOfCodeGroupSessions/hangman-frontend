import axios from "axios";
import { BASE_URL } from "./constants";

async function takeName(input) {
    const { data } = await axios.post(BASE_URL + "/player", { name: input });
    localStorage.setItem("hangman", JSON.stringify(data));

    return data
}

export default takeName;
