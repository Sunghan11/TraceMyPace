export const fetchUser = (email) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${email.id}`,
        data: { email }
    })
);