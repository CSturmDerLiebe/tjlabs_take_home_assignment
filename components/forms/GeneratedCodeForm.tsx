"use client"

import {DigitSlot} from "@/components/outputs/DigitSlot";
import {Button} from "@/components/buttons/Button";
import {AltArrowLeft} from "@solar-icons/react-perf/Outline";

type SlotFormProps = Readonly<{ amount: number }>

export function SlotForm({amount}: SlotFormProps) {
    return <form className="flex flex-col gap-4">
        <output className="flex flex-wrap gap-2">
            {[..."123456"].map((digit, key) => <DigitSlot key={digit}>{digit}</DigitSlot>)}
        </output>
        <Button
            size="L"
            variant="Contained"
            onClick={(event) => {
                event.preventDefault()
                // TODO: generate code
            }}
            type="submit">Generate</Button>
        <Button
            size="S"
            variant="Text"
            onClick={() => {
                // TODO: Navigate back
            }}
            className="fill-text-primary text-text-primary"
            type="button">
            <AltArrowLeft size="1rem" color="inherit"/>
            Back
        </Button>
    </form>
}