import { revalidatePath } from "next/cache";

export const createUser = async (formData) => {
    "use server";

    const newUser = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    const data = await res.json();

    if (data.insertedId) {
        revalidatePath('/users')
    }

    return data;
}

export const deleteUser = async (userId) => {
    "use server";

    const res = await fetch(`http://localhost:8000/users/${userId}`, {
        method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath("/users");//the path shows the changes immediately
    }

    return data;
}