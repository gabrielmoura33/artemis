import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Animal = {
  __typename?: 'Animal';
  adopted_by: Client;
  available_for_adoption: Scalars['Boolean'];
  birth_date: Scalars['DateTime'];
  breed: Scalars['String'];
  clientId?: Maybe<Scalars['String']>;
  comments: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  ong: Ong;
  ongId: Scalars['String'];
  photos: Array<AnimalsPhotoEntity>;
  type: Scalars['String'];
};

export type AnimalsPhotoEntity = {
  __typename?: 'AnimalsPhotoEntity';
  animalId: Scalars['String'];
  id: Scalars['String'];
  url: Scalars['String'];
};

export type AnimalsPhotoInput = {
  url: Scalars['String'];
};

export type Client = {
  __typename?: 'Client';
  age: Scalars['Float'];
  cpf: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateAnimalInput = {
  available_for_adoption?: InputMaybe<Scalars['Boolean']>;
  birth_date: Scalars['DateTime'];
  breed: Scalars['String'];
  clientId?: InputMaybe<Scalars['String']>;
  comments: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  ongId?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<AnimalsPhotoInput>>;
  type: Scalars['String'];
};

export type CreateClientInput = {
  age: Scalars['Float'];
  cpf: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
};

export type CreateDonationDto = {
  description: Scalars['String'];
  donatorsName: Scalars['String'];
  value: Scalars['Float'];
};

export type CreateEntryInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  firebaseOngId: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['Float'];
};

export type CreateOngInput = {
  city: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  region: Scalars['String'];
  whatsapp: Scalars['String'];
};

export type CreateUserInput = {
  birth_date: Scalars['DateTime'];
  cpf?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firebaseId: Scalars['String'];
  name: Scalars['String'];
  ongId: Scalars['String'];
};

export type Donation = {
  __typename?: 'Donation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  donator: Donator;
  donators: Array<Donator>;
  id: Scalars['ID'];
  status: DonationStatus;
  value: Scalars['Float'];
};

/** Available donation status */
export enum DonationStatus {
  Approved = 'APPROVED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type Donator = {
  __typename?: 'Donator';
  age: Scalars['Float'];
  cpf: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Entry = {
  __typename?: 'Entry';
  date: Scalars['DateTime'];
  description: Scalars['String'];
  firebaseOngId: Scalars['String'];
  id: Scalars['ID'];
  type: Scalars['String'];
  value: Scalars['Float'];
};

export type IAdoptAnimalData = {
  clientId: Scalars['String'];
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adoptAnimal: Animal;
  createAnimal: Animal;
  createClient: Client;
  createDonnation: Donation;
  createEntry: Entry;
  createOng: Ong;
  createUser: User;
  removeAnimal: Animal;
  removeClient: Client;
  removeDonation: Donation;
  removeEntry: Entry;
  removeUser: User;
  updateAnimal: Animal;
  updateClient: Client;
  updateDonation: Donation;
  updateEntry: Entry;
  updateUser: User;
  uploadFile: Scalars['Boolean'];
};


export type MutationAdoptAnimalArgs = {
  data: IAdoptAnimalData;
};


export type MutationCreateAnimalArgs = {
  createAnimalInput: CreateAnimalInput;
};


export type MutationCreateClientArgs = {
  createClientInput: CreateClientInput;
};


export type MutationCreateDonnationArgs = {
  data: CreateDonationDto;
};


export type MutationCreateEntryArgs = {
  createEntryInput: CreateEntryInput;
};


export type MutationCreateOngArgs = {
  createOngInput: CreateOngInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveAnimalArgs = {
  id: Scalars['String'];
};


export type MutationRemoveClientArgs = {
  id: Scalars['String'];
};


export type MutationRemoveDonationArgs = {
  id: Scalars['String'];
};


export type MutationRemoveEntryArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAnimalArgs = {
  updateAnimalInput: UpdateAnimalInput;
};


export type MutationUpdateClientArgs = {
  updateClientInput: UpdateClientInput;
};


export type MutationUpdateDonationArgs = {
  updateAnimalInput: UpdateDonationDto;
};


export type MutationUpdateEntryArgs = {
  updateEntryInput: UpdateEntryInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type Ong = {
  __typename?: 'Ong';
  city: Scalars['String'];
  email: Scalars['String'];
  firebaseId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  region: Scalars['String'];
  whatsapp: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  animal: Animal;
  animals: Array<Animal>;
  animals_availables: Array<Animal>;
  client: Client;
  clients: Array<Client>;
  donations: Array<Donation>;
  entries: Array<Entry>;
  entry: Array<Entry>;
  me: Ong;
  ongs: Array<Ong>;
  user: User;
  users: Array<User>;
};


export type QueryAnimalArgs = {
  id: Scalars['String'];
};


export type QueryClientArgs = {
  id: Scalars['String'];
};


export type QueryEntryArgs = {
  firebaseID: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UpdateAnimalInput = {
  available_for_adoption?: InputMaybe<Scalars['Boolean']>;
  birth_date?: InputMaybe<Scalars['DateTime']>;
  breed?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  ongId?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<AnimalsPhotoInput>>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateClientInput = {
  age?: InputMaybe<Scalars['Float']>;
  cpf?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateDonationDto = {
  id: Scalars['String'];
};

export type UpdateEntryInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  firebaseOngId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserInput = {
  birth_date?: InputMaybe<Scalars['DateTime']>;
  cpf?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firebaseId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  ongId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Animal: Array<Animal>;
  birth_date: Scalars['DateTime'];
  cpf: Scalars['String'];
  email: Scalars['String'];
  firebaseId: Scalars['String'];
  firebaseOngId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  work_on: Ong;
};

export type CreateAnimalMutationVariables = Exact<{
  name: Scalars['String'];
  breed: Scalars['String'];
  gender: Scalars['String'];
  birth_date: Scalars['DateTime'];
  type: Scalars['String'];
  comments: Scalars['String'];
  ongId: Scalars['String'];
  photos?: InputMaybe<Array<AnimalsPhotoInput> | AnimalsPhotoInput>;
}>;


export type CreateAnimalMutation = { __typename?: 'Mutation', createAnimal: { __typename?: 'Animal', name: string, id: string } };

export type CreateDonationMutationVariables = Exact<{
  description: Scalars['String'];
  value: Scalars['Float'];
  donatorsName: Scalars['String'];
}>;


export type CreateDonationMutation = { __typename?: 'Mutation', createDonnation: { __typename?: 'Donation', id: string, description: string } };

export type CreateEntryMutationVariables = Exact<{
  date: Scalars['DateTime'];
  description: Scalars['String'];
  firebaseOngId: Scalars['String'];
  value: Scalars['Float'];
  type: Scalars['String'];
}>;


export type CreateEntryMutation = { __typename?: 'Mutation', createEntry: { __typename?: 'Entry', id: string, description: string } };

export type CreateOngMutationVariables = Exact<{
  city: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  region: Scalars['String'];
  whatsapp: Scalars['String'];
}>;


export type CreateOngMutation = { __typename?: 'Mutation', createOng: { __typename?: 'Ong', id: string } };

export type RemoveAnimalMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveAnimalMutation = { __typename?: 'Mutation', removeAnimal: { __typename?: 'Animal', id: string } };

export type RemoveDonationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveDonationMutation = { __typename?: 'Mutation', removeDonation: { __typename?: 'Donation', id: string } };

export type RemoveEntryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveEntryMutation = { __typename?: 'Mutation', removeEntry: { __typename?: 'Entry', id: string } };

export type GetAnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimalsQuery = { __typename?: 'Query', animals: Array<{ __typename?: 'Animal', id: string, breed: string, gender: string, name: string, comments: string, available_for_adoption: boolean, birth_date: any, type: string }> };

export type GetDonationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDonationsQuery = { __typename?: 'Query', donations: Array<{ __typename?: 'Donation', id: string, value: number, description: string, status: DonationStatus, createdAt: any, donator: { __typename?: 'Donator', id: string, name: string } }> };

export type GetEntriesQueryVariables = Exact<{
  firebaseId: Scalars['String'];
}>;


export type GetEntriesQuery = { __typename?: 'Query', entry: Array<{ __typename?: 'Entry', id: string, value: number, date: any, firebaseOngId: string, type: string, description: string }> };


export const CreateAnimalDocument = gql`
    mutation CreateAnimal($name: String!, $breed: String!, $gender: String!, $birth_date: DateTime!, $type: String!, $comments: String!, $ongId: String!, $photos: [AnimalsPhotoInput!]) {
  createAnimal(
    createAnimalInput: {name: $name, breed: $breed, gender: $gender, birth_date: $birth_date, type: $type, comments: $comments, ongId: $ongId, photos: $photos}
  ) {
    name
    id
  }
}
    `;
export type CreateAnimalMutationFn = Apollo.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>;

/**
 * __useCreateAnimalMutation__
 *
 * To run a mutation, you first call `useCreateAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnimalMutation, { data, loading, error }] = useCreateAnimalMutation({
 *   variables: {
 *      name: // value for 'name'
 *      breed: // value for 'breed'
 *      gender: // value for 'gender'
 *      birth_date: // value for 'birth_date'
 *      type: // value for 'type'
 *      comments: // value for 'comments'
 *      ongId: // value for 'ongId'
 *      photos: // value for 'photos'
 *   },
 * });
 */
export function useCreateAnimalMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnimalMutation, CreateAnimalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnimalMutation, CreateAnimalMutationVariables>(CreateAnimalDocument, options);
      }
export type CreateAnimalMutationHookResult = ReturnType<typeof useCreateAnimalMutation>;
export type CreateAnimalMutationResult = Apollo.MutationResult<CreateAnimalMutation>;
export type CreateAnimalMutationOptions = Apollo.BaseMutationOptions<CreateAnimalMutation, CreateAnimalMutationVariables>;
export const CreateDonationDocument = gql`
    mutation CreateDonation($description: String!, $value: Float!, $donatorsName: String!) {
  createDonnation(
    data: {description: $description, value: $value, donatorsName: $donatorsName}
  ) {
    id
    description
  }
}
    `;
export type CreateDonationMutationFn = Apollo.MutationFunction<CreateDonationMutation, CreateDonationMutationVariables>;

/**
 * __useCreateDonationMutation__
 *
 * To run a mutation, you first call `useCreateDonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDonationMutation, { data, loading, error }] = useCreateDonationMutation({
 *   variables: {
 *      description: // value for 'description'
 *      value: // value for 'value'
 *      donatorsName: // value for 'donatorsName'
 *   },
 * });
 */
export function useCreateDonationMutation(baseOptions?: Apollo.MutationHookOptions<CreateDonationMutation, CreateDonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDonationMutation, CreateDonationMutationVariables>(CreateDonationDocument, options);
      }
export type CreateDonationMutationHookResult = ReturnType<typeof useCreateDonationMutation>;
export type CreateDonationMutationResult = Apollo.MutationResult<CreateDonationMutation>;
export type CreateDonationMutationOptions = Apollo.BaseMutationOptions<CreateDonationMutation, CreateDonationMutationVariables>;
export const CreateEntryDocument = gql`
    mutation CreateEntry($date: DateTime!, $description: String!, $firebaseOngId: String!, $value: Float!, $type: String!) {
  createEntry(
    createEntryInput: {date: $date, description: $description, firebaseOngId: $firebaseOngId, value: $value, type: $type}
  ) {
    id
    description
  }
}
    `;
export type CreateEntryMutationFn = Apollo.MutationFunction<CreateEntryMutation, CreateEntryMutationVariables>;

/**
 * __useCreateEntryMutation__
 *
 * To run a mutation, you first call `useCreateEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEntryMutation, { data, loading, error }] = useCreateEntryMutation({
 *   variables: {
 *      date: // value for 'date'
 *      description: // value for 'description'
 *      firebaseOngId: // value for 'firebaseOngId'
 *      value: // value for 'value'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateEntryMutation(baseOptions?: Apollo.MutationHookOptions<CreateEntryMutation, CreateEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEntryMutation, CreateEntryMutationVariables>(CreateEntryDocument, options);
      }
export type CreateEntryMutationHookResult = ReturnType<typeof useCreateEntryMutation>;
export type CreateEntryMutationResult = Apollo.MutationResult<CreateEntryMutation>;
export type CreateEntryMutationOptions = Apollo.BaseMutationOptions<CreateEntryMutation, CreateEntryMutationVariables>;
export const CreateOngDocument = gql`
    mutation CreateOng($city: String!, $email: String!, $name: String!, $region: String!, $whatsapp: String!) {
  createOng(
    createOngInput: {city: $city, email: $email, name: $name, region: $region, whatsapp: $whatsapp}
  ) {
    id
  }
}
    `;
export type CreateOngMutationFn = Apollo.MutationFunction<CreateOngMutation, CreateOngMutationVariables>;

/**
 * __useCreateOngMutation__
 *
 * To run a mutation, you first call `useCreateOngMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOngMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOngMutation, { data, loading, error }] = useCreateOngMutation({
 *   variables: {
 *      city: // value for 'city'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      region: // value for 'region'
 *      whatsapp: // value for 'whatsapp'
 *   },
 * });
 */
export function useCreateOngMutation(baseOptions?: Apollo.MutationHookOptions<CreateOngMutation, CreateOngMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOngMutation, CreateOngMutationVariables>(CreateOngDocument, options);
      }
export type CreateOngMutationHookResult = ReturnType<typeof useCreateOngMutation>;
export type CreateOngMutationResult = Apollo.MutationResult<CreateOngMutation>;
export type CreateOngMutationOptions = Apollo.BaseMutationOptions<CreateOngMutation, CreateOngMutationVariables>;
export const RemoveAnimalDocument = gql`
    mutation RemoveAnimal($id: String!) {
  removeAnimal(id: $id) {
    id
  }
}
    `;
export type RemoveAnimalMutationFn = Apollo.MutationFunction<RemoveAnimalMutation, RemoveAnimalMutationVariables>;

/**
 * __useRemoveAnimalMutation__
 *
 * To run a mutation, you first call `useRemoveAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAnimalMutation, { data, loading, error }] = useRemoveAnimalMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveAnimalMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAnimalMutation, RemoveAnimalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAnimalMutation, RemoveAnimalMutationVariables>(RemoveAnimalDocument, options);
      }
export type RemoveAnimalMutationHookResult = ReturnType<typeof useRemoveAnimalMutation>;
export type RemoveAnimalMutationResult = Apollo.MutationResult<RemoveAnimalMutation>;
export type RemoveAnimalMutationOptions = Apollo.BaseMutationOptions<RemoveAnimalMutation, RemoveAnimalMutationVariables>;
export const RemoveDonationDocument = gql`
    mutation RemoveDonation($id: String!) {
  removeDonation(id: $id) {
    id
  }
}
    `;
export type RemoveDonationMutationFn = Apollo.MutationFunction<RemoveDonationMutation, RemoveDonationMutationVariables>;

/**
 * __useRemoveDonationMutation__
 *
 * To run a mutation, you first call `useRemoveDonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDonationMutation, { data, loading, error }] = useRemoveDonationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveDonationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDonationMutation, RemoveDonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDonationMutation, RemoveDonationMutationVariables>(RemoveDonationDocument, options);
      }
export type RemoveDonationMutationHookResult = ReturnType<typeof useRemoveDonationMutation>;
export type RemoveDonationMutationResult = Apollo.MutationResult<RemoveDonationMutation>;
export type RemoveDonationMutationOptions = Apollo.BaseMutationOptions<RemoveDonationMutation, RemoveDonationMutationVariables>;
export const RemoveEntryDocument = gql`
    mutation RemoveEntry($id: String!) {
  removeEntry(id: $id) {
    id
  }
}
    `;
export type RemoveEntryMutationFn = Apollo.MutationFunction<RemoveEntryMutation, RemoveEntryMutationVariables>;

/**
 * __useRemoveEntryMutation__
 *
 * To run a mutation, you first call `useRemoveEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEntryMutation, { data, loading, error }] = useRemoveEntryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEntryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveEntryMutation, RemoveEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveEntryMutation, RemoveEntryMutationVariables>(RemoveEntryDocument, options);
      }
export type RemoveEntryMutationHookResult = ReturnType<typeof useRemoveEntryMutation>;
export type RemoveEntryMutationResult = Apollo.MutationResult<RemoveEntryMutation>;
export type RemoveEntryMutationOptions = Apollo.BaseMutationOptions<RemoveEntryMutation, RemoveEntryMutationVariables>;
export const GetAnimalsDocument = gql`
    query GetAnimals {
  animals {
    id
    breed
    gender
    name
    comments
    available_for_adoption
    birth_date
    type
  }
}
    `;

/**
 * __useGetAnimalsQuery__
 *
 * To run a query within a React component, call `useGetAnimalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnimalsQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimalsQuery, GetAnimalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimalsQuery, GetAnimalsQueryVariables>(GetAnimalsDocument, options);
      }
export function useGetAnimalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimalsQuery, GetAnimalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimalsQuery, GetAnimalsQueryVariables>(GetAnimalsDocument, options);
        }
export type GetAnimalsQueryHookResult = ReturnType<typeof useGetAnimalsQuery>;
export type GetAnimalsLazyQueryHookResult = ReturnType<typeof useGetAnimalsLazyQuery>;
export type GetAnimalsQueryResult = Apollo.QueryResult<GetAnimalsQuery, GetAnimalsQueryVariables>;
export const GetDonationsDocument = gql`
    query GetDonations {
  donations {
    id
    value
    description
    status
    createdAt
    donator {
      id
      name
    }
  }
}
    `;

/**
 * __useGetDonationsQuery__
 *
 * To run a query within a React component, call `useGetDonationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDonationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDonationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDonationsQuery(baseOptions?: Apollo.QueryHookOptions<GetDonationsQuery, GetDonationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDonationsQuery, GetDonationsQueryVariables>(GetDonationsDocument, options);
      }
export function useGetDonationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDonationsQuery, GetDonationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDonationsQuery, GetDonationsQueryVariables>(GetDonationsDocument, options);
        }
export type GetDonationsQueryHookResult = ReturnType<typeof useGetDonationsQuery>;
export type GetDonationsLazyQueryHookResult = ReturnType<typeof useGetDonationsLazyQuery>;
export type GetDonationsQueryResult = Apollo.QueryResult<GetDonationsQuery, GetDonationsQueryVariables>;
export const GetEntriesDocument = gql`
    query GetEntries($firebaseId: String!) {
  entry(firebaseID: $firebaseId) {
    id
    value
    date
    firebaseOngId
    type
    value
    description
  }
}
    `;

/**
 * __useGetEntriesQuery__
 *
 * To run a query within a React component, call `useGetEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntriesQuery({
 *   variables: {
 *      firebaseId: // value for 'firebaseId'
 *   },
 * });
 */
export function useGetEntriesQuery(baseOptions: Apollo.QueryHookOptions<GetEntriesQuery, GetEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntriesQuery, GetEntriesQueryVariables>(GetEntriesDocument, options);
      }
export function useGetEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntriesQuery, GetEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntriesQuery, GetEntriesQueryVariables>(GetEntriesDocument, options);
        }
export type GetEntriesQueryHookResult = ReturnType<typeof useGetEntriesQuery>;
export type GetEntriesLazyQueryHookResult = ReturnType<typeof useGetEntriesLazyQuery>;
export type GetEntriesQueryResult = Apollo.QueryResult<GetEntriesQuery, GetEntriesQueryVariables>;