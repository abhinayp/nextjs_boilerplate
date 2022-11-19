import { CONFIG, ENV } from '@config'
import React from 'react'

const HomePage = () => {
  const { host } = CONFIG

  return (
    <div className='py-10 grid lg:grid-cols-2 gap-10'>
      <div className='flex items-center'>
        <div>
          <div className='font-fancy text-primary'>Welcome</div>
          <div className='text-5xl mt-5 text-stone-500 font-medium'>NextJS Application.</div>
          <div className='text-3xl mt-5 text-stone-700 font-medium'>
            This is a boiler plate template
          </div>
          <div className='mt-8 text-stone-400 font-light'>
            <p>
              Update the code and re-use as per your requirements
            </p>
            <div className="mt-8">
              <div>
                <small>Environment: {ENV}</small>
              </div>
              <div>
                <small>Host Config: {host}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HomePage
