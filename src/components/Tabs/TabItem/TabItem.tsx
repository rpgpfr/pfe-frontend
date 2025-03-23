'use client'

import {FC, memo, ReactNode} from "react";


interface TabItemProps {
    label:string
    children: ReactNode;
}
const TabItem: FC<TabItemProps> = ({label, children}) => {

    return (
        <div>
            {children}
        </div>
    )

}

export default memo(TabItem);