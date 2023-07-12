import styles from './styles.module.css'


export default function CCRResponse(data:Object) {
    return (
        <div className={styles.Heading}>
            CCRResponse {JSON.stringify(data)}
        </div>
    )
}