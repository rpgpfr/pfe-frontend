import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Aladin} from "next/font/google";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
};

export const aladin = Aladin({
    subsets: ['latin'],
    weight: '400',
});

export const randomInt = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
