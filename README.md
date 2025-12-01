## 01-api-tests — API Testing Framework (TypeScript + Jest + Supertest)

This module contains a small API testing framework built with TypeScript.  
The goal is to demonstrate professional SDET practices: clear structure, separation between code and tests, and coverage of both happy-path and error-path scenarios.

### Technologies

- TypeScript
- Jest + ts-jest
- Supertest

### What this module includes

- A sanity test (`sanity.test.ts`)
- A happy-path API test against the public PokéAPI (`pikachu`)
- A negative test that validates a 404 response for an unknown resource
- Centralized configuration in `src/config.ts`
- A simple but clean structure with `src/` for configuration and `tests/` for test suites

### How to run the tests

```bash
cd 01-api-tests
npm install
npm test