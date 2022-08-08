
export class Job{
    constructor({company,jobTitle,hours,rate,description}){
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description || " "
    }

    get Template(){
        return `
        <div class="col-4 p-3">
        <div class="bg-white elevation-2">
          <div class="p-2">
            <h4 class="text-center">${this.company}</h4>
            <h4 class="text-center">${this.jobTitle}| ${this.hours} | ${this.rate}</h4>
            <p>${this.description}</p>
            <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Edit Job</button> 
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete Job</button> 
          </div>
        </div>
      </div>
    `
    }
    
}