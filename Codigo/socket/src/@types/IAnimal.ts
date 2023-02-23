export interface Animal {
  id: string;
  name: string;
  breed: string;
  gender: string;
  birth_date: Date;
  type: string;
  comments: string;
  available_for_adoption: boolean;
  clientId: string;
  ongId: string;
  userId?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  firebaseId: string;
  ongAuthId: string;
}

export interface AnimalCreatedPayload {
  animal: Animal;
  user: User;
}
