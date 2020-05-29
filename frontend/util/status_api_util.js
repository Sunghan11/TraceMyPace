export const fetchStatuses = () => (
    $.ajax({
        method: 'GET',
        url: 'api/statuses'
    })
)

export const fetchStatus = (statusId) => (
    $.ajax({
        method: 'GET',
        url: `api/statuses/${statusId}`
    })
)

export const createStatus = status => (
    $.ajax({
        method: 'POST',
        url: `api/statuses`,
        data: { status }
    })
);

export const deleteStatus = statusId => (
    $.ajax({
        method: 'DELETE',
        url: `api/statuses/${statusId}`
    })
);