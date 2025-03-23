'use client'
import {isValidElement, useEffect, useState} from "react";
import TabItem from "@/app/global_components/tabs/tabItem/TabItem";
import styles from './styles.module.css';



const TabList = ({children, activeTabIndex = 0}) => {

    const [activeTab, setActiveTab] = useState(activeTabIndex)

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);

    const tabs = children.filter((child) => isValidElement(child) && child.type === TabItem)

    return (
        <div className={styles.tabs}>
            <nav className={styles.listWrapper}>
                <ul className={styles.tabList} role="tablist" aria-orientation="horizontal">
                    {tabs.map((tab, index) => {
                        return (
                       <li key={index}>
                           <button key={index}
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