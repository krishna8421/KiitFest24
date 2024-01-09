import Link from 'next/link'
import React from 'react'

const DashboardSidebarItem = ({ title, alertNo, link }) => {
  return (
    <Link href={link}>
        <div className='flex justify-between text-lg group'>
            <h1 className=' uppercase group-hover:translate-x-4 transition-transform duration-300'>{ title }</h1>
            {alertNo && (
                <div className='gradient-button bg-gradient-to-b from-[#1741CC] to-[#16BCDC] hover:from-[#16BCDC] hover:to-[#1741CC] w-7 h-7 rounded-full justify-center items-center flex'>
                    <span>{alertNo}</span>
                </div>
            )}
        </div>
    </Link>
  )
}

export default DashboardSidebarItem