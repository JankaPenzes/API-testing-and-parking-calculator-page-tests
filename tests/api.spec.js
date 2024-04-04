const { test, expect } = require("@playwright/test");
test("API test", async ({ request }) => {
    await test.step("Testing api call response", async () => {
        const response = await request.get("https://reqres.in/api/users?page=1");
        await expect(response).toBeOK();
        console.log(response)
    });
});