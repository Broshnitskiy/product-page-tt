import Slider from "react-slick";
import img1 from "assets/images/1.webp";
import img2 from "assets/images/2.webp";
import img3 from "assets/images/3.webp";

const productImages = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const CustomSlider: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Slider
        {...settings}
        className="w-full h-96 bg-[url('/src/assets/images/bg-2.jpg')] bg-contain bg-no-repeat bg-center rounded-lg"
      >
        {productImages.map(({ id, img }) => (
          <div
            key={id}
            className="flex justify-center items-center w-full h-96 bg-cover bg-center"
          >
            <img
              src={img}
              alt={`Product ${id + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
