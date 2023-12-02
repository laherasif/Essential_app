import ReportFooter from "./ReportFooter";
import ReportHeader from "./ReportHeader";

const ReportSummary = () => {
  return (
    <>
      <div className='mt-5'>
        <ReportHeader reportDetail={""} onBack={""} section="Report Section 1" hideBack />
      </div>
      <div className='pt-8 pb-8'>
        <div className='text-center d-flex justify-content-center flex-column '>
          <p className='competancy underline' >Report Section 2</p>
          <h2 className='fire_damper' style={{ lineHeight: '13px' }}>Summary</h2>
        </div>
      </div>
      <div className="bg-white h-40px"></div>
      <div className='w-100 bg-white  pb-10'>
        <div className="border-bottom bg-white pb-10">
          <div className="d-flex justify-content-between w-100 pt-1 pb-5  bg-light px-9">
            <div className="w-100 pt-6">
              <h2 className='national_ass'>Total Number of Dampers:</h2>
            </div>
            <div className="w-100 pt-4">
              <div  className='form-control h-40px ' />
            </div>
          </div>
          <div className='mt-5 px-10 pt-3 pb-13 border-bottom '>
            <p className='national_ass'>Dampers</p>
            <div className='border rounded px-5 pt-4'>
              <ul className='list-unstyled'>
                <li>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='service'>E Class: Mechanical Fusible Spring-operated Fire Damper:</p>
                    <p className='service'>26</p>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='service'>S Class: Motorised Smoke Damper:</p>
                    <p className='service'>26</p>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='service'>ES Class: Motorised Fire & Smoke Damper:</p>
                    <p className='service'>26</p>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='service'>I Class: Intumescent Damper</p>
                    <p className='service'>26</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <ul className='list-unstyled border-bottom pb-5'>
              <li className=' bg-light px-10 py-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div style={{ maxWidth: '680px' }}>
                    <p className='service'>Complaint Dampers:</p>
                    <span className='national_ass'>Compliant dampers with clear access for inspection and testing, satisfactory installation in accordance with manufacturer guidance, satisfactory fire barrier and successful test.</span>
                  </div>
                  <div className='count_box'>26</div>
                </div>
              </li>
              <li className='border-top px-10 py-5 bg-white'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div style={{ maxWidth: '680px' }}>
                    <p className='service'>Minor Defects:</p>
                    <span className='national_ass'>Minor defects noted for deviations from manufacturer installation guidance or recommendations to improve accessibility for testing. Remedial program of works required to rectify defects.</span>
                  </div>
                  <div className='count_box_2'>26</div>
                </div>
              </li>
              <li className='border-top bg-light px-10 py-5'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div style={{ maxWidth: '680px' }}>
                    <p className='service'>Major Defects:</p>
                    <span className='national_ass'>Non-Compliant dampers with major defects noted following an inspection of the installation & fire barrier, and attempted test. Urgent remedial actions are required to rectify defects.</span>
                  </div>
                  <div className='count_box_3'>26</div>
                </div>
              </li>
              <li className='border-top  bg-white  px-10 py-6'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div style={{ maxWidth: '680px' }}>
                    <p className='service'>Untested Damper:</p>
                    <span className='national_ass'>Not-tested dampers have either been surveyed or unable to located (but are known to be present within the building), or have no access arrangements [actions required].</span>
                  </div>
                  <div className='count_box_4'>26</div>
                </div>
              </li>

            </ul>
          </div>
          <div className='mt-10 pb-20 me-10 bg-white'>
            <div className='border rounded px-5 pt-7 px-10'>
              <h2 className='summery'>BESA DW 144 - Section 20 (ACCESS/INSPECTION OPENINGS) </h2>
              <h2 className='summery'>states:</h2>

              <p className='national_ass pt-2'>20.2.1. FIRE/SMOKE DAMPERS   "Wherever such dampers are installed, adequate means of access should be provided in a convenient position adjacent to the damper. The access panel should be large enough to allow testing and maintenance of both the damper and its actuating mechanism (BS 9999). Panels shall also allow access to the blades and fusible links. On multiple assembly units it may be necessary to provide more than one panel and this may be determined by both external access conditions and the internal reach to the blades and the fusible links."      Table 20. Location of Access Panels for Inspection/Servicing and/or Internal Cleanliness* advises fire dampers should have access panels on both sides to suit damper maintenance.</p>
              <p className='pt-5  national_ass pb-3 d-flex justify-content-end align-items-end'> Dampers accessible from both side: 26</p>
              
            </div>
          </div>
          <div className='pt-7 bg-light pb-3'>
            <div className='d-flex justify-content-between align-items-center px-8'>
              <div className='' style={{ maxWidth: '571px' }}>
                <h2 className='service'>BS 9999:2017 states:</h2>
                <p className='national_ass pt-2'>“As filters, etc. become contaminated they become a progressively greater fire hazard, and hence they should be cleaned and/or replaced as recommended by the manufacturer or supplier. Similarly, deposits of combustible material (including any dust) should not be allowed to build up within the ductwork itself. Panels forming ceiling voids used for the extraction of air from non-domestic kitchens and from deep fat fryers should be cleansed frequently to avoid the build-up of grease deposits”. Technicians will assess the cleaniness & hygiene of the visible duct connected to each damper.</p>
              </div>
              <div className=''>
                <div className='green'>
                  Clean : 36
                </div>
                <div className='yellow'>
                  Moderate : 30
                </div>
                <div className='red'>
                  Dirty : 12
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <ReportFooter reportDetail={""} section="Summary" />
        </div>

      </div>
    </>
  )
}

export default ReportSummary;