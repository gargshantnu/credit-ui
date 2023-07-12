import data from "./data.json";

import InquiryResponseHeader from "./InquiryResponseHeader";
import InquiryRequestInfo from "./InquiryRequestInfo";
import CCRResponse from "./CCRResponse";
import Score from "./Score";

import styles from './styles.module.css'


export default function CreditReport() {
  return (
    <>
      <div className={styles.Heading}>
        Credit report
      </div>
      <InquiryResponseHeader {...data.InquiryResponseHeader} />
      <InquiryRequestInfo {...data.InquiryRequestInfo} />
      {/* <CCRResponse {...data.CCRResponse}/> */}
      <Score {...data.Score} />
    </>
  )
}