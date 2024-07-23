export const data = {
    status: 200,
    transactions: [
        {
            id: 1,
            accountNumber: '100000001',
            transactionType: 'Transfer',
            description: 'Transfer to Jane Smith',
            destinationBank: 'ABC Bank',
            destinationBankCode: '123456',
            adminFee: 2500.00,
            totalAmount: 102500.00,
            date: '2023-06-01 10:30',
            status: 'Succeed'
        },
        {
            id: 2,
            accountNumber: '100000011',
            transactionType: 'Transfer',
            description: 'Transfer to Bob Williams',
            destinationBank: 'XYZ Bank',
            destinationBankCode: '789012',
            adminFee: 6500.00,
            totalAmount: 1006500.00,
            date: '2023-06-05 03:15',
            status: 'Failed'
        },
        {
            id: 3,
            accountNumber: '100000111',
            transactionType: 'Transfer',
            description:
                'Transfer to Emily Davis',
            destinationBank: 'ZZZ Bank',
            destinationBankCode: '997021',
            adminFee: 1500.00,
            totalAmount: 501500.00,
            date: '2023-06-10 11:45',
            status: 'Succeed'
        }
    ]
}

export const transactionTypes = [
    'Deposit',
    'Withdrawal',
    'Transfer',
    'Payment',
    'Loan',
    'Interest',
    'Fee',
    'Refund',
    'Chargeback',
    'Bill Payment'
];

export const statusTypeOptions = [
    'Succeed', 'Failed'
]
