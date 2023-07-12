import styles from './styles.module.css'


export default function InquiryResponseHeader(data:Object) {
    return (
        <div className={styles.Heading}>
            InquiryResponseHeader {JSON.stringify(data)}
        </div>
    )
}