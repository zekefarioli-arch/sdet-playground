// src/apiClient.ts
// Simple reusable API client using Supertest + centralized config.

const request = require("supertest");
const { config } = require("./config");

function createApiClient() {
  return {
    get: (path) => request(config.baseUrl).get(path).timeout(config.timeoutMs),
    post: (path, body) =>
      request(config.baseUrl).post(path).send(body).timeout(config.timeoutMs),
  };
}

module.exports = { createApiClient };