import data from "./data.json";

import InquiryResponseHeader from "./inquiryResponseHeader";
import InquiryRequestInfo from "./inquiryRequestInfo";
import CCRResponse from "./CCRResponse";
import Score from "./score";


export default function CreditReport() {
  return (
    <div >
      Shantnu  2 {Object.keys(data).join(", ")}
      <InquiryResponseHeader a={data.InquiryResponseHeader}/>
      <InquiryRequestInfo/>
      <CCRResponse/>
      <Score/>
    </div>
  )
}