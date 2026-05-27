export function* generateRandomNumbers(n: number): Generator<number[], never, void> {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`Expected n to be a positive integer, got ${n}.`);
    }

    const historyLimit = 3;
    const recentPatterns = new Set<string>();

    function rememberPattern(newPattern: string) {
        if (recentPatterns.size < historyLimit) {
            recentPatterns.add(newPattern)
        } else {
            shiftSet(recentPatterns)
            recentPatterns.add(newPattern)
        }
    }

    while (true) {
        const generatedDigits = generateUniqueDigits(n);
        const newOrderPattern = determineOrderPattern(generatedDigits);
        if (recentPatterns.size === 0) {
            rememberPattern(newOrderPattern);
            yield generatedDigits
        } else if (!recentPatterns.has(newOrderPattern)) {
            rememberPattern(newOrderPattern)
            yield generatedDigits
        }
    }
}

export function generateUniqueDigits(n: number): number[] {
    const digits = new Set<number>()

    while (digits.size < n) {
        digits.add(Math.floor(Math.random() * 10))
    }

    return [...digits]
}

/**
 * Determines the order pattern of the digits.
 * @returns The order pattern as a string containing "1" for ascending and "-1" for descending order.
 */
export function determineOrderPattern(digits: number[]): string {
    let pattern = ""
    for (let i = 0; i < digits.length - 2; i++) {
        pattern += digits[i] < digits[i + 1] ? "1" : "-1"
    }
    return pattern
}

/**
 * Removes the first element from a set.
 * @returns The first element of the set, or undefined if the set is empty.
 */
function shiftSet<T>(set: Set<T>): T | undefined {
    const first = set.values().next().value
    if (first !== undefined) {
        set.delete(first)
    }
    return first
}