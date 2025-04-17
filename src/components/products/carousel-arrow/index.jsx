/* eslint-disable react/prop-types */
import "./index.css";

const CarouselArrow = ({previousArrow, onClick}) => {
  return (
    <button onClick={onClick}>
      <img 
        className={`carousel-arrow ${previousArrow ? "mirror": ""} `} 
        src="https://img.icons8.com/ios/333333/300/circled-chevron-right--v1.png" 
      />
    </button>
  )
}

export default CarouselArrow;