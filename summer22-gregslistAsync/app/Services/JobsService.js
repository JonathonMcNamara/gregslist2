import { api } from "./AxiosService.js";
import { Job } from "../Models/Job.js";
import { ProxyState } from "../AppState.js";


class JobsService{

    async getJobs(){
    let res = await api.get('./jobs')
    ProxyState.jobs = res.data.map(j => new Job(j))
}
}










export const jobsService = new JobsService()