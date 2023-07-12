import styles from './styles.module.css'


export default function InquiryRequestInfo(data: Object) {
    return (
        <>
            <div className={styles.Heading}>
                InquiryRequestInfo
            </div>
            <div className={styles.Data}>
                {JSON.stringify(data)}
            </div>
        </>
    )
}