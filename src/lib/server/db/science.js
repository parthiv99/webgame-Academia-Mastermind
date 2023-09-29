// This file will be used to upload science questions to mongodb
// Each question will have these attributes: question, choices[], answer, subject, level
// I'm planning to have 10 questions for each level -> 50 questions for one subject

const scienceQuestions = [
    
    // Level 1
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Mercury", "Venus", "Jupiter", "Mars"],
        answer: "Jupiter",
        level: "level1"
    },
    {
        question: "Which of the following is a type of bird that cannot fly?",
        choices: ["Penguin", "Ostrich", "Flamingo", "Sparrow"],
        answer: "Penguin",
        level: "level1"
    },
    {
        question: "What is the process by which plants make their own food?",
        choices: ["Photosynthesis", "Respiration", "Digestion", "Circulation"],
        answer: "Photosynthesis",
        level: "level1"
    },
    {
        question: "Which animal is known for its black and white stripes?",
        choices: ["Tiger", "Zebra", "Giraffe", "Hippo"],
        answer: "Zebra",
        level: "level1"
    },
    {
        question: "Which of the following is not a mammal?",
        choices: ["Lion", "Dolphin", "Penguin", "Elephant"],
        answer: "Penguin",
        level: "level1"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Diamond", "Gold", "Silver", "Platinum"],
        answer: "Diamond",
        level: "level1"
    },
    {
        question: "Which of the following is a gas that we need to breathe in order to live?",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen",
        level: "level1"
    },
    {
        question: "What is the closest star to Earth?",
        choices: ["Proxima Centauri", "Sirius", "Alpha Centauri A", "Betelgeuse"],
        answer: "Proxima Centauri",
        level: "level1"
    },
    {
        question: "Which of the following is a type of rock that forms from cooled lava?",
        choices: ["Sedimentary", "Metamorphic", "Igneous", "Granite"],
        answer: "Igneous",
        level: "level1"
    },
    {
        question: "What is the process by which water evaporates from plants?",
        choices: ["Transpiration", "Condensation", "Precipitation", "Runoff"],
        answer: "Transpiration",
        level: "level1"
    },

    // Level 2
    {
        question: "Which of the following is a type of energy that comes from the sun?",
        choices: ["Solar", "Wind", "Hydro", "Geothermal"],
        answer: "Solar",
        level: "level2"
    },
    {
        question: "What is the process by which water changes from a liquid to a gas?",
        choices: ["Evaporation", "Condensation", "Precipitation", "Runoff"],
        answer: "Evaporation",
        level: "level2"
    },
    {
        question: "What type of weather is associated with a tornado?",
        choices: ["Rainy", "Sunny", "Windy", "Stormy"],
        answer: "Stormy",
        level: "level2"
    },
    {
        question: "Which of the following is a type of rock that forms from layers of sediment?",
        choices: ["Sedimentary", "Metamorphic", "Igneous", "Granite"],
        answer: "Sedimentary",
        level: "level2"
    },
    {
        question: "Which of the following is a type of energy that comes from moving water?",
        choices: ["Hydro", "Wind", "Solar", "Geothermal"],
        answer: "Hydro",
        level: "level2"
    },
    {
        question: "Which planet is known for its big red spot?",
        choices: ["Jupiter", "Mars", "Venus", "Saturn"],
        answer: "Jupiter",
        level: "level2"
    },
    {
        question: "What type of animal is a dolphin?",
        choices: ["Mammal", "Bird", "Fish", "Reptile"],
        answer: "Mammal",
        level: "level2"
    },
    {
        question: "What is the process by which rocks break down into smaller pieces?",
        choices: ["Weathering", "Erosion", "Deposition", "Compaction"],
        answer: "Weathering",
        level: "level2"
    },
    {
        question: "What is the process by which water falls from the clouds?",
        choices: ["Precipitation", "Evaporation", "Condensation", "Transpiration"],
        answer: "Precipitation",
        level: "level2"
    },
    {
        question: "Which of the following is a type of energy that comes from the heat inside the Earth?",
        choices: ["Geothermal", "Wind", "Solar", "Hydro"],
        answer: "Geothermal",
        level: "level2"
    },

    // Level 3
    {
        question: "What is the process by which water and wind carry rock and soil away?",
        choices: ["Erosion", "Weathering", "Deposition", "Compaction"],
        answer: "Erosion",
        level: "level3"
    },
    {
        question: "What is the force that makes objects fall to the ground?",
        choices: ["Gravity", "Magnetism", "Friction", "Inertia"],
        answer: "Gravity",
        level: "level3"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars",
        level: "level3"
    },
    {
        question: "What is the process by which water is cleaned and made safe to drink?",
        choices: ["Filtration", "Distillation", "Condensation", "Evaporation"],
        answer: "Filtration",
        level: "level3"
    },
    {
        question: "What type of simple machine is a seesaw?",
        choices: ["Lever", "Pulley", "Inclined plane", "Wheel and axle"],
        answer: "Lever",
        level: "level3"
    },
    {
        question: "Which of the following is NOT a state of matter?",
        choices: ["Light", "Solid", "Liquid", "Gas"],
        answer: "Light",
        level: "level3"
    },
    {
        question: "What is the process by which a solid turns into a liquid?",
        choices: ["Melting", "Freezing", "Evaporation", "Condensation"],
        answer: "Melting",
        level: "level3"
    },
    {
        question: "Which of the following is a type of energy that can be heard?",
        choices: ["Sound", "Light", "Electricity", "Magnetism"],
        answer: "Sound",
        level: "level3"
    },
    {
        question: "What type of animal is a butterfly?",
        choices: ["Insect", "Reptile", "Mammal", "Bird"],
        answer: "Insect",
        level: "level3"
    },
    {
        question: "What is the process by which liquid water turns into water vapor?",
        choices: ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
        answer: "Evaporation",
        level: "level3"
    },

    // Level 4
    {
        question: "What is the name for the process by which a gas turns into a liquid?",
        choices: ["Condensation", "Sublimation", "Melting", "Freezing"],
        answer: "Condensation",
        level: "level4"
    },
    {
        question: "Which of the following is the unit used to measure force?",
        choices: ["Newton", "Joule", "Watt", "Ampere"],
        answer: "Newton",
        level: "level4"
    },
    {
        question: "Which of the following is a type of wave that can travel through space?",
        choices: ["Electromagnetic", "Sound", "Water", "Radio"],
        answer: "Electromagnetic",
        level: "level4"
    },
    {
        question: "What is the name for the process by which solid ice turns into water vapor?",
        choices: ["Sublimation", "Condensation", "Melting", "Evaporation"],
        answer: "Sublimation",
        level: "level4"
    },
    {
        question: "Which of the following is the smallest unit of life?",
        choices: ["Cell", "Atom", "Molecule", "Organ"],
        answer: "Cell",
        level: "level4"
    },
    {
        question: "Which of the following is NOT a state of matter?",
        choices: ["Plasma", "Liquid", "Gas", "Solid"],
        answer: "Energy",
        level: "level4"
    },
    {
        question: "Which of the following is NOT a form of energy?",
        choices: ["Matter", "Heat", "Light", "Electricity"],
        answer: "Matter",
        level: "level4"
    },
    {
        question: "Which of the following is a form of energy that can be transferred by waves or particles?",
        choices: ["Radiant energy", "Kinetic energy", "Potential energy", "Chemical energy"],
        answer: "Radiant energy",
        level: "level4"
    },
    {
        question: "What is the name of the force that opposes motion between two surfaces that are touching?",
        choices: ["Friction", "Gravity", "Inertia", "Momentum"],
        answer: "Friction",
        level: "level4"
    },
    {
        question: "Which of the following is a measure of how much matter is in an object?",
        choices: ["Mass", "Volume", "Density", "Weight"],
        answer: "Mass",
        level: "level4"
    },

    // Level 5
    {
        question: "Which of the following is a measure of how much space an object takes up?",
        choices: ["Volume", "Mass", "Density", "Weight"],
        answer: "Volume",
        level: "level5"
    },
    {
        question: "Which of the following is a type of renewable energy that uses the motion of water to generate electricity?",
        choices: ["Hydropower", "Geothermal", "Solar", "Wind"],
        answer: "Hydropower",
        level: "level4"
    },
    {
        question: "What type of energy is stored in an object due to its position or condition?",
        choices: ["Potential energy", "Kinetic energy", "Radiant energy", "Electrical energy"],
        answer: "Potential energy",
        level: "level4"
    },
    {
        question: "What is the name of the layer of Earth's atmosphere that contains the ozone layer?",
        choices: ["Mesosphere", "Troposphere", "Stratosphere", "Exosphere"],
        answer: "Stratosphere",
        level: "level5"
    },
    {
        question: "What is the name of the process by which a solid turns directly into a gas?",
        choices: ["Melting", "Sublimation", "Evaporation", "Condensation"],
        answer: "Sublimation",
        level: "level5"
    },
    {
        question: "Which of the following is NOT a type of rock?",
        choices: ["Sedimentary", "Metamorphic", "Molten", "Igneous"],
        answer: "Molten",
        level: "level5"
    },
    {
        question: "What is the name of the process by which nitrogen from the air is converted into a form that plants can use?",
        choices: ["Nitrogen fixation", "Photosynthesis", "Respiration", "Transpiration"],
        answer: "Nitrogen fixation",
        level: "level5"
    },
    {
        question: "What is the name of the force that causes an object to resist changes in motion?",
        choices: ["Inertia", "Friction", "Momentum", "Gravity"],
        answer: "Inertia",
        level: "level5"
    },
    {
        question: "What is the name of the process by which carbon is cycled through the Earth's atmosphere, oceans, and land?",
        choices: ["Carbon cycle", "Water cycle", "Nitrogen cycle", "Oxygen cycle"],
        answer: "Carbon cycle",
        level: "level5"
    },
    {
        question: "Which of the following is NOT a type of electromagnetic wave?",
        choices: ["Radio waves", "Microwaves", "Infrared waves", "Sound waves"],
        answer: "Sound waves",
        level: "level5"
    }
]