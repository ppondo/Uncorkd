export const fetchBeverages = () => (
    $.ajax ({
        method: 'get',
        url: 'api/beverages'
    })
)

export const fetchBeverage = (id) => (
    $.ajax({
        method: 'get',
        url: `api/beverages/${id}`
    })
)

export const createBeverage = (beverage) => (
    $.ajax({
        method: 'post',
        url: 'api/beverages',
        data: { beverage }
    })
)

export const updateBeverage = (beverage) => (
    $.ajax({
        method: 'patch',
        url: `api/beverages/${id}`,
        data: { beverage }
    })
)