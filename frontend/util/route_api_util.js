export const fetchRoutes = () => (
    $.ajax({
        method: 'GET',
        url: 'api/routes'
    })
);

export const fetchRoute = (routeId) => (
    $.ajax({
        method: 'GET',
        url: `api/routes/${routeId}`
    })
);

export const createRoute = (route) => {
    return (
        $.ajax({
            method: "POST",
            url: 'api/routes',
            data: {route: route},
            error: err => console.log(err),
        })
    )
};

export const updateRoute = (route) => (
    $.ajax({
        method: 'PATCH',
        url: `api/routes/${route.id}`,
        data: {route},
        error: err => console.log(err),
    })
);

export const deleteRoute = (routeId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/routes/${routeId}`,
    })
)