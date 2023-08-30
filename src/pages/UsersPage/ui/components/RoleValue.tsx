interface RoleValueProps {
    className?: string;
    data: string[]
}

export const RoleValue = (props: RoleValueProps) => {
    const {
        className,
        data
    } = props;
    return (
        <ul>
            {data.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}