import ReportFooter from "./ReportFooter";
import ReportHeader from "./ReportHeader";
import preloadImg from '../../assets/icons/imagloader.svg'

const ReportDefectsLog = (
  ) => {
  return (
    <>
      <div className='bg-white' >
        <ReportHeader reportDetail={""} onBack={""} section="Report Section 1" hideBack />
      </div>
      <div className='pt-10 pb-5 '>
        <div className='text-center ps-16'>
          <p className='competancy underline'>Report Section 4</p>
          <h2 className='fire_damper pb-4' style={{ lineHeight: '8px' }} >Defect Log</h2>
        </div>
      </div>
      <div className="bg-white h-40px"></div>
      <div className='w-100 bg-white pb-13'>
        <div className='bg-light px-10 pt-10 pb-6'>
          <p className="national_ass"><span className='pe-6 pt-4 '>BS 9999:2017 states:  </span>    "Arrangements should be made for all fire dampers to be tested by a competent person on completion of the installation and at least annually, and to be repaired or replaced immediately if found to be faulty ”</p>
        </div>
        <div className='px-10 pt-8 border-bottom pb-3'>
          <p className='national_ass'>The following list of faults and defects which were identified during the inspection and testing, with explanation of failed operation and recommended corrective or remedial action:</p>
        </div>
        <div className='bg-light px-10 pt-5 pb-20'>
          <div className='row pb-8'>
            <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Asset Ref.</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Defect Category</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Details</label>
                <div  className='form-control' style={{height:'112px'}}></div>
              </div>
              <div className="mb-3 mt-9">
                <label htmlFor="exampleInputPassword1" className="form-label">Notes</label>
                <div  className='form-control' style={{height:'112px'}}></div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Defect Sub-Category</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mt-16  d-flex justify-content-end">
                <div className='view_defect_yellow'>Unsatisfactory</div>
              </div>
              <div className='d-flex mt-6 ps-3'>
                <img src={preloadImg} style={{width:'250px'}} alt="preload"  />
                <img src={preloadImg} style={{width:'250px'}} className='ms-7' alt="preload"  />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light px-10 pt-5 pb-20'>
          <div className='row pb-8'>
            <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Asset Ref.</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Defect Category</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Details</label>
                <div  className='form-control' style={{height:'112px'}}></div>
              </div>
              <div className="mb-3 mt-9">
                <label htmlFor="exampleInputPassword1" className="form-label">Notes</label>
                <div  className='form-control' style={{height:'112px'}}></div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Defect Sub-Category</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mt-16  d-flex justify-content-end">
                <div className='view_defect_green'>Satisfactory</div>
              </div>
              <div className='d-flex mt-6 ps-3'>
                <img src={preloadImg} style={{width:'250px'}} alt="preload"  />
                <img src={preloadImg} style={{width:'250px'}} className='ms-7' alt="preload"  />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light px-10 pt-5 pb-20'>
          <div className='row pb-8'>
            <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Asset Ref.</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Defect Category</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Details</label>
                <div  className='form-control' style={{height:'112px'}}></div>
              </div>
              <div className="mb-3 mt-9">
                <label htmlFor="exampleInputPassword1" className="form-label">Notes</label>
                <div  className='form-control' style={{height:'112px'}}></div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 mt-7">
                <label htmlFor="exampleInputPassword1" className="form-label">Defect Sub-Category</label>
                <div className="form-control h-40px" id="exampleInputPassword1" />
              </div>
              <div className="mt-16  d-flex justify-content-end">
                <div className='view_defect_red'>Unsatisfactory</div>
              </div>
              <div className='d-flex mt-6 ps-3'>
                <img src={preloadImg} style={{width:'250px'}} alt="preload"  />
                <img src={preloadImg} style={{width:'250px'}} className='ms-7' alt="preload"  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top ">
        <ReportFooter reportDetail={""} section="Summary" />
      </div>

    </>
  )
}

export default ReportDefectsLog;