import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact7-text16 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact7-text18 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact7-text19 thq-heading-3">Email</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact7-text21 thq-body-large">
                    Drop us an email at info@herbalhealing.com for any inquiries
                    or support.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact7-text17 thq-heading-3">Phone</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact7-text20 thq-body-large">
                    Call us at +1-800-123-4567 during our business hours for
                    immediate assistance.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  heading1: undefined,
  location2: undefined,
  content1: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1499604762713-81ebb3ef7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NjAwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1610120277794-0df101dd8cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NjAwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  location2Description: undefined,
  location1ImgAlt: 'Email Icon',
  location1Description: undefined,
  location2ImgAlt: 'Phone Icon',
}

Contact7.propTypes = {
  heading1: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location1: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location1ImgAlt: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImgAlt: PropTypes.string,
}

export default Contact7
