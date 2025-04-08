
const chapters = [
  {
    "id": 5,
    "name": "Knowing Our Numbers",
    "lms_chapter": "Ch-1 Knowing Our Numbers",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 61,
    "name": "Whole Numbers",
    "lms_chapter": "Ch-2 Whole Numbers",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  // {
  //   "id": 237,
  //   "name": "Playing with Numbers",
  //   "lms_chapter": "Ch-3 Playing with Numbers",
  //   "courseid": 3,
  //   "fullname": "Class 6 - Maths"
  // },
  {
    "id": 291,
    "name": "Basic Geometrical Ideas",
    "lms_chapter": "Basic Geometrical Ideas",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 369,
    "name": "Understanding Elementary Shapes",
    "lms_chapter": "Understanding Elementary Shapes",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 40,
    "name": "Integers G6",
    "lms_chapter": "Integers",
    "grade": 6,
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 473,
    "name": "Fractions",
    "lms_chapter": "Fractions",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 510,
    "name": "Data Handling G6",
    "lms_chapter": "Data Handling",
    "grade": 6,
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 535,
    "name": "Decimals",
    "lms_chapter": "Decimals",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 536,
    "name": "Ratio and Proportion",
    "lms_chapter": "Ratio and Proportion",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 40,
    "name": "Mensuration G6",
    "grade": 6,
    "lms_chapter": "Mensuration",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 19925,
    "name": "Mensuration G8",
    "grade": 8,
    "lms_chapter": "Mensuration",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 538,
    "name": "Algebra",
    "lms_chapter": "Algebra",
    "courseid": 3,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 22,
    "name": "Food-where does it come from",
    "lms_chapter": "Ch-1 Food: Where Does it Come From?",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 51,
    "name": "Components of Food ",
    "lms_chapter": "Ch-2  Components of Food",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 102,
    "name": "Sorting Materials into Groups ",
    "lms_chapter": "Ch-4 Sorting Materials Into Groups",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 277,
    "name": "Separation of Substances",
    "lms_chapter": "Ch-3 Separation of Substances",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 354,
    "name": "Getting to know plants ",
    "lms_chapter": "Ch-4 Getting To Know Plants ",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 385,
    "name": "Light, shadow and reflection",
    "lms_chapter": "Light, Shadows, and Reflections",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 411,
    "name": "Body Movements",
    "lms_chapter": "Body Movements",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 464,
    "name": "Motion and Measurement ",
    "lms_chapter": "Motion and Measurement of Distances",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 515,
    "name": "The Living Organisms — Characteristics and Habitats",
    "lms_chapter": "The Living Organisms Characteristics and Habitats",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 539,
    "name": "Electricity and Circuit",
    "lms_chapter": "Electricity and Circuits",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 540,
    "name": "Air around us",
    "lms_chapter": "Air Around Us",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 541,
    "name": "Fun with magnets ",
    "lms_chapter": "Fun With Magnets",
    "courseid": 4,
    "fullname": "Class 6 - Science"
  },
  {
    "id": 31,
    "name": "Nutrition in plants",
    "lms_chapter": "Ch-1 Nutrition in Plants",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 69,
    "name": "Nutrition in animals",
    "lms_chapter": "Ch-2 Nutrition in Animals",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 115,
    "name": "Heat",
    "lms_chapter": "Ch-4 Heat",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 297,
    "name": "Acids bases and salts",
    "lms_chapter": "Acids, Bases and Salts",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 433,
    "name": "Motion and time",
    "lms_chapter": "Motion and Time",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 456,
    "name": "Physical and chemical changes",
    "lms_chapter": "Physical and Chemical Changes",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 487,
    "name": "Light",
    "lms_chapter": "Light",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 495,
    "name": "Respiration in Organisms",
    "lms_chapter": "Respiration in Organisms",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 542,
    "name": "Transportation in animals and plants",
    "lms_chapter": "Transportation in Animals and Plants",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 543,
    "name": "Reproduction in plants",
    "lms_chapter": "Reproduction in Plants",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 544,
    "name": "Waste water story",
    "lms_chapter": "Wastewater Story",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 545,
    "name": "Electric current and its effect",
    "lms_chapter": "Electric Current and its Effects",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 546,
    "name": "Forest - our lifeline",
    "lms_chapter": "Forests: Our Lifeline",
    "courseid": 5,
    "fullname": "Class 7 - Science"
  },
  {
    "id": 392,
    "name": "Integers G7",
    "lms_chapter": "Ch-1 Integers",
    "grade": 7,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 81,
    "name": "Fractions and Decimals",
    "lms_chapter": "Ch-2 Fractions and Decimals",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 255,
    "name": "Lines and Angles G7",
    "lms_chapter": "Ch-5 Lines and Angles",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 401,
    "name": "The Triangle and its Properties",
    "lms_chapter": "Triangle and Its Properties",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 419,
    "name": "Algebraic Expressions",
    "lms_chapter": "Algebraic Expression",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Algebraic Expressions - DAV",
    "lms_chapter": "Algebraic Expressions - DAV",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 527,
    "name": "Data Handling G7",
    "lms_chapter": "Data Handling7",
    "grade": 7,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 528,
    "name": "Simple Equations",
    "lms_chapter": "Simple Equation",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  // {
  //   "id": 529,
  //   "name": "Comparing Quantities",
  //   "lms_chapter": "Comparing Quantities",
  //   "courseid": 6,
  //   "fullname": "Class 7 - Maths"
  // },
  {
    "id": 19925,
    "name": "Rational Numbers G8",
    "lms_chapter": "Rational Numbers",
    "grade": 8,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 392,
    "name": "Rational Numbers G7",
    "lms_chapter": "Rational Numbers",
    "grade": 7,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  
  {
    "id": 40,
    "lms_chapter": "Symmetry",
    "name": "Symmetry G6",
    "grade": 6,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 392,
    "lms_chapter": "Symmetry",
    "name": "Symmetry G7",
    "grade": 7,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  
  {
    "id": 532,
    "name": "Perimeter and Area G7",
    "lms_chapter": "Perimeter and Area",
    "courseid": 6,
    "grade": 7,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 392,
    "name": "Exponents and Powers G7",
    "lms_chapter": "Exponents and Powers",
    "grade": 7,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 19925,
    "grade": 8,
    "name": "Exponents and Powers G8",
    "lms_chapter": "Exponents and Powers",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Chapter 1",
    "lms_chapter": "Chapter 1",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "The Fish Tale/Shapes and Numbers",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Shapes and Angles",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "How many squares?/Perimeter and area",
    "lms_chapter":"How Many Squares?",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Parts and wholes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Does it look the same?/Symmetry",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Be My Multiple, I'll be Your Factor/Factors and multiples",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Can you see the pattern?/Patterns",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Mapping Your Way/Maps and its scale",
    "lms_chapter":"Mapping Your Way",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Boxes and Sketches/3-D shapes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Tenths and Hundredths",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Area and its Boundary/Area and perimeter",
    "lms_chapter":"Area and its Boundary",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Smart charts/Data handling",
    "lms_chapter":"Smart Charts",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Ways to Multiply and Divide",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Bills",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Temperature",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "How big?How heavy?/Volume and mass",
    "lms_chapter":"How Big? How Heavy?",
    "courseid": 0,
    "fullname": "non LMS"
  },
  // {
  //   "id": 0,
  //   "name": "Rational Numbers",
  //   "courseid": 0,
  //   "fullname": "non LMS"
  // },
  {
    "id": 0,
    "name": "Linear equation in one variable",
    "lms_chapter": "Linear Equations in One Variable",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Understanding Quadrilaterals",
    "lms_chapter": "Understanding Quadrilaterals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Squares and square roots",
    "lms_chapter": "Squares and Square Roots",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Cubes and cube roots",
    "lms_chapter": "Cube and Cube Roots",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 19925,
    "lms_chapter": "Comparing Quantities",
    "grade": 8,
    "name": "Comparing Quantities G8",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 392,
    "lms_chapter": "Comparing Quantities",
    "grade": 7,
    "name": "Comparing Quantities G7",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Algebraic expressions and identities",
    "lms_chapter": "Algebraic Expressions and Identities",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Factorisation",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Direct and Inverse Proportions",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Introduction to Graphs",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 40,
    "grade": 6,
    "lms_chapter": "Practical Geometry",
    "name": "Practical Geometry G6",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 392,
    "grade": 7,
    "lms_chapter": "Practical Geometry",
    "name": "Practical Geometry G7",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 19925,
    "grade": 8,
    "lms_chapter": "Practical Geometry",
    "name": "Practical Geometry G8",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 19925,
    "name": "Visualising solid shapes G8",
    "grade": 8,
    "lms_chapter": "Visualising Solid Shapes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 392,
    "name": "Visualising solid shapes G7",
    "grade": 7,
    "lms_chapter": "Visualising Solid Shapes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 40,
    "name": "Playing with numbers G6",
    "lms_chapter": "Ch-3 Playing with Numbers",
    "courseid": 0,
    "grade": 6,
    "fullname": "non LMS"
  },
  {
    "id": 19925,
    "name": "Playing with numbers G8",
    "lms_chapter": "Playing with Numbers",
    "courseid": 0,
    "grade": 8,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Sources of Food",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Earth and Sky: Views and Perceptions(Sunita in space)",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Forest",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Natural disaster ",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Water as a resource",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Animal-Our friends",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Farming-Past and present",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Food spoilage and preservation (Mangoes all year round)",
    "courseid": 0,
    "lms_chapter": "Food Spoilage and Preservation (Mangoes all year round)",
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Exploring Magnets",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "From tasting to digesting",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Heredity ",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Human health",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Seeds and seeds",
    "lms_chapter":"Seeds and Seeds",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Super senses",
    "lms_chapter":"Super Senses",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Understanding temperature and human breathing (Blow hot, Blow cold)",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Experiments with water",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Fuel (what if it finishes) ",
    "lms_chapter":"Fuel (what if it finishes)",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Some natural phenomenon",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Chemical effect of Electric current",
    "lms_chapter": "Chemical Effects of Electric Current",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Force and pressure",
    "lms_chapter": "Force and Pressure",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Friction ",
    "lms_chapter": "Friction",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Sound",
    "lms_chapter": "Sound ",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Refraction of Light",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Conservation Of Plants And Animals",
    "lms_chapter": "Conservation of Plants and Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Crop production and management",
    "lms_chapter": "Crop Production and Management",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Microorganisms : Friend And Foe",
    "lms_chapter": "Microorganisms: Friend And Foe",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Reaching The Age Of Adolescence",
    "lms_chapter": "Reaching the Age of Adolescence",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Reproduction in Animals",
    "lms_chapter": "Reproduction in Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Combustion and Flame",
    "lms_chapter": "Combustion and Flame",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Coal and petroleum",
    "lms_chapter": "Coal and Petroleum",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Pollution of Air and water",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Synthetic Fibres and Plastics",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "The Cell - structure and function ",
    "courseid": 0,
    "lms_chapter": "Cell: Structure and Functions",
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Materials: metals and non-metals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Air",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "When Earth Shook",
    "courseid": 0,
    "fullname": "non LMS"
  }
  ,
  {
    "id": 0,
    "name": "Fuel ",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Soil",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Weather, climate and adaptation of animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Water",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Winds, storms and cyclones",
    "courseid": 0,
    "fullname": "non LMS"
  }
  ,
  {
    "id": 0,
    "name": "Stars and Solar system",
    "lms_chapter": "Stars and Solar system",
    "courseid": 0,
    "fullname": "non LMS"
  }
  ,
  {
    "id": 0,
    "name": "The Human Body",
    "lms_chapter": "The Human Body",
    "courseid": 0,
    "fullname": "non LMS"
  }
  ,
  {
    "id": 0,
    "name": "Structure and function of the living organisms-Animals",
    "lms_chapter": "Structure and function of the living organisms-Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Fibre to Fabric",
    "lms_chapter": "Fibre to Fabric",
    "grade": 7,
    "courseid": 0,
    "fullname": "non LMS"
  }, {
    "id": 0,
    "grade": 6,
    "name": "Fibre to Fabric",
    "lms_chapter": "Fibre to Fabric",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Chemical Substances and Processes",
    "lms_chapter": "Chemical Substances and Processes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Waste Management",
    "lms_chapter": "Waste Management",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Electric charges at rest ",
    "lms_chapter": "Electric charges at rest ",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Garbage in Garbage out",
    "lms_chapter": "Garbage in Garbage out",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "My body",
    "lms_chapter": "My body",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Plants",
    "lms_chapter": "Plants",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Work and energy ",
    "lms_chapter": "Work and energy ",
    "courseid": 0,
    "fullname": "non LMS"
  }, {
    "id": 0,
    "name": "The world of living",
    "lms_chapter": "The world of living",
    "courseid": 0,
    "fullname": "non LMS"
  },
  /// shadan here
  {
    "id": 0,
    "name": "Improvement in Food Resources",
    "lms_chapter": "Improvement in Food Resources",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Polynomials",
      "lms_chapter": "Polynomials",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Motion",
      "lms_chapter": "Motion ",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Number Systems",
      "lms_chapter": "Number System",
      "grade": 9, 
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Is Matter Around Us Pure?",
      "lms_chapter": "Is Matter Around Us Pure?",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Coordinate Geometry",
      "lms_chapter": "Coordinate Geometry",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Gravitation",
      "lms_chapter": "Gravitation",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Heron’s Formula",
      "lms_chapter": "Heron's Formula",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Matter in Our Surroundings",
      "lms_chapter": "Matter in Our Surroundings",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Surface Areas and Volumes",
      "lms_chapter": "Surface Areas and Volumes",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Atoms and Molecules",
      "lms_chapter": "Atoms and Molecules",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Circles",
      "lms_chapter": "Circles",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Work and Energy",
      "lms_chapter": "Work and Energy",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Introduction to Euclid’s Geometry",
      "lms_chapter": "Introduction to Euclid's Geometry",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Sound",
      "lms_chapter": "Sound",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Linear Equations in Two Variables",
      "lms_chapter": "Linear Equations in Two Variables",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Structure of the Atom",
      "lms_chapter": "Structure of Atom",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Quadrilaterals",
      "lms_chapter": "Quadrilaterals",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "The Fundamental Unit of Life",
      "lms_chapter": "The Fundamental Unit of Life",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Triangles",
      "lms_chapter": "Triangles",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Tissues",
      "lms_chapter": "Tissues",
      "courseid": 0,
      "fullname": "non LMS"
  },
  {
      "id": 0,
      "name": "Force and Laws of Motion",
      "lms_chapter": "Force and Laws of Motion",
      "courseid": 0,
      "fullname": "non LMS"
  },
  // -- done

  {//added by me shadan for test
    "id": 0,
    "name": "A Journey Through States of Water",
    "lms_chapter": "A Journey Through States of Water",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Materials Around Us",
    "lms_chapter": "Materials Around Us",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Diversity in the Living World",
    "lms_chapter": "Diversity in the Living World",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Methods of Separation in Everyday Life",
    "lms_chapter": "Methods of Separation in Everyday Life",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Playing with Constructions",
    "lms_chapter": "Playing with Constructions",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Mindful Eating: A Path to a Healthy Body",
    "lms_chapter": "Mindful Eating: A Path to a Healthy Body",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 421,
    "name": "Perimeter and Area G6",
    "lms_chapter": "Perimeter and Area",
    "courseid": 0 ,
    "grade": 6,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 0,
    "name": "Temperature and its Measurement",
    "lms_chapter": "Temperature and its Measurement",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Beyond Earth",
    "lms_chapter": "Beyond Earth",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Living Creatures: Exploring their Characteristics",
    "lms_chapter": "Living Creatures: Exploring their Characteristics",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Number play",
    "lms_chapter": "Number play",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Patterns in Mathematics",
    "lms_chapter": "Patterns in Mathematics",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Nature's treasure ",
    "lms_chapter": "Nature's treasure ",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Prime Time",
    "lms_chapter": "Prime Time",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Data Handling and Presentation",
    "lms_chapter": "Data Handling and Presentation",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 420,
    "name": "Lines and Angles G6",
    "lms_chapter": "Lines and Angles",
    "grade":6,
    "courseid": 6,
    "fullname": "Class 6 - Maths"
  },//
  {
    "id": 901,
    "name": "Lines and Angles G9",
    "lms_chapter": "Lines and Angles",
    "grade":6,
    "courseid": 6,
    "fullname": "Class 6 - Maths"
  },
  {
    "id": 1,
    "name": "Nutrition in living organisms-animals and man",
    "lms_chapter": "Nutrition in living organisms-animals and man",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 2,
    "name": "Metals and Non Metals",
    "lms_chapter": "Metals and Non Metals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 3,
    "name": "Our environment",
    "lms_chapter": "Our environment",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 4,
    "name": "Our solar system",
    "lms_chapter": "Our solar system",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 5,
    "name": "Observing The Sky",
    "lms_chapter": "Observing The Sky",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 6,
    "name": "Magnet",
    "lms_chapter": "Magnet",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 7,
    "name": "The human eye",
    "lms_chapter": "The human eye",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 8,
    "name": "Nature of matter",
    "lms_chapter": "Nature of matter",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 9,
    "name": "Plant life",
    "lms_chapter": "Plant life",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 10,
    "name": "Animal life",
    "lms_chapter": "Animal life",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 12,
    "name": "Living and non-living",
    "lms_chapter": "Living and non-living",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 13,
    "name": "The habitats and adaptations",
    "lms_chapter": "The habitats and adaptations",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 14,
    "name": "Electric Current and its Effects",
    "lms_chapter": "Electric Current and its Effects",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 15,
    "name": "Forest: Our Lifeline",
    "lms_chapter": "Forest: Our Lifeline",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 16,
    "name": "Safety and First Aid",
    "lms_chapter": "Safety and First Aid",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 17,
    "name": "States of Matter",
    "lms_chapter": "States of Matter",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 18,
    "name": "Chemical Changes",
    "lms_chapter": "Chemical Changes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 19,
    "name": "Air and water",
    "lms_chapter": "Air and water",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 20,
    "name": "Natural calamities",
    "lms_chapter": "Natural calamities",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 21,
    "name": "Rocks, minerals and soil",
    "lms_chapter": "Rocks, minerals and soil",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 22,
    "name": "Our Universe",
    "lms_chapter": "Our Universe",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 23,
    "name": "Work and Simple Machines",
    "lms_chapter": "Work and Simple Machines",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 24,
    "name": "Micro-Organisms",
    "lms_chapter": "Micro-Organisms",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 25,
    "name": "Changes around Us",
    "lms_chapter": "Changes Around Us1",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 26,
    "name": "Weather, Climate and Adaptations",
    "lms_chapter": "Weather, Climate and Adaptations",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 27,
    "name": "Stars and the Solar System",
    "lms_chapter": "Stars and the Solar System",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 28,
    "name": "Air and Water Pollution",
    "lms_chapter": "Air and Water Pollution",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 29,
    "name": "Sources of energy",
    "lms_chapter": "Sources of energy",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 30,
    "name": "Light, Shadows and Reflections",
    "lms_chapter": "Light, Shadows and Reflections",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 31,
    "name": "Kind of materials",
    "lms_chapter": "Kind of materials",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 32,
    "name": "Wastewater Management",
    "lms_chapter": "Wastewater Management",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 33,
    "name": "Habitat of the Living Things",
    "lms_chapter": "Habitat of the Living Things",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 34,
    "name": "Chemical Effects of Electric Current",
    "lms_chapter": "Chemical Effects of Electric Current",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 35,
    "name": "Transportation of Material in Humans and Plants",
    "lms_chapter": "Transportation of Material in Humans and Plants",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 36,
    "name": "Food Habits and Safe Handling of Food",
    "lms_chapter": "Food Habits and Safe Handling of Food",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 37,
    "name": "Cloth Materials",
    "lms_chapter": "Cloth Materials",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 38,
    "name": "Matter: Nature and Properties",
    "lms_chapter": "Matter: Nature and Properties",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 39,
    "name": "The Habitat of the Living",
    "lms_chapter": "The Habitat of the Living",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 4011,
    "name": "Forms and Functions of Animals",
    "lms_chapter": "Forms and Functions of Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 41,
    "name": "Water and Air",
    "lms_chapter": "Water and Air",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 42,
    "name": "Electric Current and Circuits",
    "lms_chapter": "Electric Current and Circuits",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 43,
    "name": "How do Animals Get Their Food?",
    "lms_chapter": "How do Animals Get Their Food?",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 44,
    "name": "Heat and Temperature",
    "lms_chapter": "Heat and Temperature",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 45,
    "name": "Chemical Changes",
    "lms_chapter": "Chemical Changes",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 46,
    "name": "Natural Fibres",
    "lms_chapter": "Natural Fibres",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 47,
    "name": "Classification of Substances — Acid and Base",
    "lms_chapter": "Classification of Substances — Acid and Base",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 48,
    "name": "Climate and Adaptation in Animals",
    "lms_chapter": "Climate and Adaptation in Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 49,
    "name": "Transportation in Human Beings and Animals",
    "lms_chapter": "Transportation in Human Beings and Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 50,
    "name": "Excretion in Human Beings and Animals",
    "lms_chapter": "Excretion in Human Beings and Animals",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 51,
    "name": "Transportation in Plants",
    "lms_chapter": "Transportation in Plants",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 52,
    "name": "Water — A Natural Resource",
    "lms_chapter": "Water — A Natural Resource",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 53,
    "name": "Forests — Our Lifeline",
    "lms_chapter": "Forests — Our Lifeline",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 54,
    "name": "Conservation of Biodiversity",
    "lms_chapter": "Conservation of Biodiversity",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 56,
    "name": "Stars and The Solar System",
    "lms_chapter": "Stars and The Solar System",
    "courseid": 0,
    "fullname": "non LMS"
  },
  {
    "id": 0,
    "name": "Multiplication and Division",
    "lms_chapter": "Multiplication and Division",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Addition and Subtraction",
    "lms_chapter": "Addition and Subtraction",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Basics of Geometry",
    "lms_chapter": "Basics of Geometry",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Time and Temperature",
    "lms_chapter": "Time and Temperature",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Measurement",
    "lms_chapter": "Measurement",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Patterns",
    "lms_chapter": "Patterns",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "Congruence of Triangles",
    "lms_chapter": "Congruence of Triangles",
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  }, {
    "id": 19925,
    "name": "Data Handling G8",
    "lms_chapter": "Data Handling",
    "grade": 8,
    "courseid": 6,
    "fullname": "Class 7 - Maths"
  },
  {
    "id": 0,
    "name": "no chapter",
    "lms_chapter": "/",
    "courseid": 0,
    "fullname": "non LMS"
  },

  /// ----- fix here -------

  {"id": 601, "name": "Sets G6", "lms_chapter": "Sets", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 701, "name": "Sets G7", "lms_chapter": "Sets", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 802, "name": "Sets G8", "lms_chapter": "Sets", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 602, "name": "Playing with Numbers (Including H.C.F. and L.C.M.) G6", "lms_chapter": "Playing with Numbers (Including H.C.F. and L.C.M.)", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 603, "name": "Ratio and Proportion (Including Unitary Method) G6", "lms_chapter": "Ratio and Proportion (Including Unitary Method)", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 604, "name": "The Leaf G6", "lms_chapter": "The Leaf", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 605, "name": "The Flower G6", "lms_chapter": "The Flower", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 606, "name": "The Cell G6", "lms_chapter": "The Cell", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 607, "name": "Human Digestive System G6", "lms_chapter": "Human Digestive System", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 608, "name": "Human Respiratory System G6", "lms_chapter": "Human Respiratory System", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 609, "name": "Human Circulatory System G6", "lms_chapter": "Human Circulatory System", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 803, "name": "Human Circulatory System G8", "lms_chapter": "Human Circulatory System", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 610, "name": "Health and Hygiene G6", "lms_chapter": "Health and Hygiene", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 804, "name": "Health and Hygiene G8", "lms_chapter": "Health and Hygiene", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 611, "name": "Adaptation G6", "lms_chapter": "Adaptation", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 612, "name": "Introduction to Chemistry G6", "lms_chapter": "Introduction to Chemistry", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 613, "name": "Elements, Compounds and Mixtures G6", "lms_chapter": "Elements, Compounds and Mixtures", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 805, "name": "Elements, Compounds and Mixtures G8", "lms_chapter": "Elements, Compounds and Mixtures", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 806, "name": "Matter G8", "lms_chapter": "Matter", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 614, "name": "Matter G6", "lms_chapter": "Matter", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 615, "name": "Air and Atmosphere G6", "lms_chapter": "Air and Atmosphere", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 702, "name": "Air and Atmosphere G7", "lms_chapter": "Air and Atmosphere", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 616, "name": "Physical Quantities and Measurement G6", "lms_chapter": "Physical Quantities and Measurement", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 703, "name": "Physical Quantities and Measurement G7", "lms_chapter": "Physical Quantities and Measurement", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 807, "name": "Physical Quantities and Measurement G8", "lms_chapter": "Physical Quantities and Measurement", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 617, "name": "Force G6", "lms_chapter": "Force", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 618, "name": "Energy G6", "lms_chapter": "Energy", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 704, "name": "Energy G7", "lms_chapter": "Energy", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 808, "name": "Energy G8", "lms_chapter": "Energy", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 705, "name": "Magnetism G7", "lms_chapter": "Magnetism", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 706, "name": "Unitary Method (Including Time and Work) G7", "lms_chapter": "Unitary Method (Including Time and Work)", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 707, "name": "Speed, Distance and Time G7", "lms_chapter": "Speed, Distance and Time", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 708, "name": "Inequalities G7", "lms_chapter": "Inequalities", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 809, "name": "Inequalities G8", "lms_chapter": "Inequalities", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 709, "name": "Kingdom Classification G7", "lms_chapter": "Kingdom Classification", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 710, "name": "Human Body G7", "lms_chapter": "Human Body", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 711, "name": "Allergy G7", "lms_chapter": "Allergy", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 712, "name": "Matter and its Composition G7", "lms_chapter": "Matter and its Composition", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 713, "name": "Elements, Compounds and Mixtures (experimental techniques) G7", "lms_chapter": "Elements, Compounds and Mixtures (experimental techniques)", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 714, "name": "Atomic Structure G7", "lms_chapter": "Atomic Structure", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 810, "name": "Atomic Structure G8", "lms_chapter": "Atomic Structure", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 715, "name": "Language of Chemistry G7", "lms_chapter": "Language of Chemistry", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 811, "name": "Language of Chemistry G8", "lms_chapter": "Language of Chemistry", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 716, "name": "Metals and Non-Metals G7", "lms_chapter": "Metals and Non-Metals", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 717, "name": "Force and Pressure: Motion G7", "lms_chapter": "Force and Pressure: Motion", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 718, "name": "Light Energy G7", "lms_chapter": "Light Energy", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 812, "name": "Light Energy G8", "lms_chapter": "Light Energy", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 719, "name": "Electricity and Magnetism G7", "lms_chapter": "Electricity and Magnetism", "courseid": 0, "grade": 7, "fullname": "non LMS"},
  {"id": 813, "name": "Electricity and Magnetism G8", "lms_chapter": "Electricity and Magnetism", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 814, "name": "Direct and Indirect Variation/Proportion G8", "lms_chapter": "Direct and Indirect Variation/Proportion", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 815, "name": "Transport of Food and Minerals in Plants G8", "lms_chapter": "Transport of Food and Minerals in Plants", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 816, "name": "Reproduction in Plants and Animals G8", "lms_chapter": "Reproduction in Plants and Animals", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 817, "name": "Ecosystems G8", "lms_chapter": "Eco System", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 818, "name": "Human endocrine system and adolescence G8", "lms_chapter": "Human endocrine system and adolescence", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 819, "name": "Human nervous system G8", "lms_chapter": "Human nervous system", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 820, "name": "Food production G8", "lms_chapter": "Food production", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 821, "name": "Chemical Reactions G8", "lms_chapter": "Chemical Reactions", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 822, "name": "Hydrogen G8", "lms_chapter": "Hydrogen", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 823, "name": "Carbon and Its Compounds G8", "lms_chapter": "Carbon and Its Compounds", "courseid": 0, "grade": 8, "fullname": "non LMS"},
  {"id": 824, "name": "Heat Transfer G8", "lms_chapter": "Heat Transfer", "courseid": 0, "grade": 8, "fullname": "non LMS"},

  {"id": 1000, "name": "Control and Coordination G10", "lms_chapter": "Control and Coordination", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1001, "name": "How do Organisms Reproduce? G10", "lms_chapter": "How do Organisms Reproduce?", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1002, "name": "Light - Reflection and Refraction G10", "lms_chapter": "Light - Reflection and Refraction", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1003, "name": "The Human Eye and the Colourful World G10", "lms_chapter": "The Human Eye and the Colourful World", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1004, "name": "Electricity G10", "lms_chapter": "Electricity", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1005, "name": "Magnetic Effects of Electric Current G10", "lms_chapter": "Magnetic Effects of Electric Current", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1006, "name": "Chemical Reactions and Equations G10", "lms_chapter": "Chemical Reactions and Equations", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1007, "name": "Acids, Bases and Salts G10", "lms_chapter": "Acids, Bases and Salts", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1008, "name": "Real Numbers G10", "lms_chapter": "Real Numbers", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1009, "name": "Arithmetic Progression G10", "lms_chapter": "Arithmetic Progression", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1010, "name": "Introduction to Trigonometry G10", "lms_chapter": "Introduction to Trigonometry", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1011, "name": "Some Applications of Trigonometry G10", "lms_chapter": "Some Applications of Trigonometry", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1012, "name": "Area Related to Circles G10", "lms_chapter": "Area Related to Circles", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1013, "name": "Probability G10", "lms_chapter": "Probability", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 1014, "name": "Constructions G10", "lms_chapter": "Constructions", "courseid": 0, "grade": 10, "fullname": "non LMS"},
  {"id": 619, "name": "Knowing Our Numbers G6", "lms_chapter": "Knowing Our Numbers", "courseid": 0, "grade": 6, "fullname": "non LMS"},
  {"id": 720,  "name": "Integers G7 ", "lms_chapter": "Integers","grade": 7,"courseid": 6, "fullname": "Class 7 - Maths"},
  {"id": 620,  "name": "Whole Numbers G6","lms_chapter": "Natural Numbers and Whole Numbers","courseid": 3, "grade": 6 ,"fullname": "Class 6 - Maths"},
 /// ------------
  
  {"id": 1015,
    "name": "Life Processes G10",
    "lms_chapter": "Life Processes",
    "grade": 10,
    "courseid": 0,
    "fullname": "Class 10 - Maths"
  },
  {
    "id": 900,
    "name": "Statistics",
    "lms_chapter": "Statistics",
    "grade": 9,
    "courseid": 0,
    "fullname": "Class 9 - Maths"
  },   
  {"id": 1016,
    "name": "Polynomials G10",
    "lms_chapter": "Polynomials",
    "grade": 10,
    "courseid": 0,
    "fullname": "Class 10 - Maths"
  },
  {
  "id": 1017,
    "name": "Quadratic Equations G10",
    "lms_chapter": "Quadratic Equations",
    "grade": 10,
    "courseid": 0,
    "fullname": "Class 10 - Maths"
  },
  {"id": 1018,
    "name": "Pair of Linear Equations in Two Variables G10",
    "lms_chapter": "Pair of Linear Equations in Two Variables",
    "grade": 10,
    "courseid": 0,
    "fullname": "Class 10 - Maths"
  },

];

export default chapters;
