export interface VehiclesProps {
    brand: string;
    chassi: string;
    color: string;
    km: number;
    model: string;
    status: string;
    value:  number;
    yer: string;
}

export interface PageVehicles<T>{
    vehicles: Array<T>;
    perPage: number;
    currentPage: number;
    totalRecords: number;
  }