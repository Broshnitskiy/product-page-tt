import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import Slider from "react-slick";

const productImages = ["", "", ""];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

enum productSizes {
  S = "S",
  M = "M",
  L = "L",
}

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<string>(productSizes.M);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Slider */}
      <div className="flex flex-col items-center">
        <Slider {...settings} className="w-full h-96 bg-gray-200 rounded-lg">
          {productImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="max-h-full max-w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between">
        <h1 className="text-4xl font-bold text-gray-800">
          Modern Stylish Chair
        </h1>
        <p className="text-lg text-gray-600">
          This stylish chair is perfect for any modern home. Comfortable and
          elegant, it fits perfectly into any living room or office.
        </p>
        <span className="text-2xl font-bold text-black">$199.99</span>

        {/* Size Selector */}
        <div>
          <label
            htmlFor="size-select"
            className="block mb-2 font-medium text-gray-700"
          >
            Select Size:
          </label>
          <Select.Root onValueChange={setSelectedSize} value={selectedSize}>
            <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none">
              Size: {selectedSize}
            </Select.Trigger>
            <Select.Content>
              <Select.Item
                value={productSizes.S}
                className="px-4 py-2 bg-slate-500 hover:bg-gray-200"
              >
                S
              </Select.Item>
              <Select.Item
                value={productSizes.M}
                className="px-4 py-2 bg-slate-500 hover:bg-gray-200"
              >
                M
              </Select.Item>
              <Select.Item
                value={productSizes.L}
                className="px-4 py-2 bg-slate-500 hover:bg-gray-200"
              >
                L
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
