import React from 'react'

const Search = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-white-500 relative h-96 md:h-96 inset-y-6  left-0 w-full'>

        <div className='absolute font-bold font-mono text-sm md:text-2xl text-white
        h-24  left-0 top-10 w-1/3'>Lorem ipsum dolor
        sit amet,     consectetuer adipiscing.
        </div>
        <div className='absolute md:flex h-20 top-60 left-5 w-2/4'>
        <form class="order-first sm-10 ml-10 lg:lg-9 " action="">
                <input className="md-flex-auto absolute md:top-0 left-7 h-1/5 md:h-1/3 w-2/4 py-1 pl-2 pr-5 rounded focus:outline-0" type="text" placeholder="Search "
                    name="search"></input>
                <button className="absolute -top-2 md:-top-1 left-7 -ml-6 sm-6 border-3 bg-white-500" type="submit"><i style={{color: "white"}} className='relative md:flex top-2 left-0'><ion-icon name="search"></ion-icon></i></button>
            </form>
        </div>

        <div className='absolute md:flex-auto h-20 top-60 right-0 w-2/4'>
        <form class="order-first sm-10 ml-10 lg:lg-9 " action="">
                <input className="md-flex absolute top-0 left-7 h-1/5 md:h-1/3 w-2/4 py-1 pl-2 pr-5 rounded focus:outline-0" type="text" placeholder="Search "
                    name="search"></input>
                <button className="absolute -top-2 md:-top-1 left-7 -ml-6 sm-6 border-3 bg-white-500" type="submit"><i style={{color: "white"}} className='relative md:flex top-2 left-0'><ion-icon name="location"></ion-icon></i></button>
            </form>
        </div>
      <div className='absolute shadow-md text-white md-flex-auto bg-blue-600 rounded-full py-0 px-2 h-7 item-center top-80 right-60 w-1/10 md:top-60 md:right-0 '>
        <form>
          <button><p className='text-xs md:text-lg'>Lorem Ipsum</p></button>
        </form>
      </div>
    </div>
        

  )
}

export default Search