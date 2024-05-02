const { test, expect } = require("@playwright/test");
test("Requesting the list of users test", async ({ request }) => {
    await test.step("Testing GET1 request", async () => {
        const response = await request.get("https://reqres.in/api/users",{params:{page:2}});
        await expect(response).toBeOK();
        console.log(await response.json());
        const responseData = await response.json();
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
        expect(response.status()).toBe(200);
    });
}); 
test("Create a new user test", async ({ request }) => {
    await test.step("Testing POST1 request", async () => {
        const response = await request.post("https://reqres.in/api/users", {data:{name: "Janka", job:"teacher"}});
        await expect(response).toBeOK();
        console.log(await response.json());
        const responseData = await response.json();
        expect(responseData.name).toStrictEqual("Janka");
        expect(responseData.job).toStrictEqual("teacher");
        expect(response.status()).toBe(201);
    });
}); 

test("Updating a user's data test", async ({ request }) => {
    await test.step("Testing PUT1 request", async () => {
        const response = await request.put("https://reqres.in/api/users/2",{data:{name: "Janka", job:"tester"}});
        await expect(response).toBeOK();
        console.log(await response.json());
        const responseData = await response.json();
        expect(responseData.name).toStrictEqual("Janka");
        expect(responseData.job).toStrictEqual("tester");
        expect(response.status()).toBe(200);
    });
});
test("Updating a user's data test 2", async ({ request }) => {
    await test.step("Testing PATCH1 request", async () => {
        const response = await request.patch("https://reqres.in/api/users/2",{data:{name: "Janka", job:"tester"}});
        await expect(response).toBeOK();
        console.log(await response.json());
        const responseData = await response.json();
        expect(responseData.name).toStrictEqual("Janka");
        expect(responseData.job).toStrictEqual("tester");
        expect(response.status()).toBe(200);
    });
}); 
test("Deleting user test", async ({ request }) => {
    await test.step("Testing DELETE1 request", async () => {
        const response = await request.delete("https://reqres.in/api/users/2");
        expect(response.status()).toBe(204);
    });
}); 