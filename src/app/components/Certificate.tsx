
// import { useLocation, useParams } from "react-router-dom";
import ReportFooter from "./ReportFooter";

const Certificate = () => {

  interface RouteParams {
    id: string;
  }

  // const location = useLocation().pathname
  // const { id } = useParams<RouteParams>()

  return (
    <div className=""
      id="" >
      <div className="w-100 pt-0 bg-white pb-15 border-bottom">
        <div className=' w-100'>
          <div className='bg-white'>
            <div className='pb-4'>
              <div className='row'>
                <div className='col-lg-12 mb-4 px-10 pt-10'>
                  <div className='row'>
                    <div className='col-lg-6 '>
                      <label className="pb-2 national_ass" htmlFor={'inspectionDate'}>Certificate</label>
                      <div
                        className='form-control report_input'
                      />
                    </div>
                    <div className='col-lg-6 '>
                      <label className="pb-2 national_ass" htmlFor={'inspectionDate'}>Inspection Date</label>
                      <div
                        className='form-control report_input'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 mb-4 px-10 pt-10'>
                  <div className='row'>
                    <div className='col-lg-6 '>
                      <label className="pb-2 national_ass" htmlFor={'inspectionDate'}>Profile</label>
                      <div
                        className='form-control report_input'
                      />
                      <div className="pt-8">
                        <label className="pb-2 national_ass" htmlFor={'inspectionDate'}>Representative</label>
                        <div
                          className='form-control  report_input'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 '>
                      <label className="pb-2 national_ass" htmlFor='Select Building'>Site Address</label>
                      <div
                        style={{ height: '137px' }}
                        className='form-control  report_input'
                      />
                    </div>
                  </div>
                </div>
                
                  <div className=' bg-light  mt-6 px-5 ps-10 pt-5 pb-2 row'>
                    <div className='col-lg-6'>
                      <p className='pt-2 ps-2 new_inspection'>I recommend that this installation is further inspected and tested after an interval of not more than.</p>
                    </div>
                    <div className='col-lg-6 d-flex pt-2'>
                      <div className="border bg-white rounded d-flex justify-content-center align-items-center h-40px text-center w-100 placeholder_text">N/A</div>
                      <div className="border bg-white rounded d-flex justify-content-center align-items-center h-40px text-center ms-5 w-100 placeholder_text">Due Date</div>
                    </div>
                  </div>
               
                  <div className="px-3 pt-4">
                    <hr />
                  </div>

                <div className='my-8 px-10'>
                  <label className="pb-2 national_ass" htmlFor='Select Building' >Summary</label>
                  <div
                    style={{ height: '137px' }}
                    className='form-control  report_input'
                  />
                </div>
              </div>
            </div>
           
              <div className='bg-light  ms-0 w-100  ps-5 px-5 px-5 pt-6 pb-5 row'>
                <div className='col-lg-6'>
                  <p className='pt-4 ps-2 new_inspection'>Next Inspection Date :</p>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='form-control  report_input'
                  />
                </div>
              </div>
            <div className={`bg-light pt-4 pb-3  w-100 mt-3 ps-5 px-5 ms-0 row`}>
              <div className='col-lg-6'>
                <p className='pt-3 national_ass '>The National Association of Air Duct Specialists UK (NAADUK) is an association for qualified ventilation ductwork maintenance technicians.</p>
              </div>
              <div className='col-lg-6'>
                <div className='pt-4 d-flex align-items-center'>
                  <div
                    className='form-control  report_input'
                  />
                  <div className={` bg-white border rounded ms-3 text-center d-flex align-items-center justify-content-center`} style={{ width: '82px', height: '59px' }}>
                    logo
                  </div>
                </div>
              </div>
            </div>
            <div className={` bg-white   ps-5 ms-0 px-5 pt-6 pb-3 w-100 mt-2 row`}>
              <div className='col-lg-6'>
                <p className='pt-5 pb-5 national_ass'>All fire and smoke damper inspectors are trained to follow BS 9999 & CITB Registered 22542, and exercise reasonable skill and knowledge during the inspection and testing. The results of the inspection and testing reviewed by the Qualified Supervisor:</p>
              </div>
              <div className='col-lg-6'>
                <div className='pt-8'>
                  <div
                    className='form-control bg-transparent report_input'
                  />
                </div>
              </div>
            </div>
            <div className={` bg-light '}   py-5`}>
              <div className='text-center pt-10  underline'>
                <h3 className='national_ass'>Report Content</h3>
              </div>
              <ul className='list-unstyled'>
                <li className='py-4'>
                  <div className='d-flex'>
                    <div className='d-flex ms-10'>
                      <div className='w-100px report_c_sec'>Section 1</div>
                      <span className='px-4'>:</span>
                      <div className='w-100px national_ass'>Summary</div>
                    </div>
                    <div className='d-flex '>
                      <span className='mx-4'>-</span>
                      <div className='national_ass'>Summary of test and inspection results with overview of satisfactory and unsatisfactory findings</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='d-flex'>
                    <div className='d-flex ms-10'>
                      <div className='w-100px report_c_sec'>Section 2</div>
                      <span className='px-4'>:</span>
                      <div className='w-100px national_ass'>Asset Register</div>
                    </div>
                    <div className='d-flex '>
                      <span className='mx-4'>-</span>
                      <div className='national_ass'>List of assets located and testing results</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="">
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </div>
  )
}

export default Certificate;