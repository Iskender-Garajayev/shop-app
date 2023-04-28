import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'

const Contacts = () => {
  return (
    <div>
      <Header/>
        <div className="contacts-container">

          <div className="call-write">
            <div className="call">
              <p>call to us</p>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>

            <div className="write">
              <p>Write To US</p>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          <div className="send-email">
            
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contacts