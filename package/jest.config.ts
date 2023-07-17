import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["./dist"],
};

export default jestConfig;
