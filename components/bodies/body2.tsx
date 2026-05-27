import {BodyProps} from "@/types/props/text";

export default function Body2({children, className = ""}: BodyProps) {
    return (
        <p className={`text-body2 font-normal text-text-secondary ${className}`}>
            {children}
        </p>
    );
}

