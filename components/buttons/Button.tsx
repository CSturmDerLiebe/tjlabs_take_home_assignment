import type {ButtonHTMLAttributes} from "react";
import {RequireSelected} from "@/types/utils/RequireSelected";

type Size = "L" | "S";
type Variant = "Contained" | "Text";
type ButtonLargeProps = RequireSelected<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick" | "type"> & {
    size: Size,
    variant: Variant
}

/**
 * @throws Error if the size and variant combination is unsupported.
 */
export function Button({size, variant, className, children, ...props}: ButtonLargeProps) {
    return <button {...props} className={`${selectClassName(size, variant)} ${className}`}> {children} </button>;
}

/**
 * @throws Error if the size and variant combination is unsupported.
 */
function selectClassName(size: Size, variant: Variant) {
    switch (size) {
        case "L":
            switch (variant) {
                case "Contained":
                    const className = "bg-primary-main text-button-large font-bold text-primary-contrast-text py-3 rounded-lg"
                    return className
                default:
                    throw new Error(`Invalid Button Type: ${size}-${variant}`);
            }
        case "S":
            switch (variant) {
                case "Text":
                    const className = "text-subtitle2 font-semibold text-primary"
                    return className
                default:
                    throw new Error(`Invalid Button Type: ${size}-${variant}`);
            }
        default:
            throw new Error(`Invalid Button Type: ${size}-${variant}`);
    }

}