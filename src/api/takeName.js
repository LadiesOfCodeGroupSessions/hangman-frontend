import axios from "axios";
import { BASE_URL } from "./constants";

function takeName(input) {
    return axios
        .post(BASE_URL + "/player", { name: input })
        .then((response) => {
            localStorage.setItem("hangman", JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log("error in takeName function", error);
            return error;
        });
}

export default takeName;

