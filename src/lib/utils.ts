import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Aladin} from "next/font/google";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
};

export const aladin = Aladin({
    subsets: ['latin'],
    weight: '400',
});
