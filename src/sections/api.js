export const messageapi = async (data) => {
    try {
        const response = await fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const status = await response.json()
        return status;
    } catch (error) {
        throw error;
    }
}