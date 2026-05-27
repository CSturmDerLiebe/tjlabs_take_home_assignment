import type {RequireSelected} from "@/types/utils/RequireSelected";
import type {HTMLAttributes} from "react";

export function DigitSlot({children}: RequireSelected<HTMLAttributes<HTMLSpanElement>, "children">) {
    return <span
        className="inline-flex items-center justify-center bg-grey-500-p8 text-body2 font-normal text-text-primary">
            {children}
    </span>
}