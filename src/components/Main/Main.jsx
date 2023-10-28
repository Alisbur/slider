import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Main.css"

export function Main () {

  const [currentSlide1, setCurrentSlide1] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)
  const [currentSlide3, setCurrentSlide3] = useState(0)
  const [currentSlide4, setCurrentSlide4] = useState(0)

  const [loaded1, setLoaded1] = useState(false)
  const [loaded2, setLoaded2] = useState(false)
  const [loaded3, setLoaded3] = useState(false)
  const [loaded4, setLoaded4] = useState(false)

  const [sliderRef1, instanceRef1] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide1(slider.track.details.rel)
    },
    created() {
      setLoaded1(true)
    },
  })

  const [sliderRef2, instanceRef2] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide2(slider.track.details.rel)
    },
    created() {
      setLoaded2(true)
    },
  })

  const [sliderRef3, instanceRef3] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide3(slider.track.details.rel)
    },
    created() {
      setLoaded3(true)
    },
  })

  const [sliderRef4, instanceRef4] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide4(slider.track.details.rel)
    },
    created() {
      setLoaded4(true)
    },
  })

  function Arrow(props) {
    const disabeled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${disabeled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <main className="main">
      <div className="main__content">
        <div className="ar">
          <div ref={sliderRef1} className="keen-slider f2">
            <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1001 р</span></div>
            <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1001 р</span></div>
            <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1001 р</span></div>
            <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1001 р</span></div>
            <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1001 р</span></div>
            <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1001 р</span></div>
          </div>
          <div className="g1">
            {loaded1 && loaded2 && loaded3 && loaded4 && instanceRef1.current && instanceRef2.current && instanceRef3.current && instanceRef4.current && (
              <>
                <Arrow
                  left
                  onClick={(e) => {
                    console.log(instanceRef1.current.prev());
                    console.log(currentSlide1);
                    return e.stopPropagation() || instanceRef1.current?.prev() || instanceRef2.current?.prev() || instanceRef3.current?.prev() || instanceRef4.current?.prev()
                    }
                  }
                  disabled={currentSlide1 === 0 || currentSlide2 === 0 || currentSlide3 === 0 || currentSlide4 === 0}
                />
              
                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef1.current?.next() || instanceRef2.current?.next() || instanceRef3.current?.next() || instanceRef4.current?.next()
                  }
                  disabled={
                    currentSlide1 === instanceRef1.current.track.details.slides.length - 1 || 
                    currentSlide2 === instanceRef2.current.track.details.slides.length - 1 ||
                    currentSlide3 === instanceRef3.current.track.details.slides.length - 1 ||
                    currentSlide4 === instanceRef4.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
        </div>
        <div ref={sliderRef2} className="keen-slider ar">
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1002 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1002 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1002 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1002 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1002 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1002 р</span></div>
        </div>
        <div ref={sliderRef3} className="keen-slider ar">
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1003 р</span></div>
        </div>
        <div ref={sliderRef4} className="keen-slider ar">
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1004 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1004 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1004 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1004 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1004 р</span></div>
          <div className="keen-slider__slide"><img src="https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg" alt="pic" className="pic" /><span className="span">1004 р</span></div>
        </div>
      </div>
    </main>
  )
}