import { describe, it } from "@jest/globals";

import { add } from "../src/add";

describe("add", function () {
  it("should add", function () {
    expect(add(1, 2)).toEqual(3);
  });
});
