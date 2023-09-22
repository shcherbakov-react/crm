import cls from './AvatarDropdown.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
const {
    className,
} = props;

    return (
    <div className={classNames(cls.avatarDropdown, {}, [className])}>

    </div>
    )
}