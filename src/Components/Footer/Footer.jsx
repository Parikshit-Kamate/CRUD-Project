import React from 'react'

const Footer = () => {
  return (
    <div className='bg-info m-0 p-0'>
      <div className='fs-1 fw-bold pt-5 pb-3'>
        
      </div>
      <div className='row m-0'>
        <div className='mt-3 col-5 text-center p-0'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61235.89845547072!2d74.33738531161637!3d16.412447335136527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f217963ddd11%3A0x139833349ea891b!2sNipani%2C%20Karnataka%20591237!5e0!3m2!1sen!2sin!4v1734756577785!5m2!1sen!2sin" width="500" height="300" style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-7 text-center ps-3 mt-3'>
          <div className='fs-3 fw-bold'>We Are</div>
          <div className='fs-1 fw-bold'>Available Here</div>
          <div className='fs-4 fw-bold'>
            <div className='text-start d-flex'>
              <div className='me-3'>
                <i className='bi bi-pin-map'></i>
              </div>
              <div className='fs-3 fw-bold'>
                Nipani , Karnataka 591237
              </div>
            </div>
            <div className='text-start'>
              <span className='me-3'>
                <i className="bi bi-telephone-outbound"></i>
              </span>
              +91 911-065-6272
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
