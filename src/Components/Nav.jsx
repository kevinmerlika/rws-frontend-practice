import React, { useState } from 'react'

const Nav = () => {
    let Links =[
        {name:"Consectetuer", link:"/"},
    ];

    let More =[
        {name:"Anmelden", link:"/"},
    ];

    let [open,setOpen] = useState(false)

    


  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-[1]'>
        <div className='md:flex bg-white py-2 md:px-10 px-7 items-center justify-between'>
            <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins]
            text-black-800'>
                <span className='text-3x1 text-blue-500 mr-1 pt-2'>
                <ion-icon name="accessibility-outline"></ion-icon>
                Logo
                </span>
            <div onClick={()=>setOpen(!open)}
            className='text-3x1 absolute right-4 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
        </div>
        <ul className={`bg-white md:flex md:items-center md:pb-0 pb-12 
        absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9
        transition-all duration-600 ease-in ${open ? 'top-10 opacity-100':'top-[-390px]'} 
        md:opacity-100 opacity-100 duration-300`}>
            {
                Links.map((link)=> 
                <li key={link.name} className='md:ml-8 
                text-x1 text-blue-500 md:my-0 my-7
                font-bold'>
                    <ion-icon name="chevron-down-circle"></ion-icon>
                    <button><a href={link.link}>{link.name}</a>
                    </button>
                </li>
                )  
            }

            {
                More.map((more)=>
                <li key={more.name} className="md:ml-8 text-x1 border-2 rounded
                 border-blue-500 drop-shadow-lg px-2 py-2">
                    <a href={more.link}>{more.name}</a>
                </li>
                )
            }
            
        </ul>
    </div>
    </div>
  )
}

export default Nav