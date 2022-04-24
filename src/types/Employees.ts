export interface EmployeesProps {
    bio: string;
    cpf: string;
    email: string;
    name: string;
    salary: number;
}

export interface PageEmployees<T>{
    employees: Array<T>;
    perPage: number;
    currentPage: number;
    totalRecords: number;
}