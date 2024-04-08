const { test, expect } = require("@playwright/test");
test("API test", async ({ request }) => {
    await test.step("Testing api call response GET1", async () => {
        const response = await request.get("https://reqres.in/api/users",{params:{page:2}});
        await expect(response).toBeOK();
        console.log(await response.json())
    });
}); 
test("API test2", async ({ request }) => {
    await test.step("Testing api call response POST1", async () => {
        const response = await request.post("https://reqres.in/api/users", {data:{name: "Janka", job:"teacher"}});
        await expect(response).toBeOK();
        console.log(await response.json())
    });
}); 