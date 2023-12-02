import ReportFooter from './ReportFooter';
import ReportHeader from './ReportHeader';
const Service = () => {
  return (
    <>
      <div className='bg-white' >
        <ReportHeader reportDetail={""} onBack={""} section="Fire Damper PPM" hideBack />
      </div>
      <div className='pt-10 pb-9'>
        <div className='text-center d-flex justify-content-center flex-column '>
          <p className='competancy underline' >Report Section 1</p>
          <h2 className='fire_damper' style={{lineHeight:'13px'}}>Service</h2>
        </div>
      </div>
      <div className='bg-white px-10 pt-7 border-bottom pb-8'>
        <div className='d-flex justify-content-between '>
          <h2 className='service pt-2'>Service</h2>
        </div>
        <div className='rounded border p-4 mt-2'>
          {/* <p className='service'>{`All fire damper inspection and testing is carried out by trained and competent person(s). All damper Inspectors will follow good practice and guidance: > BESA TB/001 – Technical Bulletin – Technical guidance on Fire and Smoke damper maintenance > SFG20 – 16-06 Ducting – Fire Dampers – Fusible Link Type > SFG20 – 16-07 Ducting – Combined Fire/Smoke Dampers used in Smoke Control Systems for Means if Escape > SFG20 – 16-08 Ducting – Combined Fire/Smoke Dampers used in Ventilation Systems`}</p> */}
          <p className='service'>Our damper technicians will carry out an intrusive survey of the building within the agreed parameters and endeavour to locate and service all dampers. Should a ventilation drawing be provided, our operatives will update and annotate details of any extra findings. An asset register will be generated for all dampers located, along with a summary of test results and photographic evidence of drop test procedure.</p>
          <p className='service'>
            When a damper is located the technician will assess the safest means of access for inspection and testing, and clear any obstructions (within reason). Should there be an accessibility issue or obstruction preventing access these will be noted as required remedial actions.</p>

          <p className='service'>When a damper is located the technician will assess the safest means of access for inspection and testing, and clear any obstructions (within reason). Should there be an accessibility issue or obstruction preventing access these will be noted as required remedial actions.</p>

          <div className='service_list bg-light border rounded p-5 my-5'>
            <p>{`> Correct orientation`} </p>
            <p>{`> Transit tape over the fuse link has been removed`} </p>
            <p>{`> All galleys are clean and clear from obstructions `} </p>
            <p>{`> Springs are mounted securely and not twisted`} </p>
            <p>{`> Adequate support for the damper, and integrity of ductwork either side of damper`} </p>
            <p>{`> No serious signs of corrosion`} </p>
            <p>{`> Fuse link or bar is in good condition, with no visible signs of damage or solder decay`} </p>
            <p>{`> moke damper actuators will be inspected to ensure they are clear of obstruction and all wiring connections are secure under no undue strain`} </p>
          </div>
          <p className='service'>Many faults or defects can be identified during the initial inspection. Should there be an accessibility issue, obstruction, or damage to the damper, these will be noted as required remedial actions. Once all visual inspections are complete and satisfactory, a drop test can be carried out. During a fire damper drop test the technician will:</p>

          <div className='service_list bg-light border rounded p-5 my-5'>
            <p>{`> Clear damper galleys of any debris or obstructions `} </p>
            <p>{`> Manually released the fusible link and allow the curtain and drop into closed position `} </p>
            <p>{`>  Ensure the damper curtain closes fully, visually checking that the bottom curtain blade locks onto the locking-ramp `} </p>
            <p>{`> The fusible link will be inspected for any deformity or damage`} </p>
            <p>{`> Damper will be cleaned if required (and lubricated if advised in manufacturer maintenance manual) - PTFE lubricate will be applied`} </p>
            <p>{`> Damper shall then be opened and re-set, ensuring the bottom blade remains parallel with the top of the damper `} </p>
            <p>{`> Photographic evidence will be taken of the damper in the ‘as found’ position, close position and reset position`} </p>
            <p>{`> Smoke dampers will be operated at the local thermal release switch or control panel`} </p>
          </div>
          <p className='service'>Our damper technicians will also carry out some basic observations of the compartment condition and duct cleanliness as these factors will also impact the damper performance and effectiveness. A damper is there to protect the fire compartment (not the ducting).</p>
          <p className='service'>Dampers are passive fire protection products designed to prevent the passage of fire through a compartment wall or floor. For a damper to serve its intended purpose it is critical to be correctly installed within the compartment compound and the compartment must be intact throughout.</p>
          <p className='service'>Prior to visual inspection of the actual damper our technicians will carry out some basic observations of the surrounding compartment condition and suitability of the installation method used to integrate the damper into the compartment compound.</p>
          <p className='service'>All dampers should be independently supported in line with the compartment substrate and manufacturer tested to operate within the installation scenario. An incorrectly installed damper such as inadequate supports or not being in line with compartment barrier will stop the damper from serving its intented purpose. Likewise a damper will become redundant should the surrounding fire stopping be compromised, where fire and smoke can bypass a poorly installed or incomplete fire barrier.</p>
        </div>


      </div>
      <div>
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </>
  )
}

export default Service;