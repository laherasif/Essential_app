import ReportFooter from "./ReportFooter";
import ReportHeader from "./ReportHeader";
// import moment from 'moment';

const ReportAssetRegister = (
 ) => {
  return (
    <>
      <div className='' >
        <ReportHeader reportDetail={""} onBack={""} section="Report Section 1" hideBack />
      </div>
      <div className='pt-9 pb-8'>
        <div className='text-center'>
          <p className='competancy underline'>Report Section 3</p>
          <h2 className='fire_damper' style={{ lineHeight: '12px' }}>Asset Registration</h2>
        </div>
      </div>
      <div className=" bg-white px-2" style={{ height: '400px' }}>
        <div className="bg-white h-40px"></div>
        <div className=' w-100'>
          <table className="table table-bordered w-100">
            <tbody>
              <tr className='national_ass bg-light'>
                <td className='border pt-6 text-center  px-5 border-left-0 '>No.</td>
                <td className='border pt-6 text-center' style={{ width: '120px' }}>Asset Ref.</td>
                <td className='border pt-6 ps-4 ' colSpan={2}>Location Reference</td>
                <td className='border pt-6 text-center px-3'>Technician</td>
                <td className='border pt-6 text-left px-3'>Date</td>
                <td className='border  text-center px-2'>Fire barrier inspection</td>
                <td className='border  text-center px-2'>Installation inspection</td>
                <td className='border  text-left ps-5 border-right-0'>Operational Test</td>
              </tr>
              {
                Array(2).fill(2).map((_, i: number) => (
                  <tr className='national_ass'>
                    <td className={` ${i % 2 === 1 && 'bg-light'} text-left  px-5 pt-8 border border-left-0`}>01</td>
                    <td className={` ${i % 2 === 1 && 'bg-light'} text-left  px-5 pt-8 border`}>AD2015</td>
                    <td className={` ${i % 2 === 1 && 'bg-light'} text-left  px-5 pt-8 border`} colSpan={2}>Dubai</td>
                    <td className={` ${i % 2 === 1 && 'bg-light'} text-left  px-5 pt-8 border`}>Sam KU20123</td>
                    <td className={` ${i % 2 === 1 && 'bg-light'} text-left  px-5 pt-8 border`}>20/12/2023</td>
                    <td className='text-center ' id="stis_f_green">
                      <div className=''>Satisfactory</div>
                    </td>
                    <td className='text-center bg-deark' id="unstis_f_yellow">
                      <div className=''>Unsatisfactory</div>
                    </td>
                    <td className='text-center ' id="unstis_f_red">
                      <div className=''>Satisfactory</div>

                    </td>
                  </tr>
                ))
              }


            </tbody>
          </table>
        </div>
      </div>
      <div className="border-top">
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </>
  )
}

export default ReportAssetRegister;

