export const getStatusCode = (num: number) => {
    enum StatusCode {
        "Активен" = 0,
        "Заблокирован" = 1,
    }

    return StatusCode[num]
}

export const getRole = (data: string[]) => {
    enum Role {
        "ROLE_ADMIN" = 'Администратор',
        "ROLE_USER" = 'Юзер',
    }

    const newArr = []
    data.map((item) => (
        newArr.push(Role[item])
    ))

    return newArr
}

export const getPosition = (data: string[]) => {
    enum Position {
        "COURIER" = 'Курьер',
        "MODERATOR" = 'Модератор',
        "COOK" = 'Повар'
    }

    const newArr = []
    data.map((item) => (
        newArr.push(Position[item])
    ))

    return newArr
}

export type Users = {
    id: string
    initials?: string
    login: string
    status: number
    roles: string[]
    position: string[]
    registration: number
    lastVisit: number
}