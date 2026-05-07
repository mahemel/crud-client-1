import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";

const UpdateUser = async ({ params }) => {
    const { id } = await params;

    const user = await getUserById(id);

    const updateUserWrapper = async (formData) => {
        "use server";
        return updateUser(id, formData);
    };

    return (
        <div className="max-w-100 mx-auto">
            <h2>Update user: {user.name}</h2>

            <form action={updateUserWrapper} className="flex flex-col gap-4">
                <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    defaultValue={user?.name}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    defaultValue={user?.email}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <TextField
                    className="w-full"
                    name="role"
                    type="text"
                    defaultValue={user?.role}
                >
                    <Label>Role</Label>
                    <Input placeholder="Enter your role" />
                </TextField>

                <div className="flex justify-end gap-3">
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" slot="close">
                        Edit User
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;
