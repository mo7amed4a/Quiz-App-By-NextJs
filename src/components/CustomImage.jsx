
import Image from 'next/image';
import React from 'react';

function CustomImage({alt, ...props}) {
    const [src, setSrc] = React.useState(props.src);
    const [s, setM] = React.useState(props.src);
  
    return (
      <Image
        {...props}
        src={src}
        alt={alt} // To fix lint warning 
        onError={() => setSrc('/img/notImg.jpg') + setM(true)}
        placeholder="blur"
        blurDataURL='/img/notImg.jpg'
      />
    );
  }

  export default CustomImage