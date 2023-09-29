// This file will be used to upload mathematics questions to mongodb
// Each question will have these attributes: question, choices[], answer, subject, level
// I'm planning to have 10 questions for each level -> 50 questions for one subject

const mathQuestions = [
    // Level 1
    {
      question: "What is 2 + 2?",
      choices: ["2", "3", "4", "5"],
      answer: "4",
      level: "level1"
    },
    {
      question: "What is 8 + 3?",
      choices: ["9", "10", "11", "12"],
      answer: "11",
      level: "level1"
    },
    {
      question: "What is 5 + 3?",
      choices: ["6", "7", "8", "9"],
      answer: "8",
      level: "level1"
    },
    {
      question: "How many sides does a triangle have?",
      choices: ["2", "3", "4", "5"],
      answer: "3",
      level: "level1"
    },
    {
      question: "What is 9 - 3?",
      choices: ["3", "6", "9", "12"],
      answer: "6",
      level: "level1"
    },
    {
      question: "What is the next number in the sequence: 2, 4, 6, 8, _?",
      choices: ["10", "12", "14", "16"],
      answer: "10",
      level: "level1"
    },
    {
      question: "What is the difference between 79 and 62?",
      choices: ["11", "13", "15", "17"],
      answer: "17",
      level: "level1"
    },
    {
      question: "What is 18 - 11?",
      choices: ["10", "9", "7", "8"],
      answer: "7",
      level: "level1"
    },
    {
      question: "What is the name of a shape with eight sides?",
      choices: ["Octagon", "Pentagon", "Hexagon", "Triangle"],
      answer: "Octagon",
      level: "level1"
    },
    {
      question: "Which number is less: 8 or 10?",
      choices: ["8", "10"],
      answer: "8",
      level: "level1"
    },

    // Level 2
    {
      question: "What is the name of a shape with five sides?",
      choices: ["Octagon", "Pentagon", "Hexagon", "Triangle"],
      answer: "Pentagon",
      level: "level2"
    },
    {
      question: "What is the result of 6 ÷ 2?",
      choices: ["1", "2", "3", "4"],
      answer: "3",
      level: "level2"
    },
    {
      question: "What is the shape of a can of soup?",
      choices: ["Cone", "Sphere", "Cube", "Cylinder"],
      answer: "Cylinder",
      level: "level2"
    },
    {
      question: "What is the result of 7 + 8 - 5?",
      choices: ["8", "10", "12", "14"],
      answer: "10",
      level: "level2"
    },
    {
      question: "What is the value of 5 x 7?",
      choices: ["21", "30", "35", "42"],
      answer: "35",
      level: "level2"
    },
    {
      question: "What is the next number in the sequence: 5, 10, 15, 20, _?",
      choices: ["25", "30", "35", "40"],
      answer: "25",
      level: "level2"
    },
    {
      question: "What is the value of 3 x 7?",
      choices: ["21", "18", "19", "20"],
      answer: "21",
      level: "level2"
    },
    {
      question: "What is the result of 16 ÷ 4?",
      choices: ["1", "2", "3", "4"],
      answer: "4",
      level: "level2"
    },
    {
      question: "What is the name of a shape with six sides?",
      choices: ["Hexagon", "Pentagon", "Octagon", "Triangle"],
      answer: "Hexagon",
      level: "level2"
    },
    {
      question: "What is the result of 4 + 8 - 9?",
      choices: ["2", "4", "3", "5"],
      answer: "3",
      level: "level2"
    },  

    // Level 3
    {
      question: "What is the value of x in the equation 2x + 5 = 19?",
      choices: ["4", "7", "9", "12"],
      answer: "7",
      level: "level3"
    },
    {
      question: "What is 3/4 of 16?",
      choices: ["9", "10", "12", "15"],
      answer: "12",
      level: "level3"
    },
    {
      question: "What is the greatest common factor of 24 and 36?",
      choices: ["6", "8", "12", "24"],
      answer: "12",
      level: "level3"
    },
    {
      question: "Which number is divisible by 2, 3, and 4?",
      choices: ["12", "14", "16", "18"],
      answer: "12",
      level: "level3"
    },
    {
      question: "Which fraction is greater: 3/5 or 4/7?",
      choices: ["3/5", "4/7"],
      answer: "4/7",
      level: "level3"
    },
    {
      question: "What is the value of y in the equation 2y - 8 = 10?",
      choices: ["3", "6", "9", "12"],
      answer: "9",
      level: "level3"
    },
    {
      question: "What is 28 divided by 4?",
      choices: ["2", "4", "6", "7"],
      answer: "7",
      level: "level3"
    },
    {
      question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, _?",
      choices: ["9", "10", "11", "13"],
      answer: "13",
      level: "level3"
    },
    {
      question: "What is the value of z in the equation 5z - 7 = 18?",
      choices: ["5", "6", "7", "8"],
      answer: "5",
      level: "level3"
    },
    {
      question: "What is the value of x in the equation 3(x + 2) - 4 = 14?",
      choices: ["4", "8", "10", "6"],
      answer: "4",
      level: "level3"
    },  

    // Level 4
    {
      question: "Which number is divisible by 3: 167, 232, or 312?",
      choices: ["167", "232", "312", "none of them"],
      answer: "312",
      level: "level4"
    },
    {
      question: "What is the value of x in the equation 4(x + 3) - 2 = 18?",
      choices: ["2", "4", "6", "8"],
      answer: "2",
      level: "level4"
    },
    {
      question: "What is the value of y in the equation 3y - 5 = 10 - 2y?",
      choices: ["3", "4", "5", "6"],
      answer: "3",
      level: "level4"
    },
    {
      question: "What is the value of x in the equation 5(x - 2) - 3 = 7x - 23?",
      choices: ["3", "4", "5", "6"],
      answer: "5",
      level: "level4"
    },
    {
      question: "What is the next number in the sequence: 1, 4, 9, 16, 25, 36, _?",
      choices: ["42", "49", "64", "81"],
      answer: "49",
      level: "level4"
    },
    {
      question: "What is the value of x in the equation x/5 + 3 = 11?",
      choices: ["35", "40", "45", "50"],
      answer: "40",
      level: "level4"
    },
    {
      question: "What is the value of 9 * 8 + 6 ÷ 3?",
      choices: ["90", "73", "74", "26"],
      answer: "74",
      level: "level4"
    },
    {
      question: "What is the area of a rectangle that has a length of 12 units and a width of 8 units?",
      choices: ["64", "80", "96", "120"],
      answer: "96",
      level: "level4"
    },
    {
      question: "What is the value of x in the equation 2^(x-1) = 16?",
      choices: ["4", "5", "6", "7"],
      answer: "5",
      level: "level4"
    },
    {
      "question": "What is the greatest common factor of 24 and 36?",
      "choices": ["6", "12", "18", "24"],
      "answer": "12",
      "level": "level4"
    },

    // Level 5
    
    {
      "question": "What is the value of 13.5 divided by 1.5?",
      "choices": ["6", "8", "9", "10"],
      "answer": "9",
      "level": "level5"
    },
    {
      "question": "If a recipe calls for 2 1/2 cups of flour, how many cups are needed for 3 recipes?",
      "choices": ["5 1/2", "7 1/2", "6 1/4", "8 1/4"],
      "answer": "7 1/2",
      "level": "level5"
    },
    {
      "question": "If you have a rectangular room that measures 12 feet by 16 feet, what is the area of the room?",
      "choices": ["28 square feet", "192 square feet", "208 square feet", "384 square feet"],
      "answer": "192 square feet",
      "level": "level5"
    },
    {
      "question": "What is the least common multiple of 6 and 12?",
      "choices": ["12", "18", "24", "36"],
      "answer": "12",
      "level": "level5"
    },
    {
      "question": "What is the sum of the interior angles of a triangle?",
      "choices": ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
      "answer": "180 degrees",
      "level": "level5"
    },
    {
      "question": "A store sells 12-packs of soda for $3.50 each. How much would it cost to buy 5 packs?",
      "choices": ["$8.75", "$15.00", "$17.50", "$21.00"],
      "answer": "$17.50",
      "level": "level5"
    },
    {
      "question": "What is the perimeter of a rectangle with sides of length 5 cm and 8 cm?",
      "choices": ["10 cm", "16 cm", "26 cm", "40 cm"],
      "answer": "26 cm",
      "level": "level5"
    },
    {
      "question": "If the radius of a circle is 6 inches, what is the circumference?",
      "choices": ["6π inches", "12π inches", "18π inches", "36π inches"],
      "answer": "12π inches",
      "level": "level5"
    },
    {
      "question": "What is the product of 4.2 and 3.5?",
      "choices": ["14.7", "14.35", "15.7", "16.5"],
      "answer": "14.7",
      "level": "level5"
    },
    {
      "question": "What is the area of a triangle with base 6 cm and height 8 cm?",
      "choices": ["12 cm²", "24 cm²", "30 cm²", "48 cm²"],
      "answer": "24 cm²",
      "level": "level5"
    }
]
  
