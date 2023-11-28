const CourierListApi = [
    {
        id: 'we123',
        name: 'Кумейко Ф.',
        status: 1,
        worksUpTo: 2000,
        position: ['45.017863', '41.898736'],
    },
    {
        id: 'we124',
        name: 'Александров И. ',
        status: 1,
        worksUpTo: 2000,
        position: ['45.42343', '55.12332'],
    },
    {
        id: 'we125',
        name: 'Апраксин Ф. ',
        status: 2,
        worksUpTo: 1800,
        position: ['45.42343', '55.12332'],
    },
];

interface ICourierList {
    id: string;
    name: string;
    status: number;
    worksUpTo: number;
    position: string[];
}

export { CourierListApi, ICourierList };
