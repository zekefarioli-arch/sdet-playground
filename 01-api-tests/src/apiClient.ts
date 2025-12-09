// src/apiClient.ts
// Simple reusable API client using Supertest + centralized config.

const request = require("supertest");
const { config } = require("./config");

type ApiClientConfig = {
  baseUrl: string;
  timeoutMs: number;
};

type ApiClient = {
  get: (path: string) => any;
  post: (path: string, body: any) => any;
};

function createApiClient(
  apiConfig: ApiClientConfig = config as ApiClientConfig
): ApiClient {
  return {
    get: (path: string) =>
      request(apiConfig.baseUrl).get(path).timeout(apiConfig.timeoutMs),

    post: (path: string, body: any) =>
      request(apiConfig.baseUrl)
        .post(path)
        .send(body)
        .timeout(apiConfig.timeoutMs),
  };
}

module.exports = { createApiClient };