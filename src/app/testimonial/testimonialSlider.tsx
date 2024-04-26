import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ClientReviews from '@/app/clinetReviews/page';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const TestimonialSlider = () => {
    return <>
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"  >
            <ClientReviews image="/images/c1.jpg" name="Sajal" role="web developer" />
            <ClientReviews image="/images/c2.jpg" name="Taluker" role="React developer" />
            <ClientReviews image="/images/c1.jpg" name="Robert" role="Next JS developer" />
            <ClientReviews image="/images/c2.jpg" name="jonson" role="Mern Stack JS developer" />


        </Carousel>;

    </>
}

export default TestimonialSlider