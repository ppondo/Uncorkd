export const signUp = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: { user: user }
    });
}

export const logIn = (user) => {
    return (
        $.ajax({
            method: 'post',
            url: 'api/session',
            data: { user: user }
        })
    )
}

export const logOut = () => {
    return $.ajax({
        method: 'delete',
        url: 'api/session'
    });
}

export const fetchUsers = () => (
    $.ajax({
        method: 'get',
        url: 'api/users'
    })
)

export const fetchUser = (id) => (
    $.ajax({
        method: 'get',
        url: `api/users/${id}`
    })
)