import {ORDER_PROGRESS_UPDATED} from '../helpers/constants'

const orderProgressUpdated = (newStatus) => {
    return {
        orderStatus: newStatus,
        type: ORDER_PROGRESS_UPDATED
    }
}

export default orderProgressUpdated