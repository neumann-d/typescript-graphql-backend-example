import moment from 'moment'

import { MutationAddPaymentArgs, Payments, PaymentItem, PaymentItemAddInput, QueryPaymentsArgs } from './types'

// simple simulated payment store (not persistent)
const paymentItems: Array<PaymentItem> = [
    {
        id: 1367,
        contractId: 17788,
        description: 'Rent payment',
        value: 500,
        time: '2016-12-14T00:00:00.00Z',
        isImported: false,
        createdAt: '2016-12-14T12:57:31.393Z',
        updatedAt: '2016-12-14T12:57:31.393Z',
        isDeleted: false
    },
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

const getPayments = (
    contractId: QueryPaymentsArgs['contractId'],
    startDate: QueryPaymentsArgs['startDate'],
    endDate: QueryPaymentsArgs['endDate']
) => {
    let items = [...paymentItems]

    // apply filters, if provided
    if (contractId) {
        items = items.filter(item => item.contractId === contractId)
    }
    if (startDate) {
        const start = moment(startDate)
        items = items.filter(item => moment(item.time).isSameOrAfter(start))
    }
    if (endDate) {
        const end = moment(endDate)
        items = items.filter(item => moment(item.time).isSameOrBefore(end))
    }

    // calculate sum of all items
    const sum: number = items.reduce((acc, curr) => acc + curr.value, 0)

    return {
        sum,
        items
    }
}

const addPayment = (payment: PaymentItemAddInput) => {
    const paymentItem: PaymentItem = {...payment}

    // create new id with highest number (normally done by database backend automatically)
    paymentItem.id = paymentItems.reduce((acc, curr) => Math.max(acc, curr.id), 0) + 1

    // set createdAt and updatedAt to current time
    const now = moment().toISOString()
    paymentItem.createdAt = now
    paymentItem.updatedAt = now

    // set isImported and isDeleted flags to false by default
    paymentItem.isImported = false
    paymentItem.isDeleted = false

    // add to 'store' (normally stored in database)
    paymentItems.push(paymentItem)

    return paymentItem
}

export default {
    Query: {
        payments: (_: void, { contractId, startDate, endDate }: QueryPaymentsArgs): Payments => getPayments(contractId, startDate, endDate)
    },

    Mutation: {
        addPayment: (_: void, { payment }: MutationAddPaymentArgs): PaymentItem => addPayment(payment)
    }
}
