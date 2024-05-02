const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig ({
    projects: [
        {
            name: "API tests",
            testMatch: "api.spec.js"
        }
    ],
    testDir: "./tests",
    use: {baseURL:"https://reqres.in/api"}
});
