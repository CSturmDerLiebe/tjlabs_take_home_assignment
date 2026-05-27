import InputLabel from "@/components/inputs/InputLabel";
import type {InputHTMLAttributes} from "react";
import {useId} from "react";
import type {RequireSelected} from "@/types/utils/RequireSelected";

type Usage = "email" | "password";
type TextInputProps =
    Readonly<{ usage: "email" | "password", }>
    & InputHTMLAttributes<HTMLInputElement>

export default function TextInput({usage, ...props}: TextInputProps) {
    return <BaseTextInput {...selectTextInputProps(usage)} id={useId()} {...props} />
}

function selectTextInputProps(usage: Usage): Omit<BaseInputElementProps, "id"> {
    switch (usage) {
        case "email":
            return {type: "email", autoComplete: "email", inputLabel: "Email address"}
        case "password":
            return {
                type: "password",
                autoComplete: "current-password",
                inputLabel: "Password",
                placeholder: "6+ characters"
            }
    }
}

type BaseInputElementProps = RequireSelected<InputHTMLAttributes<HTMLInputElement>, "type" | "id" | "autoComplete">
    & { inputLabel: string }

function BaseTextInput({id, inputLabel, children, ...props}: BaseInputElementProps) {
    return (
        <div className="flex bg-grey-500-p8 h-13 rounded-lg pl-3 pr-3.5 py-1.5">
            <div className="flex flex-col flex-1">
                <InputLabel htmlFor={id}>{inputLabel}</InputLabel>
                <input
                    id={id}
                    {...props}
                    className="text-input-text font-normal text-text-primary placeholder:text-text-disabled"/>
            </div>
            {children}
        </div>
    )
}