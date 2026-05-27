"use client";

import Card from "@/components/containers/Card";
import Body2 from "@/components/bodies/body2";
import GeneratedNumberForm from "@/components/forms/GeneratedCodeForm";

export default function NumberGeneratorPage() {
    return <main className="flex-1 flex flex-col justify-center items-center">
        <Card title="Zahlen generieren"
              text={<Body2 className="text-center pt-3">Generiere 6 Zahlen zwischen 0 und 9, wobei keine Zahl doppelt
                  vorkommen darf.</Body2>}
        >
            <GeneratedNumberForm amount={6}/>
        </Card>
    </main>
}