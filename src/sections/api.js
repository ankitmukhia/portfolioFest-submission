export const messageapi = async (data) => {
    try {
        const response = await fetch('https://email-store.onrender.com/message', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Server Error`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
