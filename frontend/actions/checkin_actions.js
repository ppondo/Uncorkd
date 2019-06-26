import * as CheckinApiUtil from '../util/checkin_api_util';

export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const DELETE_CHECKIN = 'DELETE_CHECKIN';

// thunk action creators
//checkins
export const fetchCheckins = (filterId) => dispatch => {
    return (
        CheckinApiUtil.fetchCheckins(filterId).then(checkins => dispatch(receiveAllCheckins(checkins)))
    )
}

export const fetchCheckin = (id) => dispatch => (
    CheckinApiUtil.fetchCheckin(id).then(checkin => dispatch(receiveCheckin(checkin)))
)

export const createCheckin = (checkin) => dispatch => (
    CheckinApiUtil.createCheckin(checkin).then(checkin => dispatch(receiveCheckin(checkin)))
)

export const deleteCheckin = (checkinId) => dispatch => (
    CheckinApiUtil.deleteCheckin(checkinId).then(checkin => dispatch(removeCheckin(checkinId)))
)

// likes
export const likeCheckin = id => dispatch => (
    CheckinApiUtil.likeCheckin(id).then(checkin => dispatch(receiveCheckin(checkin)))
)

export const dislikeCheckin = id => dispatch => (
    CheckinApiUtil.dislikeCheckin(id).then(checkin => dispatch(receiveCheckin(checkin)))
)

//comments
// export const fetchComments = checkin_id => dispatch => (
//     CheckinApiUtil.fetchComments(checkin_id).then(comments => dispatch(receiveCheckin))
// )
export const createComment = comment => dispatch => (
    CheckinApiUtil.createComment(comment).then(checkin => dispatch(receiveCheckin(checkin)))
)

export const deleteComment = id => dispatch => (
    CheckinApiUtil.deleteComment(id).then(checkin => dispatch(receiveCheckin(checkin)))
)

// standard action creators (return POJOs)

const removeCheckin = checkinId => ({
    type: DELETE_CHECKIN,
    checkinId
})

const receiveCheckin = checkin => ({
    type: RECEIVE_CHECKIN,
    checkin
})

const receiveAllCheckins = checkins => ({
    type: RECEIVE_ALL_CHECKINS,
    checkins
})