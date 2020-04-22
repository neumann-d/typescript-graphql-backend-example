const { buildSchema } = require('graphql')

const typeDefs = [`
    type Payments {
        sum: Float
        items: [PaymentItem]
    }

    type PaymentItem {
        id: Int
        contractId: Int
        description: String
        value: Float
        time: String
        isImported: Boolean
        createdAt: String
        updatedAt: String
        isDeleted: Boolean
    }

    input PaymentItemAddInput {
        contractId: Int!
        description: String
        value: Float!
        time: String!
    }

    input PaymentItemUpdateInput {
        id: Int!
        contractId: Int
        description: String
        value: Float
        time: String
        isImported: Boolean
    }

    type Query {
        payments(contractId: Int, startDate: String, endDate: String): Payments
    }

    type Mutation {
        addPayment(payment: PaymentItemAddInput!): PaymentItem
        updatePayment(payment: PaymentItemUpdateInput!): PaymentItem
        deletePayment(paymentId: Int!): PaymentItem
    }
`]

module.exports = {
    schema: buildSchema(typeDefs[0]),
    typeDefs
}