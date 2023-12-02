import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";
import styled from "styled-components";
import showImg from '../../assets/icons/image_shower.svg'


const ReportCompetances = () => {
  return (
    <>
      <div className='bg-white' >
        <ReportHeader reportDetail={""} onBack={""} section="Report Section 1" hideBack />
      </div>
      <div className='pt-10 pb-5 '>
        <div className='text-center ps-16'>
          <p className='competancy underline'>Report Section 7</p>
          <h2 className='fire_damper pb-4' style={{ lineHeight: '8px' }} >Competencies</h2>
        </div>
      </div>
      <div className="bg-white border-bottom">
        <div className="">
          <div className='w-100 pt-10 pb-10 px-10 bg-white'>
            <h2 className='summery'>Competencies</h2>
            <div className='bg-light  px-5 pb-5 pt-3 mt-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className="w-100">
                  <h2 className='competancy'>Header</h2>
                  <div className='form-control w-100 mt-3' style={{ height: '110px' }}>
                    Text from Client register
                  </div>
                </div>
                <div className="pt-3 ms-4">
                  <img src={showImg} style={{ width: '130px', height: '130px' }} alt="image" />
                </div>
              </div>
            </div>
            <div className='bg-light  px-5 pb-5 pt-3 mt-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className="w-100">
                  <h2 className='competancy'>Header</h2>
                  <div className='form-control w-100 mt-3' style={{ height: '110px' }}>
                    Text from Client register
                  </div>
                </div>
                <div className="pt-3 ms-4">
                  <img src={showImg} style={{ width: '130px', height: '130px' }} alt="image" />
                </div>
              </div>
            </div>
            <div className='bg-light  px-5 pb-5 pt-3 mt-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className="w-100">
                  <h2 className='competancy'>Header</h2>
                  <div className='form-control w-100 mt-3' style={{ height: '110px' }}>
                    Text from Client register
                  </div>
                </div>
                <div className="pt-3 ms-4">
                  <img src={showImg} style={{ width: '130px', height: '130px' }} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10  w-100 px-10 pb-10 bg-white'>
            <h2 className='summery'>Operative</h2>
            <div className='bg-light  px-5 pb-5 pt-3 mt-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className="w-100">
                  <h2 className='competancy'>Header</h2>
                  <div className='form-control w-100 mt-3' style={{ height: '110px' }}>
                    Text from Client register
                  </div>
                </div>
                <div className="pt-3 ms-4">
                  <img src={showImg} style={{ width: '130px', height: '130px' }} alt="image" />
                </div>
              </div>
            </div>
            <div className='bg-light  px-5 pb-5 pt-3 mt-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className="w-100">
                  <h2 className='competancy'>Header</h2>
                  <div className='form-control w-100 mt-3' style={{ height: '110px' }}>
                    Text from Client register
                  </div>
                </div>
                <div className="pt-3 ms-4">
                  <img src={showImg} style={{ width: '130px', height: '130px' }} alt="image" />
                </div>
              </div>
            </div>
            <div className='bg-light  px-5 pb-5 pt-3 mt-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className="w-100">
                  <h2 className='competancy'>Header</h2>
                  <div className='form-control w-100 mt-3' style={{ height: '110px' }}>
                    Text from Client register
                  </div>
                </div>
                <div className="pt-3 ms-4">
                  <img src={showImg} style={{ width: '130px', height: '130px' }} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </>
  )
};

export default ReportCompetances;
