const topics = [
  {
    "grade": "6",
    "subject": "Biology",
    "chapters": [
      {
        "name": "Components of Food",
        "topics": [
          "Nutrients",
          "Carbohydrates, Proteins and Fats(Macronutrients)",
          "Importance of nutrients",
          "Balanced diet and deficiency diseases"
        ]
      },
      {
        "name": "Getting to know plants",
        "topics": [
          "Types of plants",
          "Stem",
          "Leaf",
          "Roots",
          "Flower"
        ]
      },
      {
        "name": "Body Movements",
        "topics": [
          "Human body and its movements",
          "Types of Joints in Humans",
          "Human skeletal system",
          "Gait of animals"
        ]
      },
      {
        "name": "The Living Organisms Characteristics and Habitats",
        "topics": [
          "Diversity of organisms and their surroundings",
          "Habitat and Adaptation",
          "Terrestrial habitat",
          "Aquatic Habitat",
          "What is alive?"
        ]
      }
    ]
  },
  {
    "grade": "6",
    "subject": "Chemistry",
    "chapters": [
      {
        "name": "Sorting Materials into Groups",
        "topics": [
          "Objects Around Us",
          "Appearance and hardness as the properties of materials",
          "Solubility in water as the property of materials",
          "Transparency as a property of materials"
        ]
      },
      {
        "name": "Separation of Substances",
        "topics": [
          "Introduction to the need of separating substances",
          "Handpicking, threshing, winnowing, and sieving",
          "Sedimentation, Decantation and filtration",
          "Evaporation and condensation",
          "Separating substances by combining multiple method of separations",
          "Solutions(water as the solvent)"
        ]
      },
      {
        "name": "Air around Us",
        "topics": [
          "Presence of air",
          "Composition of air",
          "Oxygen for Survival",
          "Importance of air"
        ]
      }
    ]
  },
  {
    "grade": "6",
    "subject": "Physics",
    "chapters": [
      {
        "name": "Motion and Measurement of distances",
        "topics": [
          "Distance and Measurement",
          "Standard units of measurements",
          "Correct way of measurement",
          "Measurement of curved line and Understanding motion",
          "Types of motion"
        ]
      },
      {
        "name": "Light, Shadows and reflections",
        "topics": [
          "Visibility through Objects",
          "Introductions to Shadows",
          "Application of Shadows",
          "Pinhole camera",
          "Reflection"
        ]
      },
      {
        "name": "Electricity and circuits",
        "topics": [
          "Electricity in daily life",
          "Electric cell and Electric Bulb",
          "Electric circuit",
          "Electrical Conductor and Insulator"
        ]
      },
      {
        "name": "Fun with magnets",
        "topics": [
          "Introduction to Magnets",
          "Poles of Magnet",
          "Directive Property of a Bar Magnet",
          "Make your own magnet",
          "Attraction and Repulsion"
        ]
      }
    ]
  },
  {
    "grade": "7",
    "subject": "Biology",
    "chapters": [
      {
        "name": "Nutrition in Plants",
        "topics": [
          "Modes of nutrition",
          "Autotrophic nutrition",
          "Different types of modes of nutrition in plants",
          "Saprotrophs",
          "Symbiotic relationship"
        ]
      },
      {
        "name": "Nutrition in Animals",
        "topics": [
          "Modes of procuring food",
          "Human Digestive System",
          "Upper region of alimentary canal",
          "Middle and Lower region of alimentary canal",
          "Digestion in herbivores and amoeba"
        ]
      },
      {
        "name": "Respiration in Organisms",
        "topics": [
          "Why do we respire?",
          "Breathing in humans",
          "Human Respiratory System",
          "What do we breathe out",
          " Breathing in Other Animals \n ",
          "Respiration in Plants"
        ]
      },
      {
        "name": "Transportation in Animals and Plants",
        "topics": [
          "Organs of human circulatory system",
          "Blood circulation in humans",
          "Excretory system in organisms",
          "Transportation in plants"
        ]
      },
      {
        "name": "Reproduction in Plants",
        "topics": [
          "Modes of reproduction and asexual mode of reproduction in plants",
          "Asexual mode of reproduction in various organisms",
          "Terms associated with sexual reproduction in plants",
          "From Fertilisation to seed dispersal mechanisms in plants"
        ]
      },
      {
        "name": "Forests: Our Lifeline",
        "topics": [
          "Structure of Forest",
          "Life inside the forest",
          "A life without forests?"
        ]
      }
    ]
  },
  {
    "grade": "7",
    "subject": "Chemistry",
    "chapters": [
      {
        "name": "Acids, Bases, and Salts",
        "topics": [
          "Acids and Bases",
          "Natural Indicators",
          "Neutralisation reaction"
        ]
      },
      {
        "name": "Physical and Chemical Changes",
        "topics": [
          "Physical changes",
          "Chemical changes",
          "Crystallisation and Rusting of iron"
        ]
      },
      {
        "name": "Wastewater Story",
        "topics": [
          "Water: Our lifeline",
          "Water freshens up",
          "Wastewater Treatment Plant (WWTP)",
          "Better Houskeeping practices"
        ]
      }
    ]
  },
  {
    "grade": "7",
    "subject": "Physics",
    "chapters": [
      {
        "name": "Heat",
        "topics": [
          "Temperature and Thermometers",
          "Clinical Thermometer",
          "Laboratory Thermometer",
          "Conduction",
          "Convection",
          "Radiation"
        ]
      },
      {
        "name": "Motion and Time",
        "topics": [
          "Time",
          "Simple Pendulum",
          "Speed",
          "Measuring speed",
          "Formula of speed",
          "Distance-time graph"
        ]
      },
      {
        "name": "Electric Current and its Effects",
        "topics": [
          "Symbols of Electric Components",
          "Circuit Diagram",
          "Heating Effect of Electric Current",
          "Electric Fuses and MCBs",
          "Magnetic Effect of Electric Current",
          "Electromagnet and Electric Bell"
        ]
      },
      {
        "name": "Light",
        "topics": [
          "Reflection of light",
          "Mirrors and Types of Images",
          "Concave and Convex Mirror",
          "Lens",
          "Sunlight-white or coloured?"
        ]
      }
    ]
  },
  {
    "grade": "8",
    "subject": "Biology",
    "chapters": [
      {
        "name": "Crop Production and Management",
        "topics": [
          "Agricultural Practices",
          "Soil preparation and sowing for crop production",
          "Soil replenishment methods for crop production",
          "Irrigation methods for crop production",
          "Crop protection, harvesting, and storage methods"
        ]
      },
      {
        "name": "Microorganisms: Friend and Foe",
        "topics": [
          "Introduction to Microorganisms",
          "Using Microorganisms for Fermentation",
          "Role of Microbes in environment health",
          "Medicinal Uses of Microorganisms",
          "Harmful Microorganisms and food preservation methods",
          "Nitrogen Cycle"
        ]
      },
      {
        "name": "Conservation of Plants and Animals",
        "topics": [
          "Deforestation causes and consequences",
          "Conservation of forest and wildlife",
          "National Parks and project tiger",
          "Extinct and endangered species (Red data book)and migration of animals",
          "Recycling of paper and reforestation"
        ]
      },
      {
        "name": "Reproduction in Animals",
        "topics": [
          "Types of reproduction and asexual mode of reproduction in animals",
          "Reproductive System in Humans",
          "Reproductive Patterns",
          "Young ones to adults"
        ]
      },
      {
        "name": "Reaching the age of Adolescence",
        "topics": [
          "Adolescence and Puberty",
          "Reproductive phase and sex determination in humans",
          "Role of hormones (other than sex hormones) in humans, insects and frog, and adolescent reproductive health"
        ]
      }
    ]
  },
  {
    "grade": "8",
    "subject": "Chemistry",
    "chapters": [
      {
        "name": "Coal and Petroleum",
        "topics": [
          "Resources in Nature",
          "Coal: Formation and Products",
          "Petroleum(formation and products)",
          "Natural gas and Conservation of resources"
        ]
      },
      {
        "name": "Combustion and Flame",
        "topics": [
          "Combustion",
          "Requirements for combustion",
          "How Do We Control Fire?",
          "Types of Combustion",
          "Flame",
          "Fuel and its types",
          "Harmful Effects of Burning Fuels"
        ]
      },
      {
        "name": "Chemical Effects of Electric Current",
        "topics": [
          "Conduction through liquids",
          "Why Do Liquids Conduct Electricity?",
          "Chemical Effects of Electric Current in Liquids",
          "Electroplating"
        ]
      }
    ]
  },
  {
    "grade": "8",
    "subject": "Physics",
    "chapters": [
      {
        "name": "Force and Pressure",
        "topics": [
          "Introduction to force",
          "Effects of force",
          "Types of Force",
          "Introduction to Pressure",
          "Pressure Exerted by Liquids and Gases"
        ]
      },
      {
        "name": "Friction",
        "topics": [
          "Force of friction and the factors affecting it",
          "Types of Friction",
          "Friction : A Necessary Evil",
          "Manipulating Friction Forces / Increasing and Reducing Friction",
          "Fluid Friction"
        ]
      },
      {
        "name": "Sound",
        "topics": [
          "Vibration and Sound",
          "Production of Sound in Humans and Animals",
          "Propagation of Sound",
          "Hearing in Humans",
          "Characteristics of Sound",
          "Fundamentals of Sound Perception",
          "Noise Pollution: Causes, Impacts, and Solutions"
        ]
      },
      {
        "name": "Some Natural Phenomenon",
        "topics": [
          "Charges and their interaction",
          "Transfer of charge",
          "Lightning",
          "Lightening Safety",
          "Earthquakes and its Causes",
          "Measurement and effects of earthquakes",
          "Protection against Earthquakes"
        ]
      },
      {
        "name": "Light",
        "topics": [
          "Visibility and Reflection of Light",
          "Image formation by plane mirror",
          "Types of Reflection: Regular and Diffused Reflection",
          "Multiple Reflection: Principle and Applications",
          "Dispersion of Light",
          "Structure of Human Eye",
          "Working of Human Eye",
          "Aids for visually impaired people"
        ]
      }
    ]
  },
  {
    "grade": "6",
    "subject": "Mathematics",
    "chapters": [
      {
        "name": "Knowing Our Numbers",
        "topics": [
          "Introduction to large numbers",
          "Comparison of large numbers",
          "Indian and international system of numeration",
          "Practical applications of large numbers and unit conversion",
          "Addition and subtraction of large numbers",
          "Multiplication and division of large numbers"
        ]
      },
      {
        "name": "Whole Numbers",
        "topics": [
          "Introduction to Whole Numbers",
          "Operations of Whole Numbers (Addition, Subtraction, Multiplication)",
          "Mixed operations of Whole Numbers"
        ]
      },
      {
        "name": "Playing with numbers",
        "topics": [
          "Factors",
          "Multiples",
          "Prime and composite numbers",
          "Rules for Divisibility of Numbers (2, 5, and 10)",
          "Rules for Divisibility of Numbers (3, 6, and 9)",
          "Rules for Divisibility of Numbers (4, 8, and 11)",
          "Common factors, Common multiples, Co-primes",
          "Prime factorisation",
          "HCF",
          "LCM"
        ]
      },
      {
        "name": "Basic geometrical ideas",
        "topics": [
          "Introduction (Point, line segment, ray, line)",
          "Pair of lines (intersecting and parallel lines)",
          "Curves",
          "Polygons",
          "Angles",
          "Circle"
        ]
      },
      {
        "name": "Understanding Elementary Shapes",
        "topics": [
          "Measuring line segments",
          "Types of Angles (Right, Straight, complete)",
          "Types of Angles (Acute, Obtuse, Reflex)",
          "Measuring Angles",
          "Perpendicular Lines",
          "Classification of triangles (based on sides)",
          "Classification of triangles (based on angles)",
          "Classification of triangles (isosceles and scalene) based on angles",
          "Quadrilaterals: Trapezium, Parallelogram and Rhombus",
          "Quadrilaterals: Rectangle and Square",
          "Classification of polygons"
        ]
      },
      {
        "name": "Integers",
        "topics": [
          "Introduction to Negative Numbers",
          "Introduction to Integers",
          "Ordering of integers",
          "Operations of Integers - Addition",
          "Operations of Integers - Subtraction",
          "Mixed Operations of Integers - Addition and subtraction"
        ]
      },
      {
        "name": "Fractions",
        "topics": [
          "Fractions on a number line",
          "Proper and Improper Fractions",
          "Mixed fractions and interconversion of mixed fraction to improper fraction",
          "Equivalent fractions, Simplest form of a fraction",
          "Like and Unlike fractions (Comparing like and unlike fractions)",
          "Addition and subtraction of like fractions",
          "Addition and subtraction of unlike fractions",
          "Addition and subtraction of mixed fractions"
        ]
      },
      {
        "name": "Decimals",
        "topics": [
          "Introduction to Decimals",
          "Comparison of decimals",
          "Conversion between mixed units into a single decimal representation (Money, length, weight)",
          "Addition of\ndecimals",
          "Subtraction of decimals"
        ]
      },
      {
        "name": "Data Handling",
        "topics": [
          "Introduction to Data",
          "Tally Chart",
          "Pictograph and its interpretation"
        ]
      },
      {
        "name": "Mensuration",
        "topics": [
          "Understanding Perimeter",
          "Perimeter of a rectangle and regular shapes",
          "Understanding area",
          "Area of shapes using formula",
          "Area of composite shapes"
        ]
      },
      {
        "name": "Algebra",
        "topics": [
          "Introduction to variable",
          "Use of variables in common rule"
        ]
      },
      {
        "name": "Ratio and proportion",
        "topics": [
          "Introduction to ratio",
          "More on ratios",
          "Proportion",
          "Unitary method"
        ]
      }
    ]
  },
  {
    "grade": "7",
    "subject": "Mathematics",
    "chapters": [
      {
        "name": "Integers",
        "topics": [
          "Closure and commutative property of addition of integers",
          "Associative property for addition of integers",
          "Properties of subtraction of integers",
          "Multiplication of two integers",
          "Multiplication of three or more negative integers",
          "Closure and commutative property of multiplication of integers",
          "Associative property for multiplication of integers",
          "Distributive property",
          "Division of integers",
          "Properties of division of integers"
        ]
      },
      {
        "name": "Fractions and Decimals",
        "topics": [
          "Multiplication of Fraction by a Whole Number",
          "Multiplication of fraction by a fraction",
          "Division of a whole number by a fraction",
          "Division of a fraction by a whole number",
          "Division of a fraction by another fraction",
          "Multiplication of decimal by a whole number",
          "Multiplication of decimal by decimal",
          "Division of decimal by a whole number",
          "Division of decimal by decimal"
        ]
      },
      {
        "name": "Data Handling",
        "topics": [
          "Representative values (Central tendency, arithmetic mean, range)",
          "Mode",
          "Median",
          "Bar graph",
          "Double bar graph"
        ]
      },
      {
        "name": "Simple Equations",
        "topics": [
          "Setting up an equation",
          "Solving equations by trial and error method",
          "Solving equations by a systematic method",
          "Solving equations by transpose method",
          "Applications of simple equations to practical situations"
        ]
      },
      {
        "name": "Lines and Angles",
        "topics": [
          "Introduction to related angles (complementary angles and supplementary angles)",
          "Adjacent angles and Linear pair",
          "Vertically opposite angles",
          "Pairs of lines and a transversal",
          "Interior angles made by transversal",
          "Exterior angles made by transversal",
          "Corresponding angles made by transversal",
          "Checking for parallel lines"
        ]
      },
      {
        "name": "Comparing Quantities",
        "topics": [
          "Percentage: Another way of comparing quantities",
          "Convert fractions/decimal to percentages",
          "Convert percentages to fractions/decimals",
          "Use of percentages",
          "Ratio to percentages",
          "Increase or decrease as percentage",
          "Profit or loss",
          "Profit or loss as percentage",
          "Simple interest"
        ]
      },
      {
        "name": "Rational Numbers",
        "topics": [
          "Introduction to rational numbers",
          "Equivalent rational numbers, Positive and negative rational numbers",
          "Rational numbers on a number line and their standard form",
          "Comparison of rational numbers",
          "Rational numbers between two rational numbers and pattern involving rational numbers",
          "Addition of rational numbers",
          "Subtraction of rational numbers",
          "Multiplication of rational numbers",
          "Division of rational numbers"
        ]
      },
      {
        "name": "Algebraic Expressions",
        "topics": [
          "Introduction to algebraic expression",
          "Terms of Algebraic Expression",
          "Like and Unlike terms",
          "Classification of algebraic expressions",
          "Evaluation of Algebraic Expressions"
        ]
      },
      {
        "name": "Symmetry",
        "topics": [
          "Symmetry and reflection in a mirror",
          "Lines of symmetry",
          "Rotational symmetry",
          "Line symmetry and rotational symmetry"
        ]
      },
      {
        "name": "Perimeter and Area",
        "topics": [
          "Area of a parallelogram",
          "Area of a triangle",
          "Circumference of a circle",
          "Area of a circle",
          "Area of combination of 2D shapes",
          "Concentric Circles"
        ]
      },
      {
        "name": "Exponents and Powers",
        "topics": [
          "Introduction to exponential form of numbers",
          "Converting numbers to exponential form (Whole numbers and Integers)",
          "Converting rational numbers to exponential form",
          "Comparison of exponents",
          "Product law of powers with same base",
          "Quotient law of powers with same base",
          "Product law of powers with the same exponent",
          "Quotient law of powers with the same exponent",
          "Law of power of a power",
          "Practical application of exponent laws with whole numbers",
          "Standard form"
        ]
      },
      {
        "name": "The Triangle and its properties",
        "topics": [
          "Introduction to median and altitude of a triangle",
          "Exterior angle property of a triangle",
          "Angle sum property of a triangle",
          "Two special triangles (Equilateral and Isosceles)",
          "Relation between sides of a triangle",
          "Right-angled triangle and Pythagoras property"
        ]
      },
      {
        "name": "Visualising solid shapes",
        "topics": [
          "Introduction: Plane figures and solid shapes",
          "Faces, edges, and vertices of 3-D shapes (Cube, cuboid, prisms)",
          "Faces, edges, and vertices of 3-D shapes (Cone, cylinder, pyramid)",
          "Nets for 3-D shapes (Cube, cuboid, prisms)",
          "Nets for 3-D shapes (Cone, cylinder, pyramid)",
          "Oblique sketches of solids",
          "Isometric sketches of solids",
          "View an object (cube, cuboid, pyramid) by cutting or slicing",
          "View an object (cone, cylinder, sphere) by cutting or slicing",
          "View an object (Shadow play)",
          "View an object from the certain angles",
          "Sectional views and 3-D shape visualization"
        ]
      }
    ]
  },
  {
    "grade": "8",
    "subject": "Mathematics",
    "chapters": [
      {
        "name": "Rational Numbers",
        "topics": [
          "Closure property for operations of rational numbers",
          "Commutative property for operations of rational numbers",
          "Associative property for operations of rational numbers",
          "Distributive property of multiplication over addition and subtraction of rational numbers",
          "Application of combination of properties of rational numbers"
        ]
      },
      {
        "name": "Linear Equations in One Variable",
        "topics": [
          "Reducing Equations to Simpler form",
          "Solving Equations having the Variable on both sides",
          "Application of Linear Equations"
        ]
      },
      {
        "name": "Understanding Quadrilaterals",
        "topics": [
          "Polygons (Convex and Concave Polygons, Regular and Irregular Polygons)",
          "Sum of the measures of a interior angle of a polygon",
          "Sum of the measures of a exterior angle of a polygon",
          "Trapezium and Kite",
          "Parallelogram",
          "Rhombus, Rectangle and Square"
        ]
      },
      {
        "name": "Data Handling",
        "topics": [
          "Circle graph/pie chart",
          "Chance and probability"
        ]
      },
      {
        "name": "Squares and Square Roots",
        "topics": [
          "Square Numbers and Their Properties",
          "Patterns in Square Numbers",
          "More Patterns in Square Numbers",
          "Finding the Square of a  Number",
          "Square Roots",
          "Methods of Finding the Square Roots",
          "Square and Square Root of Decimals"
        ]
      },
      {
        "name": "Cube and Cube Roots",
        "topics": [
          "Cube Numbers",
          "Patterns involving cubic numbers",
          "Cubes and Their Prime Factors",
          "Cube Roots"
        ]
      },
      {
        "name": "Comparing Quantities",
        "topics": [
          "Discount",
          "Problems on Discount, Profit and Loss",
          "Sales Tax/ VAT/ GST",
          "Compound Interest",
          "Applications of Compound Interest (Growth and depreciation)"
        ]
      },
      {
        "name": "Algebraic Expressions and Identities",
        "topics": [
          "Addition and subtraction of algebraic expressions",
          "Multiplication of a Monomial by a Polynomial",
          "Multiplication of a Binomial by a Polynomial",
          "Multiplication of Polynomials",
          "Algebraic Identities"
        ]
      },
      {
        "name": "Mensuration",
        "topics": [
          "Area of General Quadrilaterals, trapezium and rhombus",
          "Area of polygon",
          "Surface Area of a Cube and Cuboid",
          "Cylinder and its Surface Area",
          "Volume of a Cube and Cuboid",
          "Volume of a Cylinder and Capacity"
        ]
      },
      {
        "name": "Exponents and Powers",
        "topics": [
          "Law of Power with Negative Exponent",
          "Application of Multiple Laws of Exponent",
          "Interconversion between numbers and standard form",
          "Comparison of Numbers Involving Exponents",
          "Addition of Large Numbers Using Exponents"
        ]
      },
      {
        "name": "Direct and Inverse Proportions",
        "topics": [
          "Direct Proportion",
          "Inverse Proportion",
          "Applications of Direct and Inverse Proportions"
        ]
      },
      {
        "name": "Factorisation",
        "topics": [
          "Factorisation of algebraic expressions",
          "Methods to Factorise an Algebraic Expressions",
          "Factorisation of an Algebraic Expressions Using Identities",
          "Division of Polynomials"
        ]
      },
      {
        "name": "Introduction to Graphs",
        "topics": [
          "Points on a plane",
          "Line Graph",
          "Linear Graph"
        ]
      }
    ]
  },
  {
    "grade": "9",
    "subject": "Mathematics",
    "chapters": [
      {
        "name": "Number Systems",
        "topics": [
          "Real Numbers and their representation on number line",
          "Real Numbers and their Decimal Expansions",
          "Operations on Rational and Irrational Numbers",
          "Operation on Irrational Numbers",
          "nth root of a positive real number",
          "Simplificaion of expressions involving square roots using identities",
          "Square Root Identities for Positive Real Numbers",
          "Applying square root identities",
          "Rationalising the denominator",
          "Laws of Exponents for Real Numbers"
        ]
      },
      {
        "name": "Polynomials",
        "topics": [
          "Introduction to Polynomial",
          "Classification of polynomials based on degree",
          "General form and value of polynomial in one variable",
          "Zeroes of a Polynomial",
          "Factorisation of polynomials",
          "Factorisation using algebraic identities - I",
          "Factorisation using algebraic identities - II",
          "Factorisation using algebraic identities - III",
          "Factorisation using algebraic identities - IV",
          "Factorisation using algebraic identities - V"
        ]
      },
      {
        "name": "Coordinate Geometry",
        "topics": [
          "Introduction to Cartesian Plane",
          "Coordinates of a Point in Different Quadrants"
        ]
      },
      {
        "name": "Linear Equations in Two Variables",
        "topics": [
          "Introduction to Linear Equation in Two Variables",
          "Solution of Linear Equations"
        ]
      },
      {
        "name": "Introduction to Euclids Geometry",
        "topics": [
          "Euclids Definitions",
          "Euclids Axioms",
          "Euclids Postulates"
        ]
      },
      {
        "name": "Lines and Angles",
        "topics": [
          "Pairs of Angles - I",
          "Pairs of Angles - II",
          "Lines Parallel to the Same Line"
        ]
      },
      {
        "name": "Triangles",
        "topics": [
          "Introduction to Congruence",
          "Criteria for Congruence of Triangles",
          "Properties of a Triangle",
          "More Criteria for Congruence of Triangles"
        ]
      },
      {
        "name": "Quadrilaterals",
        "topics": [
          "Theorems of Parallelograms - I",
          "Theorems of Parallelograms - II",
          "Theorems of Parallelograms - III",
          "Mid Point Theorem and its Converse"
        ]
      },
      {
        "name": "Circles",
        "topics": [
          "Theorems on Equality of Chords and Angles in a Circle",
          "Theorems on Perpendicular from the Centre to a Chord",
          "Equal Chords and their Distances from the Centre",
          "Angle Subtended by an Arc of a Circle",
          "Theorems on Angles in a Segment",
          "Cyclic Quadrilaterals"
        ]
      },
      {
        "name": "Herons formula",
        "topics": [
          "Area of a Triangle using Herons Formula"
        ]
      },
      {
        "name": "Surface Areas and Volumes",
        "topics": [
          "Surface Area of a Right Circular Cone",
          "Surface Area of a Sphere",
          "Surface Area of a Hemisphere",
          "Volume of a Sphere and Hemisphere",
          "Volume of a Right Circular Cone"
        ]
      },
      {
        "name": "Statistics",
        "topics": [
          "Histogram",
          "Frequency Polygon",
          "Multiple Frequency Polygons"
        ]
      }
    ]
  },
  {
    "grade": "9",
    "subject": "Chemistry",
    "chapters": [
      {
        "name": "Matter in Our Surroundings",
        "topics": [
          "Matter and its general properties",
          "Three states of matter",
          "Factors affecting state of matter",
          "Effect of temperature on state of matter",
          "Effect of pressure on state of matter",
          "Evaporation changing state of matter"
        ]
      },
      {
        "name": "Is Matter Around Us Pure?",
        "topics": [
          "Mixtures and pure substances",
          "True solution and its properties",
          "Concentration of solution",
          "Suspension and Colloids",
          "Chemical and Physical changes",
          "Elements",
          "Compounds"
        ]
      },
      {
        "name": "Atoms and Molecules",
        "topics": [
          "Laws of Chemical Combination",
          "Atoms and Elements ",
          "Introduction to Atomic Mass",
          "Exploring Molecules and Ions",
          "Writing Chemical Formula",
          "Molecular Mass"
        ]
      },
      {
        "name": "Structure of  Atom ",
        "topics": [
          "Structure of an Atom ",
          "Rutherford Model",
          "Bohrs Model",
          "Distribution of Electrons in Different Orbits",
          "Atomic and Mass Number "
        ]
      },
    ]
  },
  {
    "grade": "9",
    "subject": "Biology",
    "chapters": [
      {
        "name": "The Fundamental Unit of Life",
        "topics": [
          "Smallest unit of Life",
          "Function of Plasma/Cell Membrane ",
          "Function of Cell wall",
          "Nucleus and its significance",
          "Cytoplasm and basics of cell organelles.",
          "Golgi Apparatus and Lysosomes",
          "Cellular organelles-Mitochondria, Plastids, Vacuoles",
          "How does a cell divide?"
        ]
      },
      {
        "name": "Tissues",
        "topics": [
          "Variety of tissues",
          "Types of Plant Tissues",
          "Types of Simple Permanent Tissues",
          "Types of Complex Permanent Tissues",
          "Simple versus Complex Permanent Tissue",
          "Epithelial tissue and its types",
          "Connective tissue and its types",
          "Muscular tissues and Neuron"
        ]
      },
      {
        "name": "Improvement in Food Resources",
        "topics": [
          "Need  of Better Crops",
          "Nutrient management for Crops",
          "Concept of organic faming and cropping patterns",
          "Irrigation practices ",
          "Crop protection strategies",
          "Animal husbandry",
          "An overview of Poultry Farming",
          "Fish Farming and  Marine fish Production",
          "Inland Fish Production and Bee-keeping"
        ]
      }
    ]
  },
  {
    "grade": "9",
    "subject": "Physics",
    "chapters": [
      {
        "name": "Motion ",
        "topics": [
          "Describing Motion ",
          "Measuring the Rate of Motion ",
          "Introduction to Acceleration",
          "Graphical Representation of Motion ",
          "Equations of Motion",
          "Circular Motion "
        ]
      },
      {
        "name": "Force and Laws of Motion ",
        "topics": [
          "Understanding Force",
          "Newtons First Law of Motion ",
          "Newtons Second Law of Motion ",
          "Newtons Third Law of Motion "
        ]
      },
      {
        "name": "Gravitation ",
        "topics": [
          "Gravitational Force ",
          "Universal Law of Gravitation ",
          "Acceleration due to Gravity",
          "Motion of Objects Under Gravity",
          "Mass and Weight",
          "Thrust and Pressure ",
          "Buoyancy "
        ]
      },
      {
        "name": "Work and Energy ",
        "topics": [
          "Work Done by a Constant Force",
          "Understanding Kinetic Energy ",
          "Understanding Potential Energy",
          "Conservation of Energy ",
          "Power"
        ]
      },
      {
        "name": "Sound",
        "topics": [
          "Production of Sound",
          "Propagation of Sound",
          "Graphical Representation of Sound Wave ",
          "Exploring Characteristics of Sound Wave ",
          "Reflection of Sound Wave ",
          "Ultrasound and Infrasound"
        ]
      }
    ]
  }
]

export default topics;