import { createHook } from "./createHook";
describe("createHook", () => {
  test("单个", () => {
    const hookApi = createHook<string[]>();
    const mock = vitest.fn((testString) => {
      expect(testString).toMatchInlineSnapshot('"string"');
    });
    hookApi.tap(mock);

    hookApi.call("string");
    expect(mock.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "string",
        ],
      ]
    `);
  });
  test("多个", () => {
    const hookApi = createHook<typeof context>();
    let numOfRun = 0;
    const mark = vitest.fn((context) => {
      expect(context).toMatchInlineSnapshot(`
        {
          "name": "Airvya",
        }
      `);
    });
    const mark1 = vitest.fn((context) => {
      expect(context).toMatchInlineSnapshot(`
        {
          "name": "Airvya",
        }
      `);
    });
    hookApi.tap(mark);
    hookApi.tap(mark1);

    const context = { name: "Airvya" };

    hookApi.call(context);

    expect(mark.mock.calls.length).toMatchInlineSnapshot("1");
    expect(mark1.mock.calls.length).toMatchInlineSnapshot("1");
    expect(context).toMatchInlineSnapshot(`
      {
        "name": "Airvya",
      }
    `);
  });
  test("clear", () => {
    const hookApi = createHook();
    const mark = vitest.fn();
    hookApi.tap(mark);
    hookApi.call();
    hookApi.call();
    expect(mark.mock.calls.length).toMatchInlineSnapshot("2");
    hookApi.clear();
    hookApi.call();
    expect(mark.mock.calls.length).toMatchInlineSnapshot("2");
  });
});
