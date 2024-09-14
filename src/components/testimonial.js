import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Name: 'Emily Brown',
  review3:
    'I incorporate the herbal remedies mentioned on this blog into my diet plans for clients, and the feedback has been overwhelmingly positive. Thank you for sharing such valuable information!',
  author4Position: 'Nutritionist',
  author4Name: 'David Wilson',
  author2Alt: 'Image of Michael Smith',
  author2Name: 'Michael Smith',
  author2Src:
    'https://images.unsplash.com/photo-1484191025110-4043236d4cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NDQ5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of Sarah Johnson',
  author2Position: 'Fitness Trainer',
  review1:
    'The herbal remedies shared on this website have truly made a difference in my daily routine. I feel more energized and focused throughout the day.',
  heading1: 'Testimonials',
  author4Alt: 'Image of David Wilson',
  author1Name: 'Sarah Johnson',
  author4Src:
    'https://images.unsplash.com/photo-1706885093487-7eda37b48a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NDQ5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1528037082551-d5677eecf287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NDQ5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Holistic Healer',
  review2:
    'As a holistic healer, I am always looking for natural solutions for my clients. This blog has been a valuable resource for discovering new herbal remedies that work wonders.',
  author3Src:
    'https://images.unsplash.com/photo-1715163544945-dda1ff428076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NDQ5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Yoga Instructor',
  author3Alt: 'Image of Emily Brown',
  content1:
    'I have been using the herbal remedies recommended on this blog for a few months now, and I have seen a significant improvement in my overall well-being. I highly recommend trying them out!',
  review4:
    'I was skeptical about herbal remedies at first, but after trying the suggestions on this blog, I am a firm believer now. My digestion issues have improved significantly.',
}

Testimonial.propTypes = {
  author3Name: PropTypes.string,
  review3: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
  author3Position: PropTypes.string,
  review2: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  content1: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
