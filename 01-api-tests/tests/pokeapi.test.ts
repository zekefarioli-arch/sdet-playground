// tests/pokeapi.test.ts
// API tests using reusable apiClient.

const { createApiClient } = require("../src/apiClient");
const client = createApiClient();

describe("PokéAPI — basic and error-path tests", () => {
  it("returns data for pikachu", async () => {
    const response = await client.get("/api/v2/pokemon/pikachu");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "pikachu");
    expect(response.body.abilities.length).toBeGreaterThan(0);
  });

  it("returns 404 for an unknown pokemon", async () => {
    const response = await client.get("/api/v2/pokemon/DOES_NOT_EXIST");

    expect(response.status).toBe(404);
  });
});