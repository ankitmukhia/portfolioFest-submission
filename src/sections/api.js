export const messageapi = async (data) => {
    try {
        const response = await fetch('https://email-store.onrender.com/message', {
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
