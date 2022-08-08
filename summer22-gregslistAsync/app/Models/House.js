


export class House{
    constructor({bedrooms,bathrooms,levels,imgUrl,year,price,description}){
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.img = imgUrl || " "
    this.year = year
    this.price = price
    this.description = description || " "
    }


    get Template(){
        return `
        <div class="col-4 p-3">
        <div class="bg-white elevation-2">
          <img class="img-fluid" src="${this.img}" alt="">
          <div class="p-2">
            <h4 class="text-center">${this.year}</h4>
            <h4 class="text-center">${this.bedrooms}| ${this.bathrooms} | ${this.levels}</h4>
            <p>${this.description}</p>
            <p class="text-end text-success m-0">$<b>${this.price}</b></p>
            <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Edit Listing</button> 
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete Listing</button> 
          </div>
        </div>
      </div>
    `
    }
}