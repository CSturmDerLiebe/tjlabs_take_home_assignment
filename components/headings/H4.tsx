import {HeadingProps} from "@/types/props/text";

export default function H4({children}: HeadingProps) {
    return (
        <h4 className={`font-heading text-h4 font-semibold text-text-primary text-center`}>
            {children}
        </h4>
    );
}

