import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawJobs(){
    let template = ''
    let jobs = ProxyState.jobs 
    jobs.forEach(j => template += j.Template)
    document.getElementById('listings').innerHTML = template
}

export class JobsController{
    constructor(){
    ProxyState.on('jobs',_drawJobs)
    _drawJobs()
    this.getJobs()
}
    viewJobs(){
    _drawJobs()
    this.getJobs
    }

    async getJobs(){
        try {
        await jobsService.getJobs()
        }catch (error) {
        console.error('[Get Jobs]', error)
        Pop.error(error)
    }
}


}

