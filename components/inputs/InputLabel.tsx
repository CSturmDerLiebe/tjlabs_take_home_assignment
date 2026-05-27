import {LabelHTMLAttributes} from "react";
import {RequireSelected} from "@/types/utils/RequireSelected";

type InputLabelProps = & RequireSelected<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor" | "children">

export default function InputLabel({children, htmlFor}: InputLabelProps) {
    return (
        <label htmlFor={htmlFor} className="text-input-label font-semibold text-text-secondary">
            {children}
        </label>
    );
}
