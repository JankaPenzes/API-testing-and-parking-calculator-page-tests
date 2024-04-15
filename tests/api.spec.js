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
test("API test3", async ({ request }) => {
    await test.step("Testing api call response PUT1", async () => {
        const response = await request.put("https://reqres.in/api/users/2",{data:{name: "Janka", job:"tester"}});
        await expect(response).toBeOK();
        console.log(await response.json())
    });
});
test("API test4", async ({ request }) => {
    await test.step("Testing api call response PATCH1", async () => {
        const response = await request.patch("https://reqres.in/api/users/2",{data:{name: "Janka", job:"tester"}});
        await expect(response).toBeOK();
        console.log(await response.json())
    });
}); 
test("API test5", async ({ request }) => {
    await test.step("Testing api call response DELETE1", async () => {
        const response = await request.delete("https://reqres.in/api/users/2");
        await expect(response).toBeOK();
        console.log(await response.json())
    });
}); 