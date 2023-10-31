import {cars} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
function Home() {

    return (
        <div>
            <h1>Каталог машин</h1>
            <div className='add'>
                    <CreateCarForm />
            </div>
            <div className='catalog'>
                {cars.length ? cars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    ))
                    : <p>Машин нет</p>
                }

            </div>
        </div>
    )
}

export default Home
