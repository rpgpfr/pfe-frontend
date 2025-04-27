import {FC, ReactNode} from "react";
import {clsx} from "clsx";

import styles from "./Separator.module.css";

interface SeparatorProps {
    children?: ReactNode;
}

const Separator: FC<SeparatorProps> = ({children}) => {

    const separatorClassNames = clsx(styles.separator, children ? "h-fit" : "h-px");

    return (
        <div className={separatorClassNames}>
            <span></span>
            {children}
            <span></span>
        </div>
    );

};

export default Separator;