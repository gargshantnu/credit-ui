import styles from './styles.module.css'


export default function CCRResponse(data: Object) {
    return (
        <>
            <div className={styles.Heading}>
                CCRResponse
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
}