import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ src }) => (
  <>
    <LazyLoadImage
      alt= ""
      // height={image.height}
      src={src} // use normal <img> attributes as props
      // width={image.width} 
      effect='blur'
      />
  </>
);

export default MyImage;