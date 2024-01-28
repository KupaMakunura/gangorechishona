import { AlertProps, Alert } from "react-daisyui"

//Alert
interface AppAlertProps extends AlertProps {
    mode: "success" | "error" | "warning" | "info"
}

export const AppAlert = (props: AppAlertProps) => {
    return (

        <Alert
            {...props}
            status={props.mode}
            icon={props.icon}
            className={`text-xs h-10 pt-3  px-4 w-fit rounded-md text-white text-center ${props.className}`}
        >
            {props.children}
        </Alert>

    )
}