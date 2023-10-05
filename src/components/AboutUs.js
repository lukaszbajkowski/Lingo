import React, { useState, useEffect } from 'react';
import './styles_components/style_about_us.scss';
import AnimatedElement from './AnimatedElement';
import AnimatedElementLoading from './AnimatedElementOnce';
import Image1 from "./images/Notes-bro.svg";
import Image2 from "./images/Hand-coding-amico.svg"
import Image3 from "./images/Files-sent-rafiki.svg"
import {Col, Container, Row} from "react-bootstrap";


const ScrollingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentData = [
    {
      text: 'Our UX experts meticulously watch countless recordings of these sessions, observing every click, scroll, and interaction. Unlike data analysis that often leans towards abstract interpretation, our approach affords a direct window into user behavior, ensuring a more authentic perspective.',
      imageSrc: Image1,
    },
    {
      text: 'We believe that the often-underutilized method of observing real-time user interaction is a goldmine for uncovering improvement points. However, we understand that the demands of running a business often sideline this crucial activity. That\'s where InsightReel steps in, relieving clients from this task and ensuring a dedicated, consistent focus on user behavior analysis.',
      imageSrc: Image2,
    },
    {
      text: 'The extensive experience of our UX experts, coupled with our repetitive immersion in the process, empowers us to apply previous learnings and insights effectively. We take pride in converting this otherwise overwhelming task into an enriching experience that fuels product betterment.',
      imageSrc: Image3,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const currentContentIndex = contentData.findIndex(
        (_, index) => {
          const textElement = document.getElementById(`text-${index}`);
          if (!textElement) return false;
          const textElementTop = textElement.getBoundingClientRect().top;

          return textElementTop >= 0 && textElementTop <= window.innerHeight / 2;
        }
      );

      if (currentContentIndex !== -1) {
        setCurrentIndex(currentContentIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contentData]);

  return (
    <Container>
      <Row className="screen-over-900px-width">
        <Col>
          <div className='sticky-top-with-offset'>
            {contentData.map((item, index) => (
              <div
                key={index}
                style={{marginTop:400}}
                className={`image-item ${currentIndex === index ? 'visible' : ''}`}
              >
                <AnimatedElement className={`animated-img-about image-item-${index}`} speed="0.5">
                  <img src={item.imageSrc} alt={`Image ${index + 1}`} />
                </AnimatedElement>
              </div>
            ))}
          </div>
        </Col>
        <Col style={{margin: "300px 0px"}}>
          {contentData.map((item, index) => (
            <AnimatedElement className="animated-element" speed="0.5">
              <div
                  key={index}
                  id={`text-${index}`}
                  className={`text-item ${currentIndex === index ? 'visible' : ''}`}
              >
                {item.text}
              </div>
            </AnimatedElement>
          ))}
        </Col>
      </Row>
      <Row className="screen-under-900px-width">
        <Col>
          {contentData.map((item, index) => (
            <Row>
              <div
                key={index}
                className={`image-item`}
              >
                <AnimatedElementLoading className={`image-item-${index} image-item-animation`}>
                  <img src={item.imageSrc} alt={`Image ${index + 1}`} />
                </AnimatedElementLoading>
              </div>
              <AnimatedElement className="animated-element-under-900px" speed="0.3">
                <div
                    key={index}
                    id={`text-${index}`}
                    className={`text-item`}
                >
                  {item.text}
                </div>
              </AnimatedElement>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ScrollingSection;
