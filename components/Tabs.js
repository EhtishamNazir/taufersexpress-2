import { useState } from 'react';
import classes from '../styles/tabs.module.css';

const tabsData = [
    {
        title: 'Tab 1',
        content: 'Content for Tab 1 goes here.',
    },
    {
        title: 'Tab 2',
        content: 'Content for Tab 2 goes here.',
    },
    {
        title: 'Tab 3',
        content: 'Content for Tab 3 goes here.',
    },
];


const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={classes.tabs}>
            <div className={classes.tabMenu}>
                {tabsData.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? classes.active : ''}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={classes.tabContent}>{tabsData[activeTab].content}</div>
        </div>
    );
};

export default Tabs;
