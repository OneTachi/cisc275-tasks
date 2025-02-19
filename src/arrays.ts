/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [] as number[];
    }
    const few_numbers: number[] = [numbers[0], numbers[numbers.length - 1]];
    return few_numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = [...numbers].map(
        (num: number): number => num * 3
    );
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted_num: number[] = [...numbers].map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return converted_num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const conversion: number[] = [...amounts].map((amount: string): number => {
        let formatted_amount: string = amount;
        if (formatted_amount.charAt(0) === "$") {
            formatted_amount = amount.slice(1);
        }
        return Number.isNaN(parseInt(formatted_amount))
            ? 0
            : parseInt(formatted_amount);
    });
    return conversion;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered_messages: string[] = [...messages].filter(
        (message: string) => message.charAt(message.length - 1) !== "?"
    );
    const exclaim_messages: string[] = [...filtered_messages].map(
        (message: string) =>
            message.charAt(message.length - 1) === "!"
                ? message.toUpperCase()
                : message
    );
    return exclaim_messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const count_words: number = [...words].reduce(
        (total: number, word: string) =>
            word.length < 4 ? (total += 1) : total,
        0
    );
    return count_words;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return [...colors].every(
        (color: string) =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let result: string = "";
    const sum: number = [...addends].reduce(
        (total: number, num: number) => (total += num),
        0
    );
    result = sum.toString() + "=" + [...addends].join("+");
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const injection: number[] = [...values];
    const negative_index: number = injection.findIndex(
        (num: number) => num < 0
    );
    if (negative_index === -1) {
        const sum: number = injection.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const inj = [...injection, sum];
        return inj;
    }
    const split_values: number[] = [...injection].slice(0, negative_index);
    const sum: number = split_values.reduce(
        (total: number, num: number) => total + num,
        0
    );
    const inj: number[] = [...injection];
    inj.splice(negative_index + 1, 0, sum);
    return inj;
}
