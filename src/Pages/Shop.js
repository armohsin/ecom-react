import React, { useState } from 'react';
import '../Style/Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    // gender radio
    const [selectedSex, setSelectedSex] = useState(null);

    const handleSexChange = (value) => {
        setSelectedSex(value);
    };
    // Sizes radio
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (value) => {
        setSelectedSize(value);
    };
    //Price range
    const [priceRange, setPriceRange] = useState([50, 150]); // Initial price range

    const handlePriceRangeChange = (event) => {
        setPriceRange([parseInt(event.target.value), priceRange[1]]);
    };

    const handlePriceRangeChangeEnd = (event) => {
        setPriceRange([priceRange[0], parseInt(event.target.value)]);
    };
    // Sample data array (replace it with your actual data)
    const shopItems = [
        {
            id: 1,
            imageUrl: "https://www.net-a-porter.com/variants/images/38063312418732058/ou/w2000_q60.jpg",
            brand: "Balanciaga",
            name: "Click Me",
            discountedPrice: "$149",
            actualPrice: "$199",
            speacialMsg: "CLICK HERE"
        },
        {
            id: 2,
            imageUrl: "https://media.gq-magazine.co.uk/photos/5db97e8d96d5cc0008ed8aa7/16:9/w_1920,c_limit/20190711-Drake-01.jpg",
            brand: "Rolex",
            name: "Drake",
            discountedPrice: "$149",
            actualPrice: "$199",
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1580894529660-d55c66eefee7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            brand: "Nike",
            name: "Air Force",
            discountedPrice: "$149",
            actualPrice: "$199",
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1518695633227-0480a13f17e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            brand: "Adidas",
            name: "Hoodie",
            discountedPrice: "$149",
            actualPrice: "$199",
        },
       
        // Add more items as needed
    ];

    return (
        <section className="overflow-hidden">
            <div className='heroshop'>
                <h1 className='text-5xl font-bold text-blue-600'>Shop</h1>
            </div>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 p-4 md:p-8">
                <div className="rounded-xl bg-gray-100 p-8 mb-4">
                    <h1 className='text-xl text-blue-700 font-bold'>Filters</h1>
                    {/* GENDER */}

                    <div className="flex  ">
                        <h1 className='text-lg text-blue-600 mt-4 m-4'>Genders</h1>
                        <div className="flex items-center mr-4">
                            <input
                                type="radio"
                                id="male"
                                name="sex"
                                value="male"
                                checked={selectedSex === 'male'}
                                onChange={() => handleSexChange('male')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="female"
                                name="sex"
                                value="female"
                                checked={selectedSex === 'female'}
                                onChange={() => handleSexChange('female')}
                                className="form-radio h-5 w-5 text-pink-600"
                            />
                            <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
                        </div>
                    </div>
                    {/* SIZES */}
                    <div className="flex ">
                        <h1 className='text-lg text-blue-600 mt-4 m-4'>Sizes</h1>
                        <div className="flex items-center mr-4">
                            <input
                                type="radio"
                                id="size-s"
                                name="size"
                                value="S"
                                checked={selectedSize === 'S'}
                                onChange={() => handleSizeChange('S')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="size-s" className="ml-2 text-sm text-gray-700">S</label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input
                                type="radio"
                                id="size-m"
                                name="size"
                                value="M"
                                checked={selectedSize === 'M'}
                                onChange={() => handleSizeChange('M')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="size-m" className="ml-2 text-sm text-gray-700">M</label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input
                                type="radio"
                                id="size-l"
                                name="size"
                                value="L"
                                checked={selectedSize === 'L'}
                                onChange={() => handleSizeChange('L')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="size-l" className="ml-2 text-sm text-gray-700">L</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="size-xl"
                                name="size"
                                value="XL"
                                checked={selectedSize === 'XL'}
                                onChange={() => handleSizeChange('XL')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="size-xl" className="ml-2 text-sm text-gray-700">XL</label>
                        </div>
                    </div>
                    {/* Price range */}
                    <h1 className='text-lg text-blue-600 mt-4 m-4'>Price Range</h1>

                    <div className="flex ml-2 ">
                        <input
                            type="range"
                            id="price-range"
                            name="price-range"
                            min={0}
                            max={200} // Adjust the maximum value as needed
                            step={10} // Adjust the step value as needed
                            value={priceRange[0]}
                            onChange={handlePriceRangeChange}
                            onMouseUp={handlePriceRangeChangeEnd}
                            className="appearance-none w-64 h-5 rounded-full overflow-hidden bg-blue-200 outline-none focus:outline-none"
                        />
                        <span className="ml-2 text-sm text-gray-700">${priceRange[0]}</span>
                        <span className="mx-2 text-sm text-gray-700">-</span>
                        <span className="text-sm text-gray-700">${priceRange[1]}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-2 gap-4">
                    {shopItems.map((item) => (
                        <div key={item.id} className="mb-4">
                            <div className="productImage bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <a href="#">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="h-80 w-full object-cover rounded-t-xl"
                                    />
                                    <div className="px-4 py-3">
                                        <span className="productBrand text-gray-400 mr-3 uppercase text-xs">{item.brand}</span>
                                        <p className="productname text-lg font-bold text-black truncate block capitalize">{item.name}</p>

                                        <div className="flex items-center">
                                            <p className="discountedprice text-lg font-semibold text-black cursor-auto my-3">${item.discountedPrice}</p>
                                            <del>
                                                <p className="actualprive text-sm text-gray-600 cursor-auto ml-2">${item.actualPrice}</p>
                                            </del>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
