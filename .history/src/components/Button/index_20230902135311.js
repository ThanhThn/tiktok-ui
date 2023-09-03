import clsx from 'clsx'
import styles from './Button.module.css'

function Button(){
    console.log(styles)
    return (
        <>
        <button className={styles.btn}>
            Click me!
        </button>
        <button className={clsx(styles.btn, styles.acti)}>
            Click me!
        </button>
        </>
    )
}

export default Button