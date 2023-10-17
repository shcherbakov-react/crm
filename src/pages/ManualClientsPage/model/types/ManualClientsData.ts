export const getStatusCode = (num: number) => {
    enum StatusCode {
        "Завершен" = 0,
        "Активен" = 1,
        "Внимание" = 3,
        "Черный список" = 4,
    }

    return StatusCode[num]
}

export type Client = {
    id: string
    statusId: number
    date: number
    ordersCount: number
    cardNum: string
    email: string
    deliveryTime: number
    initials: string
    phone: string
    address: string
    person: number
    sum: number
    comment: string
}