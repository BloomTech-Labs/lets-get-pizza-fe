// Creating Lottie Animation component
import React from 'react'
import animationData from '../../../media/pizzaLoader.json'
import Lottie from 'react-lottie';

export const LoadingLottie = ({height, width}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return(
          <div>
              <Lottie 
                options={defaultOptions}
                height={height || 500}
                width={width || 500}
              />
          </div>
      )
}