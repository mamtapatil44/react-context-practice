import React, { useState } from 'react'

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)
    const handleActiveTab = (id) => {
        setActiveTab(id)
    }
    return (
        <div>
            <div className='flex' >

                {tabs.map((tab, index) =>
                    <button key={index} className='p-1 m-2 bg-gray-300 text-black' onClick={() => { handleActiveTab(tab.id) }}>{tab?.label}</button>
                )}
            </div>

            {/* tab content */}
            <div className='w-2xl border-1 h-96' >

                {tabs.map(({ id, Component }) =>
                    activeTab === id && <Component key={id} />
                )}

            </div>
        </div>
    )
}

export default Tab