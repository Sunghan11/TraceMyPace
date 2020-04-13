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

export const createRoute = (route) => (
    $.ajax({
        method: 'POST',
        url: 'api/routes',
        data: {route}
    })
);

export const updateRoute = (route) => (
    $.ajax({
        method: 'PATCH',
        url: `api/routes/${route.id}`,
        data: {route}
    })
);

export const deleteRoute = (routeId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/routes/${routeId}`,
    })
)