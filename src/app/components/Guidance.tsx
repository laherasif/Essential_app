import ReportFooter from "./ReportFooter";
import ReportHeader from "./ReportHeader";

const Guidance = () => {

  // console.log("buildingData in guide" , buildingData)
  // reportDetail.guidanceReport.regulationsStandands
  return (
    <>
      <div className='bg-white'>
        <ReportHeader reportDetail={""} onBack={""} section="Fire Damper PPM" hideBack />
      </div>
      <div className='pt-10 pb-5'>
        <div className='text-center d-flex justify-content-center flex-column '>
          <h2 className='fire_damper'>Guidance</h2>
          <p className='competancy underline' >Regulation and standards</p>
        </div>
      </div>
      <div className='bg-white pt-7 '>
        <div className='d-flex justify-content-between px-10 '>
          <h2 className='service pt-2 px-2'>Scope of Work</h2>
        </div>
        <div className='rounded border p-4 mt-2 mx-10 '>
          <p className='national_ass'>The UK Government legislation “The Regulatory Reform (fire safety) Order (RRO) 2005” came into effect in October 2006 and had a major impact on responsibility for fire safety. The RRO changed the responsibility for a facility’s fire safety system to the organisation’s “responsible person”. Typically, that responsible person is the employer, or the owner of the facility. The fire safety systems that must be kept in order include all active and passive fire protection systems. Included in the list of items in the passive fire protection systems are the maintenance of the fire and smoke dampers</p>
          <p className='national_ass'>Fire and smoke dampers form part of a building ventilation system and are installed where air handling ducts pass through fire-separating elements such as compartment walls or enclosures protecting escape routes.
          </p>
          <p className='national_ass'>Typically, a fire damper is a metal curtain within a duct held up by a thermal element (referred to as a fusible link) and released in the event of a rise in temperature. The thermal element will melt at a set temperature releasing a spring-operated metal curtain, which is pulled down to fill the opening the duct passes through, preventing the passage of fire.</p>
          <p className='national_ass'>A fire and smoke damper is linked to the fire alarm system and is automatically operated once triggered by smoke detectors. The smoke damper will close to prevent the passage of smoke and provide protection against hot and cold smoke inhalation. Smoke dampers can also be used as part of a smoke extract system where the damper will automatically open when triggered to extract any smoke which may leak into escape routes.</p>
          <p className='national_ass'>Fire and smoke dampers are key to the control and containment of fire in the event of an emergency. By providing a barrier which fire and smoke cannot pass, these assets play a critical lifesaving role in the fire safety within any building.</p>
          <p className='national_ass'>British Standard 9999:2017 Code of Practice for Fire Safety in the Design, Management & Use of Buildings (which superseded BS 9999:2008– Fire Precautions in the design, construction and use of buildings) states that “Arrangements should be made for all fire dampers to be tested by a competent person on completion of the installation and at least annually, and to be repaired or replaced immediately if found to be faulty. Springoperated fire dampers should be tested annually and fire dampers situated in dust-laden and similar atmospheres should be tested much more frequently, at periods suited to the degree of pollution”.</p>
        </div>

        <div className='relevent_laws px-10'>
          <h2>Relevant laws and standards:</h2>

          <div className='relevent_list'>
            <p>{`> The Regulatory Reform (fire safety) Order 2005 - Statutory legislation which makes the maintenance of fire safety systems a legal requirement Relevant laws and standards:`} </p>
            <p>{`> BS 9999:2017 Code of Practice for Fire Safety in the Design, Management & Use of Buildings - Non-statutory standards used as guidance to ensure compliance with the Regulatory Reform (Fire Safety) Order 2005 `} </p>
            <p>{`>  ASFP – The Grey Book – Volume 1: EN Fire dampers - Guidance for manufacture, specification, installation and inspection of fire dampers`} </p>
            <p>{`> BESA DW 145 – Guide to Good Practice for the Installation of Fire and Smoke Dampers`} </p>
            <p>{`> BESA DW 144 – Guide to Good Practice for the Installation of Sheet Metal Ductwork`} </p>
            <p>{`> BESA TB/001 – Technical Bulletin – Technical guidance on Fire and Smoke damper maintenance`} </p>
            <p>{`> NAADUK 21 – Guidance for Ductwork Cleaning – BS EN 15780: 2011 & LPS 2084 - Guidance for Kitchen Extract – EC 852:2004 & LPS 2084`} </p>
            <p>{`> NAADUK 21 – Guidance for Ductwork Cleaning – BS EN 15780: 2011 & LPS 2084 - Guidance for Kitchen Extract – EC 852:2004 & LPS 2084`} </p>
          </div>

        </div>
      </div>
      <div>
        <ReportFooter reportDetail={""} section="Summary" />
      </div>
    </>
  )
}

export default Guidance;