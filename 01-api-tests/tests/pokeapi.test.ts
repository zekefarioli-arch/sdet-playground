// tests/pokeapi.test.ts
// Basic example of an API test using Supertest and a public API (PokéAPI).

// Usamos require para evitar problemas de módulo con TypeScript + CommonJS
const request = require("supertest");
const { config } = require("../src/config");

const BASE_URL = "https://pokeapi.co";

describe("PokéAPI - basic checks", () => {
  it("returns data for pikachu", async () => {
    // Act
    const response = await request(BASE_URL).get("/api/v2/pokemon/pikachu");

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "pikachu");
    expect(response.body.abilities.length).toBeGreaterThan(0);
  });

  it("returns 404 for an unknown pokemon", async () => {
    const response = await request(config.baseUrl).get(
      "/api/v2/pokemon/thisdoesnotexist"
    );

    expect(response.status).toBe(404);
  });
});
