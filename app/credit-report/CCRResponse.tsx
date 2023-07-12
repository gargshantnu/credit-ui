import styles from './styles.module.css'


export default function CCRResponse(data: Object) {
    return (
        <>
            <div className={styles.Heading}>
                CCRResponse
            </div>
            <div className={styles.Data}>
                {JSON.stringify(data)}
            </div>
        </>
    )
}