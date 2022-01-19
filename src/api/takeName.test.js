import takeName from "./takeName";
import * as axios from "axios";

// TODO finish mocking axios call
describe('takeName', () => {
    it('Returns player\'s name and game id', async () => {
        jest.mock("axios");
        const input = "Joanna";
        const data = await takeName(input);

        expect(data.name).toEqual("Joanna");
    });
  });