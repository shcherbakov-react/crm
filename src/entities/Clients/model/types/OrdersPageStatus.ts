export const getStatusCode = (num: number) => {
    enum StatusCode {
        "Новый" = 0,
        "Готовится" = 1,
        "Собран" = 2,
        "На доставке" = 3,
        "Завершен" = 4,
        "Не завершен" = 5,
    }

    return StatusCode[num]
}

export const getPaymentType = (num: number) => {
    enum StatusCode {
        "Онлайн" = 0,
        "Терминал" = 1,
        "Наличные" = 2
    }

    return StatusCode[num]
}

export type Person = {
    id: string
    initials: string
    statusId: number
    ordersCount: number
    lastOrderTime: number
    phones: number[]
    email: string
    numberCard: string
    address: string
    ordersSum: number
    comment: string
}