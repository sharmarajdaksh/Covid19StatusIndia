export interface DistrictData{
    
    name: string,
    data: {
        notes: string,
        active: number,
        confirmed: number,
        deceased: number,
        recovered: number,
        delta: any
    }
}