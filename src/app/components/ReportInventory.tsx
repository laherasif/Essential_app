import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";

const ReportInventory = () => {
  return (
    <>
      <div className='bg-white' >
        <ReportHeader reportDetail={""} onBack={""} section="Report Section 1" hideBack />
      </div>
      <div className='pt-10 pb-5 '>
        <div className='text-center ps-16'>
          <p className='competancy underline'>Report Section 6</p>
          <h2 className='fire_damper pb-4' style={{ lineHeight: '8px' }} >Inventory</h2>
        </div>
      </div>
      <div className="bg-white h-40px"></div>
      <div className='w-100 bg-white border-bottom pb-10 px-2 h-500px'>
        <table className="table table-striped table-bordered w-100">
          <tbody>
            <tr className='national_ass'>
              <td className='border pt-6 text-center border-top-0  px-5 border-left-0 '>No.</td>
              <td className='border pt-6 text-center border-top-0' style={{ width: '120px' }}>Asset Ref.</td>
              <td className='border pt-6 ps-4 border-top-0' colSpan={2}>Location Reference</td>
              <td className='border  text-left ps-4 border-top-0 pt-6 px-2'>Damper Classification</td>
              <td className='border  text-left  ps-4 pt-6 px-2 border-top-0 border-right-0'>Accessibility</td>
            </tr>
            <tr className='national_ass'>
              <td className='text-left px-5 pt-8 border border-left-0'>01</td>
              <td className='text-left px-5 pt-8 border'>AD2015</td>
              <td className='text-left px-5 pt-8 border' colSpan={2}>Dubai</td>
              <td className='text-left px-5 pt-5 border'>Sam KU20123</td>
              <td className='text-left px-5 pt-8 border border-right-0'>Accessibility </td>

            </tr>
            <tr className='national_ass'>
              <td className='text-left px-5 pt-8 border border-left-0'>02</td>
              <td className='text-left px-5 pt-8 border'>AD2015</td>
              <td className='text-left px-5 pt-8 border' colSpan={2}>Dubai</td>
              <td className='text-left px-5 pt-5 border'>Sam KU20123</td>
              <td className='text-left px-5 pt-8 border'>[Access method text] </td>

            </tr>
            

          </tbody>
        </table>
      </div>
      <div>
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </>
  )
}

export default ReportInventory;
