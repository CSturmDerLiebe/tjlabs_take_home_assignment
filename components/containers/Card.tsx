import type {PropsWithChildren, ReactNode} from "react";
import H4 from "@/components/headings/H4";

type CardProps = PropsWithChildren<{ title: string, text: ReactNode }>

export default function Card({title, text, children}: CardProps) {
    return (
        <section
            className="w-343/375 xl:w-420/1440 aspect-420/430 bg-background-default flex flex-col items-stretch p-10 shadow-z24 rounded-2xl">
            <div className="pb-6">
                <H4>{title}</H4>
                {text}
            </div>
            {children}
        </section>
    );
}

