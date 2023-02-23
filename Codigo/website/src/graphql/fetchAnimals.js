import { gql } from "@apollo/client";

const FETCH_ANIMALS = gql`
  query GetAnimal {
    animals_availables {
      id
      breed
      gender
      name
      comments
      available_for_adoption
      birth_date
      type

      photos {
        url
      }
    }
  }
`;

export { FETCH_ANIMALS };
