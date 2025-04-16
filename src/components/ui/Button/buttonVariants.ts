import {cva} from "class-variance-authority";

export const buttonVariants = cva(
    "rounded-default transition-all",
    {
        variants: {
            variant: {
                primary: "bg-secondary-green text-white px-6 py-2 border border-secondary-green hover:bg-white hover:text-black hover:border-black",
                secondary: "bg-brown text-white hover:bg-opacity-90",
                outline: "border border-gray-300 text-gray-700 p-4 hover:bg-gray-100",
                icon: "p-2 flex items-center justify-center"
            }
        }
    }
);