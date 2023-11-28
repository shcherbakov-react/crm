export const getStatusCode = (num: number) => {
    enum StatusCode {
        "Отключена" = 0,
        "Активна" = 1,
    }
    return StatusCode[num]
}

export interface AddressSchema {
    id: string
    name: string
    status: number
    minSum: number
    minFreeDelivery: number
    deliveryTime: number
    deliveryRadius: string
    comment: string
}
