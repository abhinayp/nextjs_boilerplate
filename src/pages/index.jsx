import React from 'react'
import Layout from '../components/layouts/Layout';

const HomePage = () => {

  return (
    <Layout>
      <div className='py-10 grid lg:grid-cols-2 gap-10'>
        <div className='flex items-center'>
          <div>
            <div className='font-fancy text-primary'>Welcome</div>
            <div className='text-5xl mt-5 text-stone-500 font-medium'>NextJS Application.</div>
            <div className='text-3xl mt-5 text-stone-700 font-medium'>
              This is a boiler plate template
            </div>
            <div className='mt-8 text-stone-400 font-light'>
              Update the code and re-use as per your requirements
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default HomePage
