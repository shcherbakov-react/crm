import { classNames } from 'shared/lib/classNames/classNames';
 enum Status {
    'Активен' = 'active',
    'Заблокирован'= 'blocked'
}

interface StatusValueProps {
    className?: string;
    dataInt: number
    text: string
    theme?:string
}

export const StatusValue = (props: StatusValueProps) => {
    const {
        text
    } = props;

    return (
        <div className={classNames('', {[Status[text]]: true}, [])}>
            {text}
        </div>
    )
}