// This file will be used to upload social science questions to mongodb
// Each question will have these attributes: question, choices[], answer, subject, level
// I'm planning to have 10 questions for each level -> 50 questions for one subject

const socialScienceQuestions = [

    // Level 1
    {
        question: "What is the capital of the United States?",
        choices: ["New York City", "Washington D.C.", "Los Angeles", "Chicago"],
        answer: "Washington D.C.",
        level: "level1"
    },
    {
        question: "What country is north of the United States?",
        choices: ["Mexico", "Canada", "Brazil", "Argentina"],
        answer: "Canada",
        level: "level1"
    },
    {
        question: "What is the name of the national anthem of the United States?",
        choices: ["God Bless America", "The Star-Spangled Banner", "America the Beautiful", "My Country 'Tis of Thee"],
        answer: "The Star-Spangled Banner",
        level: "level1"
    },
    {
        question: "What is the name of the holiday celebrated on July 4th?",
        choices: ["Halloween", "Thanksgiving", "Independence Day", "Memorial Day"],
        answer: "Independence Day",
        level: "level1"
    },
    {
        question: "What is the name of the ocean on the West Coast of the United States?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean",
        level: "level1"
    },
    {
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John F. Kennedy"],
        answer: "George Washington",
        level: "level1"
    },
    {
        question: "What is the name of the national bird of the United States?",
        choices: ["Bald Eagle", "Peregrine Falcon", "Red-tailed Hawk", "Osprey"],
        answer: "Bald Eagle",
        level: "level1"
    },
    {
        question: "What is the name of the mountain range that runs through the western part of the United States?",
        choices: ["Appalachian Mountains", "Rocky Mountains", "Sierra Nevada", "Cascade Range"],
        answer: "Rocky Mountains",
        level: "level1"
    },
    {
        question: "What is the name of the river that flows through the Grand Canyon?",
        choices: ["Colorado River", "Mississippi River", "Missouri River", "Rio Grande"],
        answer: "Colorado River",
        level: "level1"
    },
    {
        question: "What is the name of the famous statue in New York City that represents freedom and democracy?",
        choices: ["The Statue of David", "The Lincoln Memorial", "The Golden Gate Bridge", "The Statue of Liberty"],
        answer: "The Statue of Liberty",
        level: "level1"
    },

    // Level 2
    {
        question: "What is the name of the President of the United States?",
        choices: ["Barack Obama", "Joe Biden", "Donald Trump", "George W. Bush"],
        answer: "Joe Biden",
        level: "level2"
    },
    {
        question: "What are the three branches of the United States government?",
        choices: ["Judicial, Executive, Legislative", "Executive, Legislative, Secretarial", "Judicial, Secretarial, Congressional", "Executive, Legislative, Congressional"],
        answer: "Judicial, Executive, Legislative",
        level: "level2"
    },
    {
        question: "What is the name of the ocean on the East Coast of the United States?",
        choices: ["Indian Ocean", "Pacific Ocean", "Arctic Ocean", "Atlantic Ocean"],
        answer: "Atlantic Ocean",
        level: "level2"
    },
    {
        question: "What is the name of the holiday celebrated on the third Monday in February to honor George Washington's birthday?",
        choices: ["Independence Day", "Memorial Day", "Veterans Day", "Presidents' Day"],
        answer: "Presidents' Day",
        level: "level2"
    },
    {
        question: "What is the name of the national park located in Wyoming that is famous for its geysers?",
        choices: ["Yellowstone National Park", "Grand Teton National Park", "Zion National Park", "Yosemite National Park"],
        answer: "Yellowstone National Park",
        level: "level2"
    },
    {
        question: "What is the name of the large canyon located in Arizona that is a popular tourist destination?",
        choices: ["Yellowstone Canyon", "Grand Canyon", "Bryce Canyon", "Zion Canyon"],
        answer: "Grand Canyon",
        level: "level2"
    },
    {
        question: "What is the name of the currency used in the United States?",
        choices: ["Peso", "Dollar", "Euro", "Yen"],
        answer: "Dollar",
        level: "level2"
    },
    {
        question: "What is the name of the famous building in Washington D.C. that houses the legislative branch of the United States government?",
        choices: ["The White House", "The Capitol Building", "The Lincoln Memorial", "The Supreme Court Building"],
        answer: "The Capitol Building",
        level: "level2"
    },
    {
        question: "What is the name of the largest state in the United States by land area?",
        choices: ["Texas", "California", "Alaska", "Montana"],
        answer: "Alaska",
        level: "level2"
    },
    {
        question: "What is the name of the famous landmark in South Dakota that is carved into a mountain?",
        choices: ["Mount Rushmore", "Devils Tower", "Pikes Peak", "Mammoth Cave"],
        answer: "Mount Rushmore",
        level: "level2"
    },

    // Level 3
    {
        question: "What is the name of the holiday celebrated on the fourth Thursday in November to give thanks for the blessings of the year?",
        choices: ["Independence Day", "Memorial Day", "Labor Day", "Thanksgiving Day"],
        answer: "Thanksgiving Day",
        level: "level3"
    },
    {
        question: "What is the name of the document that outlines the fundamental principles and establishes the structure of the United States government?",
        choices: ["The Constitution", "The Bill of Rights", "The Declaration of Independence", "The Articles of Confederation"],
        answer: "The Constitution",
        level: "level3"
    },
    {
        question: "What is the name of the mountain range that runs along the west coast of the United States?",
        choices: ["Rocky Mountains", "Sierra Nevada Mountains", "Appalachian Mountains", "Cascade Mountains"],
        answer: "Cascade Mountains",
        level: "level3"
    },
    {
        question: "What is the name of the largest waterfall in North America, located on the border between the United States and Canada?",
        choices: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        answer: "Niagara Falls",
        level: "level3"
    },
    {
        question: "What is the name of the highest mountain in North America, located in Alaska?",
        choices: ["Mount Everest", "Mount Kilimanjaro", "Denali", "Mount Rainier"],
        answer: "Denali",
        level: "level3"
    },
    {
        question: "What is the name of the national park located in Wyoming, Montana, and Idaho that contains geysers, hot springs, and other geothermal features?",
        choices: ["Yellowstone National Park", "Yosemite National Park", "Grand Canyon National Park", "Glacier National Park"],
        answer: "Yellowstone National Park",
        level: "level3"
    },
    {
        question: "What is the name of the document that gave women the right to vote in the United States?",
        choices: ["The Bill of Rights", "The Declaration of Independence", "The 19th Amendment", "The Emancipation Proclamation"],
        answer: "The 19th Amendment",
        level: "level3"
    },
    {
        question: "What is the name of the famous speech given by Martin Luther King Jr. in 1963, calling for civil rights for all people?",
        choices: ["The Emancipation Proclamation", "The Gettysburg Address", "I Have a Dream", "The Four Freedoms"],
        answer: "I Have a Dream",
        level: "level3"
    },
    {
        question: "What is the name of the famous inventor and scientist who is known for developing the light bulb and many other inventions?",
        choices: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Eli Whitney"],
        answer: "Thomas Edison",
        level: "level3"
    },
    {
        question: "What is the name of the famous African-American abolitionist who escaped slavery and became a leader of the abolitionist movement?",
        choices: ["Harriet Tubman", "Frederick Douglass", "Sojourner Truth", "Booker T. Washington"],
        answer: "Frederick Douglass",
        level: "level3"
    },

    // Level 4
    {
        question: "Which of the following rivers flows through the city of New Orleans?",
        choices: ["Mississippi River", "Rio Grande", "Colorado River", "Ohio River"],
        answer: "Mississippi River",
        level: "level4"
    },
    {
        question: "What is the name of the explorer who discovered America in 1492?",
        choices: ["Christopher Columbus", "Leif Erikson", "Marco Polo", "Vasco da Gama"],
        answer: "Christopher Columbus",
        level: "level4"
    },
    {
        question: "What is the name of the American document that declared independence from Great Britain in 1776?",
        choices: ["The Bill of Rights", "The Constitution", "The Declaration of Independence", "The Emancipation Proclamation"],
        answer: "The Declaration of Independence",
        level: "level4"
    },
    {
        question: "What is the name of the river that forms the border between Texas and Mexico?",
        choices: ["Rio Grande", "Mississippi River", "Colorado River", "Ohio River"],
        answer: "Rio Grande",
        level: "level4"
    },
    {
        question: "What is the name of the famous trail used by pioneers traveling west to settle in California in the 1800s?",
        choices: ["The Lewis and Clark Trail", "The Oregon Trail", "The Santa Fe Trail", "The California Trail"],
        answer: "The Oregon Trail",
        level: "level4"
    },
    {
        question: "What is the name of the famous fort that was attacked by Mexican forces in 1836, leading to the Battle of the Alamo?",
        choices: ["Fort Sumter", "Fort Knox", "Fort Ticonderoga", "The Alamo"],
        answer: "The Alamo",
        level: "level4"
    },
    {
        question: "What is the name of the famous Civil Rights activist who refused to give up her seat on a Montgomery, Alabama bus in 1955?",
        choices: ["Rosa Parks", "Harriet Tubman", "Sojourner Truth", "Angela Davis"],
        answer: "Rosa Parks",
        level: "level4"
    },
    {
        question: "What is the name of the famous Civil Rights activist and leader who believed in nonviolent resistance to achieve change?",
        choices: ["Martin Luther King Jr.", "Malcolm X", "W.E.B. Du Bois", "Booker T. Washington"],
        answer: "Martin Luther King Jr.",
        level: "level4"
    },
    {
        question: "What is the name of the famous explorer who led an expedition to explore the Louisiana Territory in 1804?",
        choices: ["Christopher Columbus", "Leif Erikson", "Lewis and Clark", "Marco Polo"],
        answer: "Lewis and Clark",
        level: "level4"
    },
    {
        question: "What is the name of the famous speech given by Abraham Lincoln during the Civil War, which declared that all slaves in Confederate-held territory were to be set free?",
        choices: ["The Gettysburg Address", "The Emancipation Proclamation", "The Four Freedoms", "The Declaration of Independence"],
        answer: "The Emancipation Proclamation",
        level: "level4"
    },

    // Level 5
    {
        question: "What was the name of the first permanent English settlement in North America?",
        choices: ["Plymouth Colony", "Roanoke Colony", "Jamestown Colony", "Massachusetts Bay Colony"],
        answer: "Jamestown Colony",
        level: "level5"
    },
    {
        question: "What was the name of the first constitution of the United States, which was adopted in 1781?",
        choices: ["The Declaration of Independence", "The Articles of Confederation", "The Constitution", "The Bill of Rights"],
        answer: "The Articles of Confederation",
        level: "level5"
    },
    {
        question: "What was the name of the landmark Supreme Court case that declared segregation in public schools to be unconstitutional?",
        choices: ["Plessy v. Ferguson", "Brown v. Board of Education", "Miranda v. Arizona", "Roe v. Wade"],
        answer: "Brown v. Board of Education",
        level: "level5"
    },
    {
        question: "What was the name of the system of laws in the South that enforced racial segregation and discrimination from the late 1800s to the mid-1960s?",
        choices: ["Jim Crow laws", "Black Codes", "Segregation laws", "Apartheid laws"],
        answer: "Jim Crow laws",
        level: "level5"
    },
    {
        question: "Who was the first African American to serve as the President of the United States?",
        choices: ["Barack Obama", "Jesse Jackson", "Colin Powell", "Condoleezza Rice"],
        answer: "Barack Obama",
        level: "level5"
    },
    {
        question: "What was the name of the economic policy that sought to expand the power and wealth of a country by exporting more than it imported?",
        choices: ["Free trade", "Protectionism", "Mercantilism", "Capitalism"],
        answer: "Mercantilism",
        level: "level5"
    },
    {
        question: "What was the name of the system of secret escape routes used by slaves in the 1800s to escape to freedom in the North?",
        choices: ["The Underground Railroad", "The Freedom Trail", "The Liberty Line", "The Abolitionist Movement"],
        answer: "The Underground Railroad",
        level: "level5"
    },
    {
        question: "What was the name of the treaty that ended World War I in 1919?",
        choices: ["The Treaty of Versailles", "The Treaty of Paris", "The Treaty of Tordesillas", "The Treaty of Westphalia"],
        answer: "The Treaty of Versailles",
        level: "level5"
    },
    {
        question: "What was the name of the famous speech given by President Franklin D. Roosevelt in 1941, in which he outlined his vision for a post-war world based on freedom and democracy?",
        choices: ["The Four Freedoms speech", "The Emancipation Proclamation", "The Gettysburg Address", "The Declaration of Independence"],
        answer: "The Four Freedoms speech",
        level: "level5"
    },
    {
        question: "What was the name of the famous Native American woman who helped the Lewis and Clark Expedition in the early 1800s?",
        choices: ["Sacagawea", "Pocahontas", "Geronimo", "Crazy Horse"],
        answer: "Sacagawea",
        level: "level5"
    }
]