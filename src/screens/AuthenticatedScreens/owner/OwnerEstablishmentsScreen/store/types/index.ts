export type Establishment = {
  id: number,
  publicId: string;
  ownerId: number,
  phone: string;
  name: string;
  address: string;
}

export type State = {
  isLoading: boolean;
  fetchCount: number;
  establishments: Establishment[];
};

export type Actions = {
  fetchEstablishments: () => Promise<void>;
  resetState: () => void;
};

export type Store = State & Actions;
