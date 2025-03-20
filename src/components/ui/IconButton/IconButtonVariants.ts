import {cva} from "class-variance-authority";

export const iconButtonVariants = cva(
    "p-2 rounded-[4px] flex items-center justify-center",
    {
        variants: {
            variant: {
                primary: "bg-primary-green border border-primary-green text-white hover:bg-white hover:text-black hover:border-black",
                secondary: "bg-beige text-white hover:bg-opacity-90",
                outline: " border border-gray-300 text-gray-700"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);