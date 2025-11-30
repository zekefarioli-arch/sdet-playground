// sanity.test.ts
// This is a very small "sanity" test.
// Its only purpose is to verify that Jest + TypeScript are working correctly.

describe("sanity check", () => {
    // A single test case.
    // If this passes, we know our test setup is correct.
    it("adds numbers correctly in JavaScript/TypeScript", () => {
      // Arrange
      const a = 2;
      const b = 3;
  
      // Act
      const result = a + b;
  
      // Assert
      // We expect 2 + 3 to equal 5.
      expect(result).toBe(5);
    });
  });
  