import data from "./data.json";

import InquiryResponseHeader from "./InquiryResponseHeader";
import InquiryRequestInfo from "./InquiryRequestInfo";
import CCRResponse from "./CCRResponse";
import Score from "./Score";


export default function CreditReport() {
  return (
    <div >
      Shantnu  2 {Object.keys(data).join(", ")}
      <InquiryResponseHeader {...data.InquiryResponseHeader}/>
      <InquiryRequestInfo {...data.InquiryRequestInfo}/>
      <CCRResponse {...data.CCRResponse}/>
      <Score {...data.Score}/>
    </div>
  )
}