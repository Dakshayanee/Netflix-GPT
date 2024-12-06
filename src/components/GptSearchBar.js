import React from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  //to change the language fetch it from store
  const langKey=useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' 
            className='p-2 m-4  col-span-9'
            //there is no langkey in lang therefor it will throw error,put it in a bracket
             placeholder={lang[langKey].gptSearchPlaceholder}
             />
            <button className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white '>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar