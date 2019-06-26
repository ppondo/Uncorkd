export const fetchCheckins = (filterObj) => {
    // debugger
    return (
        $.ajax({
            method: 'get',
            url: 'api/checkins',
            data: filterObj
        })
    )
}

export const fetchCheckin = (id) => (
    $.ajax({
        method: 'get',
        url: `api/checkins/${id}`
    })
)

export const createCheckin = (checkin) => {
    return (
        $.ajax({
            method: 'post',
            url: 'api/checkins',
            data: checkin,
            contentType: false,
            processData: false
        })
    )
}

export const deleteCheckin = (id) => {
    return $.ajax({
        method: 'delete',
        url: `api/checkins/${id}`
    });
}

// likes 
export const likeCheckin = (id) => (
    $.ajax({
        url: '/api/likes',
        method: 'post',
        data: { id }
    })
)

export const dislikeCheckin = (id) => (
    $.ajax({
        url: '/api/likes',
        method: 'delete',
        data: { id }
    })
)

// comments
// export const fetchComments = (checkin_id) => (
//     $.ajax({
//         url: '/api/comments',
//         method: 'post',
//         data: { checkin_id }
//     })
// ) 

export const createComment = (comment) => (
    $.ajax({
        url: '/api/comments',
        method: 'post',
        data: comment 
    })
) 


export const deleteComment = (id) => (
    $.ajax({
        url: '/api/comments',
        method: 'delete',
        data: { id }
    })
) 