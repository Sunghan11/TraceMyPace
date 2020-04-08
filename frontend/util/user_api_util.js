export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: `/api/users/`
    })
);

// export const createUser = 