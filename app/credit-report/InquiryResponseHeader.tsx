import styles from './styles.module.css'


interface InquiryResponseHeaderData {
    "ClientID": string,
    "CustRefField": string,
    "ReportOrderNO": string,
    "ProductCode": string[],
    "SuccessCode": string,
    "Date": string,
    "Time": string
}



export default function InquiryResponseHeader(data: InquiryResponseHeaderData) {
    return (
        <>
            <div className={styles.Heading}>
                InquiryResponseHeader
            </div>
            <div className={styles.Data}>
                <span>
                    Your client id is: {data.ClientID}
                </span>
                <span>
                    Your Customer Ref Field is: {data.CustRefField}
                </span>
                <span>
                    Your report order number is: {data.ReportOrderNO}
                </span>
                <span>
                    Your product code is: {data.ProductCode.join(", ")}
                </span>
                <span>
                    Your success code is: {data.SuccessCode}
                </span>
                <span>
                    Report generation date: {data.Date} {data.Time}
                </span>
            </div>
            
        </>
    )
}