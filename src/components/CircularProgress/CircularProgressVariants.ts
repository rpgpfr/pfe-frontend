import { cva } from "class-variance-authority";

export const progressCircleVariants = cva("fill-transparent transition-all duration-700 ease-in-out ", {
    variants: {
        status: {
            default: "stroke-brown",
            complete: "stroke-primary-green",
        },
    },
});

export const labelVariants = cva("absolute text-2xl font-medium", {
    variants: {
        status: {
            default: "stroke-brown",
            complete: "text-primary-green",
        },
    },
});
