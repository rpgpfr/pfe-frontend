"use client";

import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ReactNode} from "react";

const GSAPWrapper = ({children}: { children: ReactNode }) => {

    gsap.registerPlugin(useGSAP())

    return (
        <>
            {children}
        </>
    );

};

export default GSAPWrapper;