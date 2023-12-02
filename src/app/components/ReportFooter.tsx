import moment from "moment";

const ReportFooter = (
  {
    reportDetail,
    section
  }: {
    reportDetail: any,
    section?: string
  }) => {


  return (
    <>
      <div className="w-100 bg-white px-10  pt-13 pb-9">
        <p className="report_content" style={{lineHeight:'9px'}}> Fire Damper PPM | Service Report | Report Details </p>
        <p className="report_content" style={{lineHeight:'9px'}}> WS-15231 - FD Service Report 2022 (JUL) - Scrutum - Astro House.xlsx - 13/07/2022</p>
        <p className="report_content" style={{lineHeight:'9px'}}> J-Tek Installations UK Ltd - Registered in England No. 08498019 - VAT No. GB 160 310 756</p>
      </div>
    </>
  )
}

export default ReportFooter;