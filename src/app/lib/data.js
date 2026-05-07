export const getUsers = async () => {
    const res = await fetch('http://localhost:8000/users');
    const data = await res.json();

    return data;
}

export const getUserById = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`);
    const data = await res.json();

    return data;
}
