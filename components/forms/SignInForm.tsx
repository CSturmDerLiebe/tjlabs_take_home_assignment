"use client"

import {Button} from "@/components/buttons/Button";
import TextInput from "@/components/inputs/TextInput";
import {Eye, EyeClosed} from "@solar-icons/react-perf/Outline";
import Link from "next/link";
import {useRef, useState} from "react";

export function SignInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    return <form className="flex-1 flex flex-col gap-4" ref={formRef}>
        <TextInput
            usage="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <TextInput
            usage="password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={isPasswordVisible ? "password" : "text"}
        >
            <PasswordVisibleToggle
                active={isPasswordVisible}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
        </TextInput>

        <Link href="/generator" className="self-end text-body2 font-normal text-text-primary">Generate numbers</Link>

        <Button
            size="L"
            variant="Contained"
            type="submit"
            onClick={(event) => {
                formRef.current?.reportValidity()
                event.preventDefault()
            }}
        >
            Sign in
        </Button>
    </form>
}

function PasswordVisibleToggle({active, onClick}: Readonly<{ active: boolean, onClick: () => void }>) {
    const iconProps = {color: "inherit", size: "1.5rem"}
    return <button type="button" className="text-action-active" onClick={onClick}>
        {active ? <EyeClosed {...iconProps} /> : <Eye {...iconProps} />}
    </button>
}