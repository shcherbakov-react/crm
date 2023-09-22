import cls from './DeliveryPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { useState } from 'react';

export const DeliveryPage = () => {

    const [open, setOpen] = useState(false)

    const items = [
        { content: 'first', onClick: () => setOpen(true) },
        { content: 'second' },
        { content: 'third' },
    ]

    return (
        <>
            <div className="content">
                <div className={classNames(cls.deliveryPage, {}, [])}>
                    <Dropdown items={items} />
                    <Dropdown items={items} />
                </div>
            </div>
            {open && <div>meow</div>}
        </>
    )
}