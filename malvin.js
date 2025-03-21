const axios = require('axios');
const fs = require('fs'); // File system module to save the file
const path = require('path'); // Path module for file handling

// Define the URL of the external script
const url = "https://files.catbox.moe/malvin.js";

// Define the path to save the downloaded script
const scriptPath = path.join(__dirname, "malvin-remote.js");

// Function to safely fetch and save the script
async function fetchScript() {
    try {
        console.log("Fetching the external script...");

        // Fetch the script content
        const response = await axios.get(url);

        // Save the script locally instead of executing it directly
        fs.writeFileSync(scriptPath, response.data, "utf8");

        console.log(Script downloaded successfully and saved to: ${scriptPath});
        console.log("Review the script before executing it manually.");
    } catch (error) {
        console.error("Error fetching the script:", error.message);
    }
}

// Run the script fetcher
fetchScript();
