"use client";
import classNames from "classnames";


interface Props {
    loading?: boolean;
    text?: string;
    onClick: () => void;
    classNames?: string;
    color: string;

}
const AppButton = (props: Props) => {
    return (
        <button className={classNames({
            'btn': true,
            [`${props.color}`]: true,
            'text-white': true,
            [`${props.classNames}`]: true,
            'loading': props.loading === true
        })}
        >
            {props.text}
        </button >
    )
}

export default AppButton