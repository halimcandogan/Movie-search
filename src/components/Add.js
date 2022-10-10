import React, { useState } from 'react'

const Add = () => {
  const [Searchvalue, setSearchvalue] = useState("");
   function onChange(e) {
    setSearchvalue(e.target.value);
  }
  return (
    <div className='flex max-w-6xl mx-auto'>
        <div className='flex  items-center'>
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg" />
          <div className='absolute text-white font-bold pl-10 pr-10 '>
           <h1 className='text-5xl'>Hoş Geldiniz.</h1>
           <h2 className='text-3xl mt-3'>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
           <input type="text" 
           onChange={onChange}
           placeholder='Film, dizi ara...' 
           className='bg-white outline-none text-black p-2 px-5 mt-3 rounded-full font-normal block' /> 
          </div>
          
        </div>
    </div>
  )
}

export default Add
