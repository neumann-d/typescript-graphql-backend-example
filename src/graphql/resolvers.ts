import { Payments } from './types'

const paymentItems = [
    {
        id: 1366,
        contractId: 17689,
        description: 'Rent payment',
        value: 100,
        time: '2016-12-09T00:00:00.00Z',
        isImported: false,
        createdAt: '2016-12-09T12:57:31.393Z',
        updatedAt: '2016-12-09T12:57:31.393Z',
        isDeleted: false
    },
    {
        id: 1365,
        contractId: 17689,
        description: 'Rent to be paid',
        value: -100,
        time: '2016-12-09T00:00:00.00Z',
        isImported: false,
        createdAt: '2016-12-09T12:57:09.708Z',
        updatedAt: '2016-12-09T12:57:09.709Z',
        isDeleted: false
    }
]

function getPayments() {
    // calculate sum of all items
    const sum: number = paymentItems.reduce((acc, curr) => acc + curr.value, 0)

    return {
      sum,
      items: paymentItems
    }
}

export default {
    Query: {
        payments: (): Payments => getPayments()
    }
}
