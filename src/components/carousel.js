import React from 'react';

import { Carousel } from 'antd';
import imgURL1 from '..//images/img01.jpg';
import imgURL2 from '..//images/img02.jpg';
import imgURL3 from '..//images/img03.jpg';
import imgURL4 from '..//images/img04.jpg';


class myCarousel extends React.Component {

    render() {
        return (
            <div className="carousel-wrap">
                <Carousel autoplay>
                    <div><img src={imgURL1} /></div>
                    <div><img src={imgURL2} /></div>
                    <div><img src={imgURL3} /></div>
                    <div><img src={imgURL4} /></div>
                </Carousel>
            </div>
        )
    }

}

export default myCarousel;
