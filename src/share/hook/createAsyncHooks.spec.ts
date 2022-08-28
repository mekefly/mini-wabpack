import { asyncTimeout } from "../utils";
import { createAsyncHook } from "./createAsyncHooks";
describe("createHook", () => {
  test("单个", async () => {
    const hookApi = createAsyncHook<string[]>();
    const mock = vitest.fn(async (testString) => {
      expect(testString).toMatchInlineSnapshot('"string"');
    });
    hookApi.tap(mock);

    await hookApi.call("string");
    expect(mock.mock.calls.length).toMatchInlineSnapshot("1");
  });
  test("多个", async () => {
    const hookApi = createAsyncHook<typeof context>();
    let numOfRun = 0;
    const mark = vitest.fn(async (context) => {
      expect(context).toMatchInlineSnapshot(`
        {
          "name": "Airvya",
        }
      `);
      await asyncTimeout(10);
      context.name = "mekefly";
    });
    const mark1 = vitest.fn((context) => {
      expect(context).toMatchInlineSnapshot(`
        {
          "name": "mekefly",
        }
      `);
    });
    hookApi.tap(mark);
    hookApi.tap(mark1);

    const context = { name: "Airvya" };

    await hookApi.call(context);

    expect(mark.mock.calls.length).toMatchInlineSnapshot("1");
    expect(mark1.mock.calls.length).toMatchInlineSnapshot("1");
    expect(context).toMatchInlineSnapshot(`
      {
        "name": "mekefly",
      }
    `);
  });
  test("clear", async () => {
    const hookApi = createAsyncHook();
    const mark = vitest.fn();
    hookApi.tap(mark);
    await hookApi.call();
    await hookApi.call();
    expect(mark.mock.calls.length).toMatchInlineSnapshot("2");
    hookApi.clear();
    await hookApi.call();
    expect(mark.mock.calls.length).toMatchInlineSnapshot("2");
  });
});
