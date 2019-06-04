export const fetchCheckins = () => (
    $.ajax({
        method: 'get',
        url: 'api/checkins'
    })
)

export const fetchCheckin = (id) => (
    $.ajax({
        method: 'get',
        url: `api/checkins/${id}`
    })
)

export const createCheckin = (checkin) => (
    $.ajax({
        method: 'post',
        url: 'api/checkins',
        data: { checkin },
        contentType: false,
        processData: false
    })
)

export const deleteCheckin = (id) => {
    return $.ajax({
        method: 'delete',
        url: `api/checkins/${id}`
    });
}