function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            resolve(data);
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.processed = true;
            resolve(data);
        }, 1000);
    });
}
// normal function
async function main() {
    try {
        const data = await fetchData()
        console.log("Step 1:", data.message);

        const processedData = await processData(data);
        console.log("Step 2:", processedData.message, "Processed:", processedData.processed);
    } catch (error) {
        console.error("Error: ", error)
    }
}

main()