import AddUserModal from "@/components/AddUserModal";
import { createUser, deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";
import UsersTable from "@/components/UsersTable";

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2>User Management: {users.length} users</h2>
                <AddUserModal createUserAction={createUser}></AddUserModal>
            </div>
            <UsersTable
                users={users}
                deleteUserAction={deleteUser}
            ></UsersTable>
        </div>
    );
};

export default UsersPage;
