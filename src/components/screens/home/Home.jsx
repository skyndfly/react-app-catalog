import styles from './Home.module.css'
function Home() {
    return (
        <div>
            <h1>Каталог машин</h1>
            <div className='catalog'>
                <div className={styles.item}>
                    <h2>Car 1</h2>
                    <p>100 000$</p>
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    )
}
export default Home
