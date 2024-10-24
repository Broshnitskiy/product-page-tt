import { useState } from "react";

import CustomSelect from "components/CustomSelect";
import CustomSlider from "components/CustomSlider";
import { ProductColors, ProductSizes } from "enums";
import { colorOptions, sizeOptions } from "data-options";
import toast from "react-hot-toast";
import { Button, Heading, Text } from "@radix-ui/themes";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<string>(ProductSizes.M);
  const [selectedColor, setSelectedColor] = useState<string>(
    ProductColors.Black
  );

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <CustomSlider />

      {/* Product Details */}
      <div className="flex flex-col justify-between gap-6">
        <Heading
          as="h1"
          size={"8"}
          className="text-4xl font-bold text-gray-800 font-sans"
        >
          Modern Stylish Chair
        </Heading>

        <Text as="p" className="text-lg text-gray-600 font-sans">
          This stylish chair is perfect for any modern home. Comfortable and
          elegant, it fits perfectly into any living room or office.
        </Text>
        <Text as="span" className="text-2xl font-bold text-black font-sans">
          $199.99
        </Text>

        <div className="flex gap-6">
          {/* Size Selector */}
          <CustomSelect
            label="Select Size"
            value={selectedSize}
            options={sizeOptions}
            onValueChange={setSelectedSize}
          />

          {/* Color Selector */}
          <CustomSelect
            label="Select Color"
            value={selectedColor}
            options={colorOptions}
            onValueChange={setSelectedColor}
          />
        </div>

        <Button
          onClick={() => {
            toast.success("Successfully added!");
          }}
          size="3"
          style={{ cursor: "pointer" }}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
