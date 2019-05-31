import * as BreweryApiUtil from '../util/brewery_api_util';

export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';

export const fetchBreweries = () => dispatch => (
    BreweryApiUtil.fetchBreweries().then(breweries => dispatch(receiveAllBreweries(breweries)))
)

export const fetchBrewery = (id) => dispatch => (
    BreweryApiUtil.fetchBrewery(id).then(brewery => dispatch(receiveBrewery(brewery)))
)

export const createBrewery = (brewery) => dispatch => (
    BreweryApiUtil.createBrewery(brewery).then(brewery => dispatch(receiveBrewery(brewery)))
)

export const updateBrewery = (brewery) => dispatch => (
    BreweryApiUtil.updateBrewery(brewery).then(brewery => dispatch(receiveBrewery(brewery)))
)

const receiveAllBreweries = (breweries) => ({
    type: RECEIVE_ALL_BREWERIES,
    breweries
})

const receiveBrewery = (brewery) => ({
    type: RECEIVE_BREWERY,
    brewery
})