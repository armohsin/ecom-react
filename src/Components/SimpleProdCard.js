import React from 'react'

const SimpleProdCard = () => {
  return (
    <div className="productImage w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="productBrand text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="productname text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="discountedprice text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="actualprive text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            
          </div>
        </div>
      </a>
    </div>
  )
}

export default SimpleProdCard