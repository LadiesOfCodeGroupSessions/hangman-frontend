import takeName from "./takeName";
import axios from "axios";

jest.mock("axios");

describe('takeName', () => {
    afterEach( () => {
        jest.clearAllMocks()
    })

    it('Returns player\'s name and player id', async () => {
        const input = "Joanna";

        axios.post.mockResolvedValueOnce({
            data: {
              name: "Lawrencia",
              id: 1
            }
          });
      
        const data = await takeName(input);

        expect(data.name).toEqual("Lawrencia");
        expect(data.id).toEqual(1);
    });
  });