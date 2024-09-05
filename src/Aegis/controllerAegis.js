import {createIncident} from "./helpersAegis.js"
export function generateAegisData(maxCount=10){
    const aegisData={
        incidents:[]
    }
    for(let i=0;i<maxCount;i++){
        const eachIncident=createIncident();
        aegisData.push(eachIncident);
    }
}