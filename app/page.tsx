"use client";

import Card from "@/components/containers/Card";
import Link from "next/link";
import Body2 from "@/components/bodies/body2";
import SignInForm from "@/components/forms/SignInForm";

export default function SignInPage() {
    return <main className="flex-1 flex flex-col justify-center items-center">
        <Card title="Sign in"
              text={<Body2 className="text-center pt-3">
                  {"Don't have an account?"}
                  <Link href="#" className="font-semibold text-text-primary">
                      {" Get started"}
                  </Link>
              </Body2>}
        >
            <SignInForm/>
        </Card>
    </main>
}