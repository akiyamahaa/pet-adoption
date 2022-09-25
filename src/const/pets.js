const pets = [
  {
    pet: 'cats',
    pets: [
      {
        id: '1',
        name: 'Lily',
        image: require('../assets/cat1/main.png'),
        type: 'Chausie',
        age: '5 years old',
        gender: 'gender-female',
        distance: 3,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
      {
        id: '2',
        name: 'Lucy',
        image: require('../assets/cat2.png'),
        type: 'Bobtail',
        age: '2 years old',
        gender: 'gender-male',
        distance: 5,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
      {
        id: '3',
        name: 'Nala',
        image: require('../assets/cat3.png'),
        type: 'Ragamuffin',
        age: '2 years old',
        gender: 'gender-female',
        distance: 2,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
    ],
  },
  {
    pet: 'dogs',
    pets: [
      {
        id: '1',
        name: 'Ting Ting',
        image: require('../assets/dog1/main.png'),
        type: ' Husky',
        age: '3 years old',
        gender: 'gender-male',
        distance: 3,
        gallery: [
          require('../assets/dog1/dog1.jpeg'),
          require('../assets/dog1/dog2.jpeg'),
          require('../assets/dog1/dog3.jpeg'),
        ],
      },
      {
        id: '2',
        name: 'Max',
        image: require('../assets/dog2.png'),
        type: 'Alaska',
        age: '4 years old',
        gender: 'gender-male',
        distance: 2,
        gallery: [
          require('../assets/dog1/dog1.jpeg'),
          require('../assets/dog1/dog2.jpeg'),
          require('../assets/dog1/dog3.jpeg'),
        ],
      },
    ],
  },
  {
    pet: 'birds',
    pets: [
      {
        id: '1',
        name: 'Coco',
        image: require('../assets/bird1.png'),
        type: 'Parrot',
        age: '2 years old',
        gender: 'gender-male',
        distance: 12,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
      {
        id: '2',
        name: 'Alfie',
        image: require('../assets/bird2.png'),
        type: 'Parrot',
        age: '4 years old',
        gender: 'gender-female',
        distance: 14,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
    ],
  },
  {
    pet: 'bunnies',
    pets: [
      {
        id: '1',
        name: 'Boots',
        image: require('../assets/bunny1.png'),
        type: 'Angora',
        age: '1 years old',
        gender: 'gender-male',
        distance: 23,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
      {
        id: '2',
        name: 'Pookie',
        image: require('../assets/bunny2.png'),
        type: 'Angora',
        age: '1 years old',
        gender: 'gender-female',
        distance: 3,
        gallery: [
          require('../assets/cat1/1.jpeg'),
          require('../assets/cat1/2.jpeg'),
        ],
      },
    ],
  },
];

export default pets;
