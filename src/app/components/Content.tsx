import UploadImg from '../../assets/icons/loadImagePic.svg'
const  Content = () => {
    return (
      <>
        <div className='p-0' >
          <div className='w-100 px-10 bg-white '>
            <div className='d-flex pt-10 pb-5 justify-content-between'>
              <div className=''>
                <p style={{ lineHeight: '8px' }} className='national_ass'>Head Office & Works: -</p>
                <p style={{ lineHeight: '8px' }} className='national_ass'>J-Tek Installations UK Ltd Unit 10</p>
                <p style={{ lineHeight: '8px' }} className='national_ass'>The Courtyard, Holmbush Farm, Crawley Rd, Faygate RH12 4SE</p>
                <p style={{ lineHeight: '8px' }} className='national_ass'>t: 01293 852218</p>
                <p style={{ lineHeight: '8px' }} className='national_ass'>e: info@jtekuk.com | w: www.jtekuk.com</p>
              </div>
              <div>
                <div className='d-flex align-items-center flex-column'>
                  <img src={UploadImg} style={{ width: '74px', height: '74px' }} alt="" />
                  <p className='pt-2'>Company Logo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-12 pb-3'>
          <div className='text-center'>
            <h2 className='fire_damper'>Fire Damper Testing Report</h2>
            <p className='competancy'>CERTIFICATE OF INSPECTION AND TESTING IN ACCORDANCE WITH BS 9999</p>
          </div>
        </div>
      </>
    )
  
  
  }

  export default Content