import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer1 from '../components/footer1'
import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-container">
      <Helmet>
        <title>Contact1 - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Contact1 - Spotless Hungry Crocodile"
        />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="contact1-text10 thq-body-small thq-link">
              Home
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact1-text11 thq-body-small thq-link">
              Blog
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text12 thq-body-small thq-link">
              Herbal Products
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text13 thq-body-small thq-link">
              About Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact1-text14 thq-body-small thq-link">
              Contact Us
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact1-text15">Action 1</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact1-text16">Action 2</span>
          </Fragment>
        }
      ></Navbar4>
      <ContactForm3
        action={
          <Fragment>
            <span className="contact1-text17 thq-body-small">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text18 thq-body-small">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text21 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text22 thq-heading-2">Contact us</span>
          </Fragment>
        }
      ></ContactForm3>
      <Contact14
        link1={
          <Fragment>
            <span className="contact1-text23 thq-body-small">
              Start new chat
            </span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="contact1-text24 thq-body-small">
              info@herbalremedies.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact1-text25 thq-body-small">
              +123-456-7890
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact1-text26 thq-body-small">
              123 Herbal Way, Natural Healing Street, Herbville, HBL 456
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text27 thq-body-large">
              Feel free to reach out to us for any inquiries or feedback.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text28 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact1-text29 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="contact1-text30 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text31 thq-heading-3">Contact Us</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="contact1-text32 thq-heading-3">Live Chat</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="contact1-text33 thq-heading-3">Phone</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="contact1-text34 thq-heading-3">Office</span>
          </Fragment>
        }
      ></Contact14>
      <Contact7
        content1={
          <Fragment>
            <span className="contact1-text35 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text36 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="contact1-text37 thq-heading-3">Email</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="contact1-text38 thq-heading-3">Phone</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="contact1-text39 thq-body-large">
              Drop us an email at info@herbalhealing.com for any inquiries or
              support.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="contact1-text40 thq-body-large">
              Call us at +1-800-123-4567 during our business hours for immediate
              assistance.
            </span>
          </Fragment>
        }
      ></Contact7>
      <Footer1
        link1={
          <Fragment>
            <span className="contact1-text41 thq-body-small">Blog</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact1-text42 thq-body-small">
              Herbal Products
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text43 thq-body-small">
              Traditional Practices
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text44 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact1-text45 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="contact1-text46 thq-body-small">
              Privacy Policy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="contact1-text47 thq-body-small">
              Cookies Policy
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="contact1-text48 thq-body-small">
              Consultation Disclaimer
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="contact1-text49 thq-body-small">
              Medical Disclaimer
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="contact1-text50 thq-body-small">
              Accessibility Statement
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact1-text51 thq-body-small">Subscribe</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text52 thq-body-small">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact1-text53 thq-body-small">
              © 2024 TeleportHQ
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact1-text54 thq-body-small">
              /terms-of-use
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact1-text55 thq-body-small">
              /cookies-policy
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact1-text56 thq-body-small">
              /privacy-policy
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="contact1-text57 thq-body-large">Explore</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="contact1-text58 thq-body-large">Legal</span>
          </Fragment>
        }
        socialLinkTitleCategory={
          <Fragment>
            <span className="contact1-text59 thq-body-large">
              Connect with Us
            </span>
          </Fragment>
        }
      ></Footer1>
    </div>
  )
}

export default Contact1
