import { useRef, useState } from "react"

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Content from "./components/Content";
import Guidance from "./components/Guidance";
import Certificate from "./components/Certificate";
import Service from "./components/Service";
import ReportSummary from "./components/ReportSummary";
import ReportAssetRegister from "./components/ReportAssetRegister";
import ReportDefectsLog from "./components/ReportDefectsLog";
import ReportAssetPage from "./components/ReportAssetPage";
import ReportInventory from "./components/ReportInventory";
import ReportCompetances from "./components/ReportCompetances";
import './style.css'
const App = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)

  const pdfRef = useRef<any>(null);

  const components = [
    <Content />,
    <Certificate />,
    <Guidance />,
    <Service />,
    <ReportSummary />,
    <ReportAssetRegister />,
    <ReportDefectsLog />,
    <ReportAssetPage />,
    <ReportInventory />,
    <ReportCompetances />,
  ];


  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [297, 210],
    });

    const scale = 2.8;

    try {
      for (let i = 0; i < components.length; i++) {
        const componentRef = pdfRef.current;
        if (componentRef) {
          await html2canvas(componentRef, { allowTaint: true, useCORS: true, scale }).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg', 0.1);
            const imgWidth = 210;
            const pageHeight = 298;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            if (i > 0) {
              doc.addPage();
            }

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
          });
        }
      }

      setLoading(false);
      doc.save('resume.pdf');
    } catch (err) {
      console.log('err', err);
    }
  };


  return (
    <>
      <div className="px-20" >
        <button
          className='btn btn-default btn-icon text-2xl'
          data-toggle='tooltip'
          title='Print Report'
          onClick={ generatePDF }
        >
          {isLoading === false && <i className='fas fa-download text-primary text-2xl'></i>}
          {isLoading && (
            <span
              className='indicator-progress text-primary'
              style={{ display: 'block' }}
            >
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <div >
          {
            components && components?.map((component: any, i: number) => (
              <div key={i} ref={(el) => (pdfRef.current = el)}>
                {component}
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App