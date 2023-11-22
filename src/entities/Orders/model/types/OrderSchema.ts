export const getPaymentStatus = (num: number) => {
    enum StatusCode {
        "Онлайн" = 0,
        "Терминал" = 1,
        "Наличные" = 2
    }

    return StatusCode[num]
}

export type OrderSchema = {
    id: number
    outlet: {
        outletId: number
        outletTitle: string
        outletTitleColor: string
    }
    statusId: number
    date: number
    deliveryTime: number
    deliveryOnTime: number
    paymentType: number
    initials: string
    phone: string
    address: string
    district: string
    person: number
    courierId?: number
    comment?: string
    isRecall: boolean
    paymentInfo: {
        cardNumber: string
        sum: number
        sumWithSale?: number
        numOfSale?: number
        paymentStatus: number
    }
}
