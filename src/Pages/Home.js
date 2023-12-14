import React from 'react'
import '../Style/Home.css'
import LogoSlider from '../Components/CompanySlider'
import Hoodie from '../Images/hoodie.svg'
import ImageGrid from '../Components/Gallery'
import SimpleProdCard from '../Components/SimpleProdCard'
import ProductSlider from '../Components/ProductSlider'

const Home = () => {


  return (
    <div className="overflow-hidden">
      <div className='Hero'>
        <h1 className='text-5xl font-bold	text-white'>ECOM REACT</h1>

        <p className='text-2xl font-semibold text-white'>lorem ipsum</p>
        <button
          className=" relative p-2 h-12 mt-2 bg-white text-blue-600 font-bold rounded-md text-xl font-bold cursor-pointer relative z-10 hover:bg-blue-600 hover:text-white "
          style={{ width: 150 }}>
          Shop Now

        </button>
      </div>
      <div className='logo-slider p-2 mt-5 mb-5'>

        <div className=" mb-8 flex items-center py-4">

          <div className="flex-grow h-px bg-gray-400"></div>

          <span className="flex-shrink text-2xl text-gray-500 px-4  font-light">Our Product Range</span>

          <div className="flex-grow h-px bg-gray-400"></div>

        </div>

        <LogoSlider />

      </div>
      {/* <div className='shopbycategory p-2 ml-5 mt-10 mb-10'>
        <h1 className='mb-5 text-2xl font-light text-gray-500'>
          <span className='text-blue-600 m-2'>Shop</span> by Category
        </h1>
        <div className='flex flex-col lg:flex-row'>
          <div className='group transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-1 lg:w-1/5 h-26 m-2 border-2 border-blue-600 rounded-2xl p-4 flex flex-col items-center hover:bg-blue-500'>
            <img src={Hoodie} alt="Hoodie" width={50} height={50} />
            <h1 className='mt-2 text-xl text-blue-600 font-semibold group-hover:text-white'>Hoodies</h1>
          </div>
          <div className='group transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-1 lg:w-1/5 h-26 m-2 border-2 border-blue-600 rounded-2xl p-4 flex flex-col items-center hover:bg-blue-500'>
            <img src={Hoodie} alt="Hoodie" width={50} height={50} />
            <h1 className='mt-2 text-xl text-blue-600 font-semibold group-hover:text-white'>Jackets</h1>
          </div>
          <div className='group transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-1 lg:w-1/5 h-26 m-2 border-2 border-blue-600 rounded-2xl p-4 flex flex-col items-center hover:bg-blue-500'>
            <img src={Hoodie} alt="Hoodie" width={50} height={50} />
            <h1 className='mt-2 text-xl text-blue-600 font-semibold group-hover:text-white'>Shirts</h1>
          </div>
          <div className='group transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-1 lg:w-1/5 h-26 m-2 border-2 border-blue-600 rounded-2xl p-4 flex flex-col items-center hover:bg-blue-500'>
            <img src={Hoodie} alt="Hoodie" width={50} height={50} />
            <h1 className='mt-2 text-xl text-blue-600 font-semibold group-hover:text-white'>Shoes</h1>
          </div>
          <div className='group transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-1 lg:w-1/5 h-26 m-2 border-2 border-blue-600 rounded-2xl p-4 flex flex-col items-center hover:bg-blue-500'>
            <img src={Hoodie} alt="Hoodie" width={50} height={50} />
            <h1 className='mt-2 text-xl text-blue-600 font-semibold group-hover:text-white'>Accessories</h1>
          </div>
        </div>
      </div> */}

      <div className='collection text-center p-2 ml-5 mt-10 mb-10'>
        <h1 className='mb-10 text-3xl font-light text-gray-500'>
          <span className='text-blue-600 m-2'>Glance</span>at our collections
        </h1>
        <ImageGrid />
      </div>

      <div className='latestproducts text-center p-2 ml-5 mt-10 mb-10'>
        <h1 className='mb-6 text-3xl font-light text-gray-500'>
          Shop our latest<span className='text-blue-600 m-2'>Products</span>
        </h1>
        <div className=''>
          <ProductSlider/>
        </div>

      </div>
      <div className='joinfashion' >
      <h1 className='mb-6 text-5xl  text-gray-300'>
          <span className='text-blue-600 m-2'>Fashion</span>with us
        </h1>
      </div>
      
    </div>
  )
}

export default Home