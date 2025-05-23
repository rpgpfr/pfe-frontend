import {cva} from "class-variance-authority";

export const buttonVariants = cva(
    "rounded-default transition-all px-6 py-2",
    {
        variants: {
            variant: {
                primary: "bg-primary-green text-white border border-primary-green hover:bg-white hover:text-black hover:border-black",
                secondary: "bg-brown text-white hover:bg-opacity-90",
                outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
                icon: "p-2 flex items-center justify-center"
            }
        }
    }
);