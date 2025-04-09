export type EstablishmentService = {
  id: number,
  publicId: string;
  ownerId: number,
  establishmentId: number;
  name: string;

  description: string;
  duration: number;
  commissionEmployee: number;
  price: number;
}

export type EstablishmentServiceState = {
  establishmentId: number | null;
  isLoading: boolean;
  fetchCount: number;
  establishmentServices: EstablishmentService[];
};

export type EstablishmentServiceActions = {
  handleSelectedEstablishment: (establishmentId: number) => void;
  resetState: () => void;
  fetchEstablishmentServices: () => Promise<void>;
};

export type EstablishmentServiceStore = EstablishmentServiceState & EstablishmentServiceActions;
