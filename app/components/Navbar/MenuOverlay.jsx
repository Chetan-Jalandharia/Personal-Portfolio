
import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {
            links.map((val,index)=>(
              <li key={index}>
                <NavLink href={val.path} title={val.title} />
              </li>
            ))
        }
    </ul>
  )
}

export default MenuOverlay