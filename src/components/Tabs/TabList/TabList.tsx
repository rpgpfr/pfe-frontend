'use client'
import {FC, isValidElement, ReactElement, ReactNode, useEffect, useState} from "react";
import styles from './TabList.module.css';


interface TabProps {
    children: ReactNode[];
    activeTabIndex?: number;
    handleActiveTab?: (index: number) => void;
}

interface TabElementProps {
    'label': string;
    children: ReactNode;
}

type TabElement = ReactElement<TabElementProps>;


const TabList: FC<TabProps> = ({children, activeTabIndex = 0, handleActiveTab}) => {

    const [activeTab, setActiveTab] = useState<number>(activeTabIndex)
    const handleTabClick = (index:number) => {
        setActiveTab(index)
        if(handleActiveTab != undefined) {
            handleActiveTab(index)
        }
    }

    useEffect(() => {
        setActiveTab(activeTabIndex)
    }, [activeTabIndex]);

    const tabs: TabElement[] = children.filter(
        (child): child is TabElement => isValidElement(child)
    );

    return (
        <div className={styles.tabs}>
            <nav className={styles.listWrapper}>
                <ul className={styles.tabList} role="tablist" aria-orientation="horizontal">
                    {tabs.map((tab:TabElement, index:number) => {
                        return (
                       <li className={styles.listItem} key={index}>
                           <button
                                   role="tab"
                                   id={`tab-${tab.props.label}`}
                                   aria-controls={`panel-${tab.props.label}`}
                                   aria-selected={activeTab === index}
                                   onClick={() => handleTabClick(index)}
                                   className={styles.tabBtn}>
                               {tab.props.label}
                           </button>
                       </li>
                        )
                    })}
                </ul>
            </nav>
            {tabs[activeTab]}
        </div>
    )
}

export default TabList;