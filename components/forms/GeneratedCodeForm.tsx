"use client"

import {DigitSlot} from "@/components/outputs/DigitSlot";
import {Button} from "@/components/buttons/Button";
import {AltArrowLeft} from "@solar-icons/react-perf/Outline";
import Link from "next/link";

type SlotFormProps = Readonly<{ amount: number }>

export default function SlotForm({amount}: SlotFormProps) {
    return <form className="flex flex-col gap-4 items-stretch">
        <output className="flex gap-2.5">
            {[..."123456"].map((digit, key) => <DigitSlot key={digit}>{digit}</DigitSlot>)}
        </output>
        <Button
            size="L"
            variant="Contained"
            onClick={(event) => {
                event.preventDefault()
                // TODO: generate code
            }}
            type="submit">Generieren</Button>
        <Link href="/">
            <Button
                size="S"
                variant="Text"
                onClick={() => {
                    // TODO: Navigate back
                }}
                className="size-full text-text-primary flex items-center justify-center gap-3"
                type="button">
                <AltArrowLeft size="1rem" color="inherit"/>
                Zurück
            </Button>
        </Link>
    </form>
}