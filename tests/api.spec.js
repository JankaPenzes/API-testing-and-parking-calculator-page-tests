const { test, expect } = require("@playwright/test");
test("API test", async ({ request }) => {
    await test.step("Testing api call response GET1", async () => {
        const response = await request.get("https://reqres.in/api/users",{params:{page:2}});
        await expect(response).toBeOK();
        console.log(await response.json());
        const responseData = await response.json();
        // responseData.data[0].email
        expect(responseData).toStrictEqual({
            "page": 2,
            "per_page": 6,
            "total": 12,
            "total_pages": 2,
            "data": [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                },
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg"
                },
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg"
                },
                {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://reqres.in/img/faces/12-image.jpg"
                }
            ],
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        });
    });
}); 
test("API test2", async ({ request }) => {
    await test.step("Testing api call response POST1", async () => {
        const response = await request.post("https://reqres.in/api/users", {data:{name: "Janka", job:"teacher"}});
        await expect(response).toBeOK();
        console.log(await response.json());
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
        expect(response.status()).toBe(204);
    });
}); 