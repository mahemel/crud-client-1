import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetail = async ({ params }) => {
    const { id } = await params;
    const user = await getUserById(id);

    return (
        <div>
            <h2>User Details {id}</h2>
            {user && (
                <div>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
            )}
        </div>
    );
};

export default UserDetail;
