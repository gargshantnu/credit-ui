import styles from './styles.module.css'


export default function Score(data: Object) {
    return (
        <>
            <div className={styles.Heading}>
                Score
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
}