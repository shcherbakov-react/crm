import { Input } from 'shared/ui/Input/Input';
import { OutletTitle } from 'shared/ui/OutletTitle/OutletTitle';
import { createColumnHelper } from '@tanstack/react-table';
import moment from 'moment';
import { getPosition, getRole, getStatusCode, Users } from '../model/types/UsersPageSchema';
import { RoleValue } from 'pages/UsersPage/ui/components/RoleValue';
import { StatusValue } from 'pages/UsersPage/ui/components/StatusValue';

export const defaultDataUsers: Users[] = [
    {
        initials: 'Павел Андреевич',
        login: 'cocuctep',
        status: 0,
        roles: ['ROLE_ADMIN', 'ROLE_USER'],
        position: ['MODERATOR'],
        registration: 1692785508,
        lastVisit: 1690096306,
    },
    {
        initials: 'Павел Андреевич',
        login: 'rufuz',
        status: 0,
        roles: ['ROLE_ADMIN',],
        position: ['COURIER'],
        registration: 1692785508,
        lastVisit: 1690096306,
    },
    {
        initials: 'Павел Андреевич',
        login: 'qweqwe',
        status: 1,
        roles: ['ROLE_ADMIN', 'ROLE_USER'],
        position: ['COURIER', 'COOK'],
        registration: 1692785508,
        lastVisit: 1690096306,
    },
]
export const columnHelper = createColumnHelper<Users>()
export const columns = [

    columnHelper.accessor('initials',  {
        header: () => 'ФИО',
        cell: initials => <>{initials.renderValue()}</>
    }),

    columnHelper.accessor('login', {
        header: () => 'Логин',
        cell: login => <>{login.renderValue()}</>
    }),

    columnHelper.accessor('status', {
        header: () => 'Статус',
        cell: status => <StatusValue theme={getStatusCode(status.renderValue())} text={getStatusCode(status.renderValue())} dataInt={status.renderValue()}></StatusValue>
    }),

    columnHelper.accessor('roles', {
        header: () => 'Роль',
        cell: roles => <RoleValue data={getRole(roles.renderValue())} />
    }),

    columnHelper.accessor('position', {
        header: () => 'Должность',
        cell: position => <RoleValue data={getPosition(position.renderValue())} />
    }),

    columnHelper.accessor('registration', {
        header: () => 'Регистрация',
        cell: time => moment.unix(time.renderValue()).lang('ru').format('DD.MM.yyyy-HH:mm')
    }),

    columnHelper.accessor('lastVisit', {
        header: () => 'Последнее посещение',
        cell: time => moment.unix(time.renderValue()).lang('ru').format('DD.MM.yyyy-HH:mm')
    }),

]