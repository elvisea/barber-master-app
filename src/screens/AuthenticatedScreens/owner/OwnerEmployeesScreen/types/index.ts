export type Employee = {
  id: number,
  publicId: string;
  ownerId: number,
  establishmentId: number;

  name: string;
  role: string;
  email: string;
  phone: string;

  createdAt: string;
  updatedAt: string;
}

export type EmployeeState = {
  establishmentId: number | null;
  isLoading: boolean;
  fetchCount: number;
  employees: Employee[];
};

export type EmployeeActions = {
  handleSelectedEstablishment: (establishmentId: number) => void;
  resetState: () => void;
  fetchEmployees: () => Promise<void>;
};

export type EmployeeStateStore = EmployeeState & EmployeeActions;
