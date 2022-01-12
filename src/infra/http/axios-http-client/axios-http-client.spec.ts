import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import faker from "@withshepherd/faker";
import { HttpPostClient } from "@/data/protocols/http";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient();
  return sut;
};

const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct URL and verb", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
