import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";
// import { toAbsoluteUrl } from "_metronic/helpers";
import qrCode from '../../assets/icons/qrcode.svg'
import UploadImg from '../../assets/icons/loadImagePic.svg'
import UploadImgText from '../../assets/icons/imgUploadTest.svg'

const ReportAssetPage = () => {
  return (
    <>
      <div className='bg-white' >
        <ReportHeader reportDetail={""} onBack={""} section="Report Section 1" hideBack />
      </div>
      <div className="bg-white border-bottom pb-10">
        <div className='pt-10 pb-5 bg-light'>
          <div className='text-center ps-16'>
            <p className='competancy underline'>Report Section 5</p>
            <h2 className='fire_damper pb-4' style={{ lineHeight: '8px' }} >Building Assets</h2>
          </div>
        </div>
        <div className="bg-white h-40px"></div>
        <div className='w-100 bg-white border-bottom pb-10'>
          <div className='bg-light px-10 pt-8 pb-2 border-bottom'>
            <div className='d-flex justify-content-between '>
              <div>
                <div className='d-flex align-items-center'>
                  <div className='referance_heading'>Building Reference No.</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>B128</div>
                </div>
                <div className='d-flex align-items-center pt-5'>
                  <div className='referance_heading'>Asset No.</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>AD210256</div>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <img src={qrCode} className='qr_img' alt="qr_code" />
                <p className='summery'>QR Code</p>
              </div>
            </div>
          </div>
          <div className='pt-8 px-10'>
            <div className='row'>
              <div className="col-lg-6">
                <div className='d-flex align-items-center'>
                  <div className='referance_heading'>Building Reference No.</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>B128</div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={UploadImg} style={{ width: '225px' }} alt="img" />
                <img src={UploadImg} style={{ width: '225px' }} className='ms-5' alt="img" />
              </div>
            </div>
          </div>
          <div className=' mt-7 px-10 bg-light border-top border-bottom'>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className='referance_heading'>Accessibility</div>
                <span className='px-3'>:</span>
                <div className='px-10'></div>
              </div>
              <div>
                <div className='unst_green'>Satisfactory</div>
              </div>
            </div>
          </div>
          <div className='pt-8 px-10'>
            <div className="row">
              <div className='col-lg-6' >
                <div className=" postion-relative">
                  <div className='d-flex align-items-center'>
                    <div className='referance_heading'>Building Reference No.</div>
                    <span className='px-3'>:</span>
                    <div className='px-10'>Text here</div>
                  </div>
                  <div className='d-flex align-items-center position-absolute h-350px  '>
                    <div className='referance_heading'></div>
                    <span className='px-3'></span>
                    <div className='unst_green ms-10'>Satisfactory</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={UploadImg} style={{ width: '225px' }} alt="img" />
                <img src={UploadImg} style={{ width: '225px' }} className='ms-5' alt="img" />
              </div>
            </div>
          </div>
          <div className=' mt-7 px-10 pb-1 bg-light border-top border-bottom'>
            <div className='d-flex justify-content-between'>
              <div className='pt-6 '>
                <div className='d-flex align-items-center'>
                  <div className='referance_heading'>Installation</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>Text here</div>
                </div>
                <div className='d-flex align-items-center pt-5'>
                  <div className='referance_heading'>Orientation</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>Text here</div>
                </div>
              </div>
              <div>
                <div className='unst_yellow mt-10'>Satisfactory</div>
              </div>
            </div>
          </div>
          <div className='pt-8 px-10'>
            <div className="row">
              <div className="col-lg-6">
                <div className='d-flex align-items-center'>
                  <div className='referance_heading'>Duct Type</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>B128</div>
                </div>
                <div className='d-flex align-items-center pt-6'>
                  <div className='referance_heading'>Duct Size</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>B128</div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className='d-flex align-items-center'>
                  <div className='referance_heading'>Duct Shape</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>B128</div>
                </div>
                <div className='d-flex align-items-center pt-6'>
                  <div className='referance_heading'>Damper Classification</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>B128</div>
                </div>
              </div>
            </div>

          </div>
          <div className=' mt-8 px-10 pt-2 pb-8 bg-light border-top border-bottom'>
            <div className='row'>
              <div className="col-lg-6">
                <div className='pt-6 w-75'>
                  <div className='d-flex align-items-center'>
                    <div className='referance_heading'>Access Panel</div>
                    <span className='px-3'>:</span>
                    <div className='px-10'>Text here</div>
                  </div>
                  <div className='d-flex align-items-center pt-5'>
                    <div className='referance_heading'>Access panel shape</div>
                    <span className='px-3'>:</span>
                    <div className='px-10'>Text here</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className='d-flex align-items-center pt-5'>
                  <div className='referance_heading'>Access Panel Size</div>
                  <span className='ps-10'>:</span>
                  <div className='px-10'>Text here</div>
                </div>
                <div className="pt-6 d-flex ">
                  <div className='d-flex '>
                    <div className='referance_heading'>Access panel both sides</div>
                    <span className='ps-10'>:</span>
                    <div className='px-10'>Text here</div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <div className='unst_red '>Unsatisfactory</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-8 px-10'>
            <h2 className='summery'>Drop Test</h2>
            <div className='d-flex pt-4 justify-content-between'>
              <div>
                <p className='national_ass'>As found</p>
                <img src={UploadImgText} style={{ width: '310px' }} alt="" />
                <p className='national_ass text-center pt-2'>Time & Date stamp</p>
              </div>
              <div className=''>
                <p className='national_ass'>Drop test</p>
                <img src={UploadImgText} style={{ width: '310px' }} alt="" />
                <p className='national_ass text-center pt-2'>Time & Date stamp</p>
              </div>
              <div>
                <p className='national_ass'>Reset</p>
                <img src={UploadImgText} style={{ width: '310px' }} alt="" />
                <p className='national_ass text-center pt-2'>Time & Date stamp</p>
              </div>
            </div>
            <div className='d-flex mt-7 '>
              <div className='pt-6 w-75'>
                <div className='d-flex align-items-center'>
                  <div className='referance_heading'>Hygiene</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>Text here</div>
                </div>
                <div className='d-flex align-items-center pt-5'>
                  <div className='referance_heading'>Technician</div>
                  <span className='px-3'>:</span>
                  <div className='px-10'>Text here</div>
                </div>
              </div>
              <div className='pt-6 w-75'>
                <div className="d-flex">
                  <div>
                    <div className='d-flex align-items-center'>
                      <div className='duct'>Cleaned</div>
                      <span className='px-3'>:</span>
                      <div className='ps-20'>Text here</div>
                    </div>
                    <div className='d-flex align-items-center pt-3 ps-5'>
                      <div className='d-flex justify-content-end me-4'>
                        <div className='view_defect_green mt-4'>Satisfactory</div>
                      </div>
                      <div className='d-flex justify-content-end me-4 ps-5 '>
                        <div className='view_defect_red mt-4'>Unsatisfactory</div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <img src={UploadImg} alt="" className='test_logo rounded' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div>
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </>
  )
}

export default ReportAssetPage;