import clsx from 'clsx'
import styles from './Button.module.css'

function Button({primary}){
    const classes = clsx(styles.btn,{
        [styles.primary]: primary
    })
    console.log(styles)
    return (
        <>
        <button className={classes}>
            Click me!
        </button>
        </>
    )
}

export default Button