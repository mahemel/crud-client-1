import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const updateUser = async (id, formData) => {
    "use server";

    const updatedUser = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8000/users/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }
    )

    const data = await res.json();

    if (data.modifiedCount > 0) {
        revalidatePath('/users');
        redirect('/users')
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