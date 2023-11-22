import { OrderSchema } from '../types/OrderSchema';

export const defaultData: OrderSchema = {
    id: 52354,
    outlet: {
        outletId: 1,
        outletTitle: 'Авокадо',
        outletTitleColor: '#027A48',
    },
    statusId: 2,
    date: 1692008533,
    deliveryTime: 1795119533,
    deliveryOnTime: 1795118888,
    paymentType: 2,
    initials: 'Павел Андреевич',
    phone: '+79987352563',
    address: 'Михайловск, Гоголя 16, кв. 52',
    district: 'Центр',
    person: 3,
    comment: 'Когда приедите, позвоните, я выйду',
    courierId: 22,
    isRecall: false,
    paymentInfo: {
        cardNumber: '3564 5865 5885 6362',
        sum: 1980,
        sumWithSale: 1728,
        numOfSale: 10,
        paymentStatus: 2,
    },
};
