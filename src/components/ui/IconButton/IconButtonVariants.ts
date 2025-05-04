import {cva} from "class-variance-authority";

export const iconButtonVariants = cva(
    "p-2 rounded-default flex items-center justify-center",
    {
        variants: {
            variant: {
                primary: "bg-dark-green border border-dark-green text-white hover:bg-white hover:text-black hover:border-black",
                secondary: "bg-brown text-white hover:bg-opacity-90",
                outline: " border border-gray-300 text-gray-700"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);