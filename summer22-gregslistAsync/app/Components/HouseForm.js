import { House } from "../Models/House.js"

export function getHouseForm(house = new House({})){

return `
  <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
  <h3 class="text-primary">List Your House</h3>
<div class="row">
<div class="col-4">
    <label class="form-label" for="make">Year</label>
    <input class="form-control" type="text" minlength="5" id="make" name="make" value="${house.year}" >
    </div>
    <div class="col-4">
    <label class="form-label" for="model">Bedrooms</label>
    <input class="form-control" type="text" id="model" name="model" value="${house.bedrooms}">
    </div>
    <div class="col-4">
    <label class="form-label" for="year">Bathrooms</label>
    <input class="form-control" type="number" id="year" name="year" min="1999" value="${house.bathrooms}">
    </div>
    <label class="form-label" for="price">Price</label>
    <input class="form-control" type="number" min="1000" id="price" name="price" value="${house.price}">
    <label class="form-label" for="img">Image</label>
    <input class="form-control" type="text" id="img" name="img" value="${house.img}">
    <label class="form-label" for="description">Description</label>
    <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${house.description}"></textarea>
    <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
    </form>
    `
  }