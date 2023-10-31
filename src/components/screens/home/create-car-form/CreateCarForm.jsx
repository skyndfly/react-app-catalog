import styles from  './CreateCarForm.module.css'
import {useState} from "react";

const CreateCarForm = () => {
    const [name, setName] = useState('')
    return (
        <form className={styles.form}>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Price'/>
            <input type="text" placeholder='Image'/>
            <button>Добавить</button>
        </form>
    )
}
export default CreateCarForm