
const ReportHeader = (
  {
    reportDetail,
    onBack,
    section,
    hideBack,
  }: {
    reportDetail: any,
    onBack: any,
    section?: string,
    hideBack?: boolean,
  }) => {


  return (
    <>
      <div className="d-flex justify-content-between bg-white  px-10 pt-8 pb-5">
        <div className=" ">
          <p className="report_content pt-1" style={{lineHeight:'8px'}}>J-Tek Installations UK Ltd </p>
          <p className="report_content " style={{lineHeight:'8px'}}>T: 01293 852218</p>
        </div>
        <div className="text-center ">
          <p className="report_content">{section}</p>
        </div>
        <div className="">
          <p className="report_content" style={{lineHeight:'7px'}}>e: info@jtekuk.com </p>
          <p className="report_content" style={{lineHeight:'7px'}}>w: www.jtekuk.com</p>
        </div>
      </div>
    </>
  )
}

export default ReportHeader;