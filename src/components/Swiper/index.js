import React, { Component } from 'react';
import ReactSwiper from 'react-id-swiper';
import './swiper.scss';
import './style.scss';

class Swiper extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    };
    return (
      <div className="react-id-swiper">
        <ReactSwiper {...params}>
          <div style={{height:'270px',background:'#f5f5f5'}}>Slide 1</div>
          <div style={{height:'270px',background:'#f5f5f5'}}>Slide 2</div>
          <div style={{height:'270px',background:'#f5f5f5'}}>Slide 3</div>
          <div style={{height:'270px',background:'#f5f5f5'}}>Slide 4</div>
          <div style={{height:'270px',background:'#f5f5f5'}}>Slide 5</div>
        </ReactSwiper>
      </div>
    )
  }
}

export default Swiper;