import React from 'react'
import Slider from 'react-slick/lib/slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductSlider = () => {

    const products = [
        {
            id: 1,
            imageUrl: "https://www.net-a-porter.com/variants/images/38063312418732058/ou/w2000_q60.jpg",
            brand: "Balanciaga",
            name: "Super Destroyed Cargo",
            discountedPrice: "$149",
            actualPrice: "$199",
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
       
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768, // Adjusted breakpoint to 768
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id}>
                        <div className="productImage w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href="#">
                                <img
                                    src={product.imageUrl}
                                    alt="Product"
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                />
                                <div className="px-4 py-3 w-72">
                                    <span className="productBrand text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                    <p className="productname text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                    <div className="flex items-center">
                                        <p className="discountedprice text-lg font-semibold text-black cursor-auto my-3">{product.discountedPrice}</p>
                                        <del>
                                            <p className="actualprive text-sm text-gray-600 cursor-auto ml-2">{product.actualPrice}</p>
                                        </del>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlider
