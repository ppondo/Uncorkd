import * as BeverageApiUtil from '../util/beverage_api_util';

export const RECEIVE_ALL_BEVERAGES = 'RECEIVE_ALL_BEVERAGES';
export const RECEIVE_BEVERAGE = 'RECEIVE_BEVERAGE';

export const fetchBeverages = () => dispatch => (
    BeverageApiUtil.fetchBeverages().then(beverages => dispatch(receiveAllBeverages(beverages)))
)

export const fetchBeverage = (id) => dispatch => (
    BeverageApiUtil.fetchBeverage(id).then(beverage => dispatch(receiveBeverage(beverage)))
)

export const createBeverage = (beverage) => dispatch => (
    BeverageApiUtil.createBeverage(beverage).then(beverage => dispatch(receiveBeverage(beverage)))
)

export const updateBeverage = (beverage) => dispatch => (
    BeverageApiUtil.updateBeverage(beverage).then(beverage => dispatch(receiveBeverage(beverage)))
)

const receiveAllBeverages = (beverages) => ({
    type: RECEIVE_ALL_BEVERAGES,
    beverages
})

const receiveBeverage = (beverage) => ({
    type: RECEIVE_BEVERAGE,
    beverage
})