import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";
import { carsService } from "../Services/CarsService.js";
import { Pop } from "../Utils/Pop.js";



function _drawCars() {
  let template = ''
  let cars = ProxyState.cars
  cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML = getCarForm()
}



export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    this.getCars()
  }

  viewCars() {
    _drawCars()
    this.getCars()
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('[Get Cars]', error)
      Pop.error(error)
    }
  }


  async createCar() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let newCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        imgUrl: form.img.value,
        description: form.description.value,
      }
      await carsService.createCar(newCar)
      form.reset()
    } catch (error) {
      console.error('[Create Car]', error)
      Pop.error(error)
    }

  }

  async deleteCar(carId) {
    try {
      await carsService.deleteCar(carId)
    } catch (error) {
      console.error('[Delete Car]', error)
      Pop.error(error)
    }
  }



  // THIS IS NOT THE ASYNC ONE
  adjustCar(carId) {
    let car = ProxyState.cars.find(c => c.id == carId)
    // @ts-ignore
    document.getElementById('form').innerHTML = getCarForm(car)
  }


  async editCar(carId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let carData = {
        id: carId,
        // @ts-ignore
        make: form.make.value,
        // @ts-ignore
        model: form.model.value,
        // @ts-ignore
        year: form.year.value,
        // @ts-ignore
        price: form.price.value,
        // @ts-ignore
        imgUrl: form.img.value,
        // @ts-ignore
        description: form.description.value
      }
      await carsService.editCar(carData)
    } catch (error) {
      console.error('[Edit Car]', error)
      Pop.error(error)
    }
  }



}