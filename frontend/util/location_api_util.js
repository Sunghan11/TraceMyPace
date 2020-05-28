export const fetchLocations = () => (
    $.ajax({
        method: 'GET',
        url: `api/locations`,
    })
)

export const fetchLocation = locationId => (
    $.ajax({
        method: 'GET',
        url: `api/locations/${locationId}`,
    })
)

export const createLocation = location => (
    $.ajax({
        method: 'POST',
        url: `api/locations`,
        data: { location },
    })
)

export const updateLocation = location => (
    $.ajax({
        method: 'PATCH',
        url: `api/locations/${location.id}`,
        data: { location },
    })
)

export const deleteLocation = locationId => (
    $.ajax({
        method: 'DELETE',
        url: `api/locations/${locationId}`,
    })
)