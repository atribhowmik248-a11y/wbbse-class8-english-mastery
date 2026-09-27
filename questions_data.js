// WBBSE Class 8 English & Grammar Question Bank
// Lessons 10-13 and Grammar: Prefix/Suffix, Voice Change, Articles & Prepositions

const questionsData = [
  // ==========================================
  // LESSON 10: TALES OF CHILDHOOD (Roald Dahl) - MCQ
  // ==========================================
  {
    id: 1,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "What kind of literary work is 'Tales of Childhood' by Roald Dahl?",
    options: [
      "A fictional detective novel",
      "An excerpt from his autobiography 'Boy'",
      "A historical travel diary across Europe",
      "A fantasy short story for young children"
    ],
    correct: 1,
    explanation: "'Tales of Childhood' is an excerpt from Roald Dahl's acclaimed autobiographical work titled 'Boy: Tales of Childhood', published in 1984.",
    hint: "Think about Roald Dahl recalling his own real-life childhood memories."
  },
  {
    id: 2,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Where did Roald Dahl's grandfather live, and what was his occupation?",
    options: [
      "A fisherman in Cardiff, Wales",
      "A fairly prosperous merchant in Sarpsborg, Norway",
      "A coal mine owner in Newcastle, England",
      "A sea captain in Oslo, Norway"
    ],
    correct: 1,
    explanation: "Roald Dahl's grandfather was a fairly prosperous merchant who lived and ran his business in Sarpsborg, a small town in southern Norway.",
    hint: "Recall the Norwegian town mentioned in the opening lines of the text."
  },
  {
    id: 3,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "How did Harold Dahl (Roald's father) lose his left arm when he was fourteen?",
    options: [
      "He was wounded during a naval battle at sea",
      "He slipped off a boat-house roof, and an intoxicated doctor pulled his fractured arm violently",
      "He was caught in an industrial gear while working in a factory",
      "He suffered from a childhood infection that damaged his arm bones"
    ],
    correct: 1,
    explanation: "At fourteen, Harold fell from a roof fracturing his arm. An intoxicated doctor mistook it for a dislocated shoulder, pulled it forcefully, splintering the bone and leading to gangrene and amputation.",
    hint: "A severe medical blunder occurred after a fall from a boat-house roof."
  },
  {
    id: 4,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "What profession did Harold Dahl and his Norwegian friend Aadnesen take up?",
    options: [
      "Shipbuilders",
      "Shipbrokers",
      "Timber merchants",
      "Coal miners"
    ],
    correct: 1,
    explanation: "Harold Dahl and his friend Aadnesen teamed up as shipbrokers, setting up the partnership 'Aadnesen & Dahl'.",
    hint: "They supplied incoming port ships with provisions, fuel, and equipment."
  },
  {
    id: 5,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "What is the primary function of a shipbroker?",
    options: [
      "To design and construct large ocean liners",
      "To navigate ships across dangerous seas",
      "To supply a ship with everything it needs when it arrives in port",
      "To inspect the health and documents of sailors"
    ],
    correct: 2,
    explanation: "A shipbroker arranges fuel, groceries, ropes, spare engine parts, and customs clearance for vessels arriving at port.",
    hint: "Think about port services provided to visiting ships."
  },
  {
    id: 6,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Why did Harold Dahl and Aadnesen choose Cardiff in South Wales for their business?",
    options: [
      "Cardiff offered free land to immigrants",
      "Cardiff was the greatest coal-exporting port in the world at that time",
      "Cardiff had the best medical universities in Britain",
      "Harold Dahl's family lived in Cardiff"
    ],
    correct: 1,
    explanation: "In the late 19th and early 20th centuries, Cardiff was the undisputed coal capital of the globe, attracting ships from every nation.",
    hint: "Cardiff was world-famous for its massive export of a black fuel."
  },
  {
    id: 7,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Where did Harold Dahl build a fine country mansion as his family expanded?",
    options: [
      "In Sarpsborg, Norway",
      "At Radyr, six miles west of Cardiff",
      "In central London",
      "In the city of Edinburgh"
    ],
    correct: 1,
    explanation: "Harold Dahl built an impressive country mansion at Radyr, six miles west of Cardiff, surrounded by farmland and woods.",
    hint: "It was a village six miles west of Cardiff."
  },
  {
    id: 8,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Which of the following describes the estate at Radyr?",
    options: [
      "A cramped terrace house in an industrial neighborhood",
      "A mansion with acres of farm and woodland, cows, hens, sheep, and staff cottages",
      "A seaside cottage with a private pier and fishing trawlers",
      "A military fortress surrounded by stone trenches"
    ],
    correct: 1,
    explanation: "The country mansion at Radyr boasted vast acres of woodland and pasture, domestic animals (cows, hens, sheep), and cottages for estate workers.",
    hint: "It was a self-sufficient country estate with farm animals."
  },
  {
    id: 9,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Who was Harold Dahl's favorite child, and what tragedy befell her?",
    options: [
      "Ellen, who was lost at sea",
      "Astri, who died of appendicitis at the age of seven",
      "Sofie, who fell from a boat-house roof",
      "Marie, who died of scarlet fever"
    ],
    correct: 1,
    explanation: "Astri was Harold's eldest daughter and the apple of his eye. She tragically passed away from acute appendicitis at age seven, when Roald was three.",
    hint: "She was the eldest daughter and died of an inflamed appendix."
  },
  {
    id: 10,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "What happened to Harold Dahl shortly after his daughter Astri passed away?",
    options: [
      "He returned to Norway immediately",
      "He died of pneumonia, having lost the will to fight the illness in his deep grief",
      "He was injured in another boat accident",
      "He sold his business and moved to France"
    ],
    correct: 1,
    explanation: "Harold Dahl was utterly devastated by Astri's death. When he fell ill with pneumonia a few months later, he lost the will to live and died at age 57.",
    hint: "Grief overwhelmed him, leaving him without the strength to combat pneumonia."
  },
  {
    id: 11,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Why did Roald Dahl's mother refuse to return to her relatives in Norway after her husband's death?",
    options: [
      "She lacked money for travel tickets",
      "Her husband had been determined that their children should be educated in English schools",
      "Norway was facing political unrest",
      "She preferred living in Radyr permanently"
    ],
    correct: 1,
    explanation: "Harold Dahl had always held English schools in the highest esteem. Roald's mother bravely stayed in Wales to ensure her children received an English education.",
    hint: "It was Harold's profound wish regarding his children's education."
  },
  {
    id: 12,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "Where did Dahl's mother move after selling the large country mansion at Radyr?",
    options: [
      "To London",
      "To a smaller house in Llandaff",
      "To Sarpsborg",
      "To Bristol"
    ],
    correct: 1,
    explanation: "To economize and simplify management, Dahl's mother sold the large Radyr estate and moved the family to a smaller residence in Llandaff.",
    hint: "A town near Cardiff where Roald also started his early schooling."
  },
  {
    id: 13,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "What was the name of the kindergarten school Roald Dahl first attended?",
    options: [
      "St. Peter's School",
      "Elmtree House",
      "Cardiff Grammar School",
      "Repton Public School"
    ],
    correct: 1,
    explanation: "Roald Dahl began his early education at Elmtree House in Llandaff, a kindergarten run by two gentle sisters.",
    hint: "Named after a type of leafy tree."
  },
  {
    id: 14,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "mcq",
    question: "How did Harold Dahl overcome the limitation of having only one arm when eating?",
    options: [
      "He hired an attendant to cut his food",
      "He sharpened the edge of his fork into a blade so he could cut and eat using only one hand",
      "He only ate soft foods that required no cutting",
      "He trained his feet to hold utensils"
    ],
    correct: 1,
    explanation: "Harold Dahl had a fork modified with a sharpened cutting edge, enabling him to independently slice and spear his own food with one hand.",
    hint: "He creatively modified a standard eating utensil."
  },

  // ==========================================
  // LESSON 10: DRAG & DROP FILL-IN-THE-BLANKS
  // ==========================================
  {
    id: 15,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "Harold Dahl had lost an arm when he was ",
    sentenceAfter: " years old.",
    correctAnswer: "fourteen",
    options: ["fourteen", "eighteen", "twelve", "twenty"],
    explanation: "Harold Dahl suffered the fracture and subsequent arm amputation at the age of fourteen.",
    hint: "Recall his teenage age when the boat-house accident happened."
  },
  {
    id: 16,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "A shipbroker supplies a ship with everything it needs when it arrives in ",
    sentenceAfter: ".",
    correctAnswer: "port",
    options: ["port", "dockyard", "storm", "harbour"],
    explanation: "The text defines a shipbroker as someone who supplies a ship with fuel, ropes, and provisions upon reaching port.",
    hint: "The coastal area where vessels berth."
  },
  {
    id: 17,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "Cardiff was booming because it was the greatest ",
    sentenceAfter: "-exporting port in the entire world.",
    correctAnswer: "coal",
    options: ["coal", "timber", "steel", "cotton"],
    explanation: "South Wales was the powerhouse of global coal exports during Harold Dahl's era.",
    hint: "The black combustible mineral extracted from mines."
  },
  {
    id: 18,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "The Dahl family moved into a grand country mansion situated at ",
    sentenceAfter: ".",
    correctAnswer: "Radyr",
    options: ["Radyr", "Llandaff", "Sarpsborg", "Cardiff"],
    explanation: "Harold Dahl purchased and established a grand country mansion at Radyr, six miles west of Cardiff.",
    hint: "The village starting with 'R'."
  },
  {
    id: 19,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "Roald's sister Astri tragically died of ",
    sentenceAfter: " at the tender age of seven.",
    correctAnswer: "appendicitis",
    options: ["appendicitis", "pneumonia", "influenza", "measles"],
    explanation: "Astri died of appendicitis, a disease that in 1920 was rarely cured without immediate surgery.",
    hint: "Inflammation of the appendix."
  },
  {
    id: 20,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "Harold Dahl passed away after contracting ",
    sentenceAfter: " following his beloved daughter's death.",
    correctAnswer: "pneumonia",
    options: ["pneumonia", "appendicitis", "cholera", "tuberculosis"],
    explanation: "Harold Dahl contracted pneumonia and, heartbroken over Astri, lacked the will to survive.",
    hint: "A severe lung infection."
  },
  {
    id: 21,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "Roald's mother moved to a smaller, manageable house in ",
    sentenceAfter: " to educate her children in English schools.",
    correctAnswer: "Llandaff",
    options: ["Llandaff", "Sarpsborg", "London", "Bristol"],
    explanation: "She relocated from Radyr to Llandaff to keep the family together near English schools.",
    hint: "The Welsh town where Elmtree House was located."
  },
  {
    id: 22,
    categoryKey: "l10",
    categoryTitle: "Lesson 10: Tales of Childhood",
    type: "drag-drop",
    sentenceBefore: "Roald Dahl began his earliest schooling at ",
    sentenceAfter: " House kindergarten.",
    correctAnswer: "Elmtree",
    options: ["Elmtree", "Oakridge", "Pinegrove", "Maplewood"],
    explanation: "Roald Dahl's first school in Llandaff was named Elmtree House.",
    hint: "A tree beginning with 'E'."
  },

  // ==========================================
  // LESSON 11: MIDNIGHT EXPRESS (Alfred Noyes) - MCQ
  // ==========================================
  {
    id: 23,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "Who is the author of the eerie suspense story 'Midnight Express'?",
    options: [
      "Walter de la Mare",
      "Alfred Noyes",
      "Roald Dahl",
      "Jean Giono"
    ],
    correct: 1,
    explanation: "'Midnight Express' is a famous psychological suspense tale written by the English poet and author Alfred Noyes.",
    hint: "The English writer renowned for poems like 'The Highwayman'."
  },
  {
    id: 24,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "At what age did Mortimer find the mysterious book in his father's library?",
    options: [
      "Ten",
      "Twelve",
      "Fourteen",
      "Sixteen"
    ],
    correct: 1,
    explanation: "Mortimer was twelve years old when he discovered the battered book in the library.",
    hint: "Think of a dozen years."
  },
  {
    id: 25,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "How was the mysterious book bound?",
    options: [
      "In smooth green silk",
      "In battered red leather",
      "In heavy black metal clasps",
      "In blue paperback cardboard"
    ],
    correct: 1,
    explanation: "Mortimer found a battered, red-leather-bound book tucked away on the shelves.",
    hint: "A worn cover made of red animal hide."
  },
  {
    id: 26,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "Which page of the book contained the frightening illustration?",
    options: [
      "Page twenty-five",
      "Page fifty",
      "Page seventy",
      "Page one hundred"
    ],
    correct: 1,
    explanation: "The terrifying picture that haunted Mortimer's boyhood was located on page fifty.",
    hint: "Half of a century."
  },
  {
    id: 27,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What did the illustration on page fifty depict?",
    options: [
      "A ghost wandering through an abandoned churchyard",
      "An empty railway platform at night with a solitary figure facing a dark tunnel",
      "A speeding train crashing through a foggy bridge",
      "A mysterious old man reading in a dimly lit library"
    ],
    correct: 1,
    explanation: "The illustration showed a deserted railway platform lit by a dull yellow lamp, with a solitary dark figure facing the black mouth of a railway tunnel.",
    hint: "A lonely figure standing on an empty platform at night."
  },
  {
    id: 28,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What kind of lamp illuminated the railway platform in the illustration?",
    options: [
      "A bright electric spotlight",
      "A dull yellow oil lamp",
      "A flickering candle lantern",
      "A blue neon light"
    ],
    correct: 1,
    explanation: "A single dull yellow oil lamp cast a faint, sickly glow over the deserted platform.",
    hint: "It emitted a dull yellow light."
  },
  {
    id: 29,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "How did the illustration affect Mortimer as a growing boy?",
    options: [
      "It inspired him to become a train driver",
      "It filled him with terror and gave him recurring nightmares",
      "He showed it proudly to all his school friends",
      "He forgot about it completely within a week"
    ],
    correct: 1,
    explanation: "The illustration haunted Mortimer's thoughts, frequently causing him to wake up in terror from nightmarish dreams.",
    hint: "It induced persistent dread and bad dreams."
  },
  {
    id: 30,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "Where was Mortimer waiting for a train as a young adult years later?",
    options: [
      "At a crowded underground subway station in London",
      "On an empty, desolate railway junction late at night",
      "Inside a comfortable first-class waiting room",
      "At a sunny rural countryside halt"
    ],
    correct: 1,
    explanation: "Mortimer stood alone waiting on a desolate, deserted railway junction on a chilly night.",
    hint: "A deserted, dark junction."
  },
  {
    id: 31,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What eerie realization struck Mortimer while standing on the real platform?",
    options: [
      "He had forgotten his train ticket and money",
      "The scene was an exact, living duplicate of the illustration on page fifty",
      "The station master was his childhood doctor",
      "The railway line had been permanently closed"
    ],
    correct: 1,
    explanation: "Mortimer suddenly realized the lamppost, the empty platform, and the solitary figure facing the dark tunnel were identical to the book's illustration.",
    hint: "The book illustration had manifested into real life."
  },
  {
    id: 32,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What did Mortimer see when the solitary figure on the platform turned around?",
    options: [
      "A faceless, blank white mask",
      "He was staring straight into his own face",
      "The grinning skull of a skeleton",
      "His father looking back at him"
    ],
    correct: 1,
    explanation: "When the dark stranger turned toward the lamplight, Mortimer was horrified to gaze directly into his own face.",
    hint: "A terrifying doppelgänger."
  },
  {
    id: 33,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "How did Mortimer react upon seeing the figure's face?",
    options: [
      "He shook the figure's hand",
      "He turned in overwhelming panic and ran wildly into the night",
      "He drew a weapon and fired",
      "He collapsed and went to sleep on the bench"
    ],
    correct: 1,
    explanation: "Seized with blind panic and sheer horror, Mortimer turned around and sprinted into the surrounding darkness.",
    hint: "He fled in a frantic, wild run."
  },
  {
    id: 34,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What refuge did Mortimer stumble upon after fleeing the railway station?",
    options: [
      "A police outpost",
      "A lone cottage with a light in the window",
      "A railway signal cabin",
      "A monastery on a hill"
    ],
    correct: 1,
    explanation: "Mortimer ran until he came across an isolated cottage with a yellow light shining through a window.",
    hint: "A small isolated house in the countryside."
  },
  {
    id: 35,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What terrifying discovery awaited Mortimer inside the parlour of the cottage?",
    options: [
      "A trapdoor leading to a dungeon",
      "The exact same battered red-leather book lying open at page fifty",
      "A railway timetable dated fifty years in the future",
      "A telegram announcing his own death"
    ],
    correct: 1,
    explanation: "On the table in the cottage lay the very same battered red-leather book from his childhood, open to page fifty.",
    hint: "The red-leather volume had reappeared."
  },
  {
    id: 36,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "mcq",
    question: "What happened at the final climactic moment of the story?",
    options: [
      "Mortimer jumped out of the window into a river",
      "Footsteps approached outside, the door swung open, and the shadowy figure stood on the threshold",
      "The old man gave Mortimer a warm cup of tea and calmed him down",
      "A whistle blew and Mortimer woke up in his bed"
    ],
    correct: 1,
    explanation: "As Mortimer stared at the book in dread, footsteps neared, the door creaked open, and the dark figure appeared in the doorway.",
    hint: "The figure followed him to the threshold of the room."
  },

  // ==========================================
  // LESSON 11: DRAG & DROP FILL-IN-THE-BLANKS
  // ==========================================
  {
    id: 37,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "Mortimer found the battered red-leather book in his father's ",
    sentenceAfter: " when he was twelve.",
    correctAnswer: "library",
    options: ["library", "attic", "basement", "bedroom"],
    explanation: "Mortimer discovered the book while exploring his father's library.",
    hint: "A room filled with bookshelves."
  },
  {
    id: 38,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "The terrifying illustration was printed on page ",
    sentenceAfter: " of the mysterious book.",
    correctAnswer: "fifty",
    options: ["fifty", "twelve", "thirty", "twenty"],
    explanation: "Page fifty contained the iconic, haunting illustration.",
    hint: "Number five followed by zero."
  },
  {
    id: 39,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "The lonely railway platform was illuminated by a dull ",
    sentenceAfter: " oil lamp.",
    correctAnswer: "yellow",
    options: ["yellow", "white", "green", "crimson"],
    explanation: "The lamppost gave off a dim, dull yellow light.",
    hint: "The color of an oil flame."
  },
  {
    id: 40,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "The solitary dark figure stood facing the black mouth of the ",
    sentenceAfter: ".",
    correctAnswer: "tunnel",
    options: ["tunnel", "bridge", "forest", "valley"],
    explanation: "The dark figure stood with back turned, facing into the railway tunnel.",
    hint: "An underground passage for trains."
  },
  {
    id: 41,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "When the dark figure turned around, Mortimer gasped to see his own ",
    sentenceAfter: ".",
    correctAnswer: "face",
    options: ["face", "shadow", "reflection", "portrait"],
    explanation: "The terrifying climax on the platform occurs when Mortimer sees his own countenance.",
    hint: "The front part of a person's head."
  },
  {
    id: 42,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "Overcome with sheer terror, Mortimer turned and fled in a wild ",
    sentenceAfter: ".",
    correctAnswer: "run",
    options: ["run", "haste", "frenzy", "sprint"],
    explanation: "The story states that Mortimer turned and broke into a wild run.",
    hint: "Fast foot locomotion in panic."
  },
  {
    id: 43,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "Seeking shelter from the night, Mortimer knocked at an isolated ",
    sentenceAfter: ".",
    correctAnswer: "cottage",
    options: ["cottage", "station", "mansion", "tavern"],
    explanation: "Mortimer ran to a small country cottage where a light glowed in the window.",
    hint: "A small rural home."
  },
  {
    id: 44,
    categoryKey: "l11",
    categoryTitle: "Lesson 11: Midnight Express",
    type: "drag-drop",
    sentenceBefore: "Inside the cottage, the red-leather book lay open on the table at page ",
    sentenceAfter: ".",
    correctAnswer: "fifty",
    options: ["fifty", "sixty", "twenty", "twelve"],
    explanation: "The book in the cottage was open to the very same page fifty.",
    hint: "The same page number as in the library."
  },

  // ==========================================
  // LESSON 12: SOMEONE (Walter de la Mare) - MCQ
  // ==========================================
  {
    id: 45,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "Who composed the mystical poem 'Someone'?",
    options: [
      "Alfred Noyes",
      "Walter de la Mare",
      "William Wordsworth",
      "Robert Frost"
    ],
    correct: 1,
    explanation: "'Someone' was composed by Walter de la Mare, famous for his poems exploring mystery, imagination, and nature.",
    hint: "The English poet known for 'The Listeners'."
  },
  {
    id: 46,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "Where did someone come knocking in the poem?",
    options: [
      "At the garden gate",
      "At the poet's wee, small door",
      "At the bedroom window shutter",
      "On the chimney roof"
    ],
    correct: 1,
    explanation: "The poem begins: 'Someone came knocking / At my wee, small door'.",
    hint: "A tiny door described with a Scottish/English word."
  },
  {
    id: 47,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "What does the word 'wee' mean in the poem?",
    options: [
      "Ancient and heavy",
      "Very small or tiny",
      "Painted bright green",
      "Locked and barred"
    ],
    correct: 1,
    explanation: "'Wee' is a classic dialect word meaning very small or tiny.",
    hint: "A synonym for very small."
  },
  {
    id: 48,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "How certain was the poet that someone knocked?",
    options: [
      "He thought he was merely dreaming",
      "He was 'sure-sure-sure'",
      "He assumed it was just a branch scratching",
      "He asked a neighbor to verify"
    ],
    correct: 1,
    explanation: "The poet repeats emphatically: 'Someone came knocking, / I'm sure-sure-sure'.",
    hint: "He repeated the word 'sure' three times."
  },
  {
    id: 49,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "Which sequence of actions did the poet take after hearing the knock?",
    options: [
      "He hid under the bed and closed his eyes",
      "He listened, opened the door, and looked to left and right",
      "He called for his guard dog and grabbed a candle",
      "He shouted loudly into the dark night"
    ],
    correct: 1,
    explanation: "The poet describes: 'I listened, I opened, / I looked to left and right'.",
    hint: "He used his ears, then turned the knob, then scanned both sides."
  },
  {
    id: 50,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "What did the poet see when he looked outside into the night?",
    options: [
      "A cloaked traveler waiting patiently",
      "Nought there was a-stirring in the still dark night",
      "A fox darting across the garden",
      "A sudden flash of lightning"
    ],
    correct: 1,
    explanation: "The poet saw nothing moving: 'But nought there was a-stirring / In the still dark night'.",
    hint: "'Nought' means nothing."
  },
  {
    id: 51,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "What was the busy beetle doing in the poem?",
    options: [
      "Crawling across the threshold",
      "Tap-tapping in the wall",
      "Flying around the lantern",
      "Chewing on wooden furniture"
    ],
    correct: 1,
    explanation: "The poet heard: 'Only the busy beetle / Tap-tapping in the wall'.",
    hint: "Making a rhythmic tapping sound inside the timber."
  },
  {
    id: 52,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "Which nocturnal bird's call sounded from the forest?",
    options: [
      "The nightingale",
      "The screech-owl",
      "The cuckoo",
      "The raven"
    ],
    correct: 1,
    explanation: "The poem specifically mentions: 'Only from the forest / The screech-owl's call'.",
    hint: "A bird known for its shrill night shriek."
  },
  {
    id: 53,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "What was the cricket doing while the dewdrops fell?",
    options: [
      "Chirping softly in the pantry",
      "Whistling",
      "Hiding beneath stones",
      "Rubbing its antennae together"
    ],
    correct: 1,
    explanation: "The lines state: 'Only the cricket whistling / While the dewdrops fall'.",
    hint: "Making a high whistling sound."
  },
  {
    id: 54,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "How does the poem conclude regarding the visitor's identity?",
    options: [
      "The visitor was identified as the local postman",
      "The poet knows not who came knocking, at all, at all, at all",
      "It turned out to be an owl tapping with its beak",
      "The poet realized it was only the wind blowing the door"
    ],
    correct: 1,
    explanation: "The poem closes with mystery intact: 'So I know not who came knocking, / At all, at all, at all'.",
    hint: "The question remains an unresolved mystery."
  },
  {
    id: 55,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "Which literary device is illustrated by the sound phrase 'tap-tapping'?",
    options: [
      "Metaphor",
      "Onomatopoeia",
      "Personification",
      "Hyperbole"
    ],
    correct: 1,
    explanation: "Onomatopoeia refers to words that phonetically imitate the actual natural sound (like tap-tapping, whistling, buzz).",
    hint: "Words that echo the sound they make."
  },
  {
    id: 56,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "mcq",
    question: "What overall mood does Walter de la Mare create in 'Someone'?",
    options: [
      "Hilarious and cheerful",
      "Mysterious, eerie, and peacefully quiet",
      "Angry and chaotic",
      "Terrifying and gory"
    ],
    correct: 1,
    explanation: "The poem generates an enchanting mood of stillness, wonder, and gentle nocturnal mystery.",
    hint: "A quiet, mysterious nocturnal atmosphere."
  },

  // ==========================================
  // LESSON 12: DRAG & DROP FILL-IN-THE-BLANKS
  // ==========================================
  {
    id: 57,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "Someone came knocking at my ",
    sentenceAfter: ", small door.",
    correctAnswer: "wee",
    options: ["wee", "grand", "wide", "heavy"],
    explanation: "Walter de la Mare opens the poem with 'At my wee, small door'.",
    hint: "A Scottish word meaning tiny."
  },
  {
    id: 58,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "The poet listened, opened the door, and looked to left and ",
    sentenceAfter: ".",
    correctAnswer: "right",
    options: ["right", "behind", "ahead", "forward"],
    explanation: "The text says: 'I looked to left and right'.",
    hint: "The opposite direction of left."
  },
  {
    id: 59,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "Nought there was a-stirring in the still ",
    sentenceAfter: " night.",
    correctAnswer: "dark",
    options: ["dark", "bright", "stormy", "windy"],
    explanation: "The night is described as 'the still dark night'.",
    hint: "Absence of daylight."
  },
  {
    id: 60,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "Only the busy beetle was tap-tapping in the ",
    sentenceAfter: ".",
    correctAnswer: "wall",
    options: ["wall", "door", "floor", "roof"],
    explanation: "The beetle was tap-tapping inside the wooden wall.",
    hint: "The vertical structure dividing rooms."
  },
  {
    id: 61,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "From the dense forest echoed the screech-",
    sentenceAfter: "'s call.",
    correctAnswer: "owl",
    options: ["owl", "crow", "hawk", "raven"],
    explanation: "The bird mentioned is the screech-owl.",
    hint: "A nocturnal bird of prey."
  },
  {
    id: 62,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "The cricket was ",
    sentenceAfter: " while the dewdrops fall.",
    correctAnswer: "whistling",
    options: ["whistling", "singing", "crying", "dancing"],
    explanation: "The cricket's sound is poetically described as whistling.",
    hint: "Making a high-pitched piping sound."
  },
  {
    id: 63,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "The word 'nought' in the poem signifies ",
    sentenceAfter: ".",
    correctAnswer: "nothing",
    options: ["nothing", "everything", "someone", "shadows"],
    explanation: "'Nought' is an archaic word meaning nothing or nil.",
    hint: "Zero or no thing."
  },
  {
    id: 64,
    categoryKey: "l12",
    categoryTitle: "Lesson 12: Someone",
    type: "drag-drop",
    sentenceBefore: "The poet closes the verse saying: 'So I know ",
    sentenceAfter: " who came knocking'.",
    correctAnswer: "not",
    options: ["not", "well", "all", "now"],
    explanation: "The poet states: 'So I know not who came knocking'.",
    hint: "Expresses negative knowledge."
  },

  // ==========================================
  // LESSON 13: THE MAN WHO PLANTED TREES (Jean Giono) - MCQ
  // ==========================================
  {
    id: 65,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "Who wrote the uplifting story 'The Man Who Planted Trees'?",
    options: [
      "Alfred Noyes",
      "Walter de la Mare",
      "Jean Giono",
      "Roald Dahl"
    ],
    correct: 2,
    explanation: "'The Man Who Planted Trees' is a masterpiece by the French author Jean Giono.",
    hint: "A French author whose first name is Jean."
  },
  {
    id: 66,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "In what year and setting did the narrator undertake his long mountain hike?",
    options: [
      "In 1945, through the Black Forest of Germany",
      "In June 1913, through the desolate Alps in Provence, France",
      "In 1920, across the Scottish moors",
      "In 1910, along the Pyrenees in Spain"
    ],
    correct: 1,
    explanation: "The narrator set out on a solitary walking tour in June 1913 in the rugged Alps of Provence, France.",
    hint: "Just before the outbreak of World War I in Provence."
  },
  {
    id: 67,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What was the appearance of the landscape when the narrator first hiked through it?",
    options: [
      "Lush orchards and blooming flower gardens",
      "Barren, colourless, and dry wasteland where nothing grew except wild lavender",
      "Deep snow and towering glaciers",
      "Thick tropical rainforest with marshy bogs"
    ],
    correct: 1,
    explanation: "The region was barren, dry, and abandoned, with dried-up springs and only wild lavender growing on rocky slopes.",
    hint: "A desolate wasteland with only wild lavender."
  },
  {
    id: 68,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "How did the narrator describe the sound of the wind in the desolate highlands?",
    options: [
      "Like a sweet lullaby sung by mother nature",
      "Like a wild beast disturbed during its meal",
      "Like the horn of a speeding express train",
      "Like the whispering of autumn leaves"
    ],
    correct: 1,
    explanation: "Giono wrote that the wind blew with unendurable savagery, roaring like a wild beast disturbed during its meal.",
    hint: "A fierce animal interrupted while eating."
  },
  {
    id: 69,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What was the name of the solitary shepherd who offered water and shelter to the narrator?",
    options: [
      "Harold Dahl",
      "Elzéard Bouffier",
      "Walter Mortimer",
      "Aadnesen"
    ],
    correct: 1,
    explanation: "The peaceful shepherd was fifty-five-year-old Elzéard Bouffier.",
    hint: "His French name starts with Elzéard."
  },
  {
    id: 70,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What animals did Elzéard Bouffier keep when the narrator first visited him?",
    options: [
      "A herd of twenty dairy cattle",
      "Thirty sheep and a loyal dog",
      "Flocks of geese and ducks",
      "A dozen riding horses"
    ],
    correct: 1,
    explanation: "Bouffier lived quietly in his sturdy stone house with thirty sheep and his shepherd dog.",
    hint: "Three tens of sheep plus a canine companion."
  },
  {
    id: 71,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What meticulous task did Bouffier carry out in the evening after supper?",
    options: [
      "He sorted a sack of acorns, selecting one hundred perfect, undamaged ones",
      "He carved chess pieces from fallen branches",
      "He counted his savings from wool sales",
      "He read aloud from classical French philosophy"
    ],
    correct: 0,
    explanation: "Bouffier poured acorns onto the table and carefully separated the 100 finest, crack-free acorns to plant the next morning.",
    hint: "Examining tree seeds to choose the best one hundred."
  },
  {
    id: 72,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What implement did Bouffier use to plant the acorns into the hard mountain earth?",
    options: [
      "A wooden hoe",
      "An iron rod as thick as a thumb and a yard and a half long",
      "A sharp copper trowel",
      "A horse-drawn plough"
    ],
    correct: 1,
    explanation: "He carried an iron rod, thrust it into the ground to create a deep hole, dropped in an acorn, and smoothed back the soil.",
    hint: "A heavy rod of iron as thick as his thumb."
  },
  {
    id: 73,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "How many acorns had Bouffier already planted, and what was his survival estimate?",
    options: [
      "5,000 planted; expecting 1,000 trees",
      "100,000 planted; expecting 20,000 to sprout and 10,000 oaks to grow to maturity",
      "10,000 planted; expecting all 10,000 to survive",
      "50,000 planted; expecting 500 trees"
    ],
    correct: 1,
    explanation: "Bouffier had planted 100,000 acorns; he anticipated 20,000 would sprout and about 10,000 would withstand rodents and drought to become mighty trees.",
    hint: "One hundred thousand acorns planted."
  },
  {
    id: 74,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What major historic event kept the narrator away from the region for five years?",
    options: [
      "The French Revolution",
      "World War I (1914–1918)",
      "The Great Depression",
      "World War II"
    ],
    correct: 1,
    explanation: "The narrator was drafted as an infantry soldier and fought for five years in the First World War.",
    hint: "The global war fought between 1914 and 1918."
  },
  {
    id: 75,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "When the narrator returned in 1920, what breathtaking change greeted him?",
    options: [
      "A vast industrial factory had taken over the hills",
      "A thriving young forest of oaks, beeches, and birches stood tall, and dried brooks flowed with clear water",
      "The valley had turned into an arid salt desert",
      "The shepherd's cottage had completely disappeared"
    ],
    correct: 1,
    explanation: "Ten-year-old oak trees reached above their heads, tender birches and beeches flourished, and natural springs ran with fresh water again.",
    hint: "A lush, flourishing green forest with running brooks."
  },
  {
    id: 76,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "Why did Bouffier replace his herd of sheep with beehives in his later years?",
    options: [
      "He became tired of shearing sheep",
      "Sheep threatened to browse and destroy the delicate young tree shoots",
      "Honey was more profitable than wool",
      "A disease wiped out all his sheep"
    ],
    correct: 1,
    explanation: "Bouffier retained only three sheep and took up beekeeping because grazing sheep might nibble and damage his young saplings.",
    hint: "Sheep might eat the young tree shoots."
  },
  {
    id: 77,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What became of the ruined, abandoned villages by the conclusion of the story?",
    options: [
      "They remained haunted, uninhabited ghost towns",
      "People returned, restored stone houses, planted gardens, and over 10,000 residents lived happily",
      "They were demolished to build an airport",
      "They were submerged by a hydro-electric dam"
    ],
    correct: 1,
    explanation: "The reforestation revitalized the entire ecosystem; over 10,000 people moved back into thriving, cheerful mountain villages.",
    hint: "Thousands of people returned and prospered."
  },
  {
    id: 78,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "mcq",
    question: "What is the noble central message of 'The Man Who Planted Trees'?",
    options: [
      "Nature cannot be saved without heavy government funding",
      "A single patient, selfless human being can transform desolation into paradise",
      "Modern machinery is indispensable for ecological balance",
      "People should always move away from dry, difficult lands"
    ],
    correct: 1,
    explanation: "The story is an enduring tribute to the boundless power of selfless persistence and love for the environment.",
    hint: "One humble person's dedication can regenerate the earth."
  },

  // ==========================================
  // LESSON 13: DRAG & DROP FILL-IN-THE-BLANKS
  // ==========================================
  {
    id: 79,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "The narrator met a solitary shepherd named Elzéard ",
    sentenceAfter: ".",
    correctAnswer: "Bouffier",
    options: ["Bouffier", "Mortimer", "Aadnesen", "Giono"],
    explanation: "The protagonist shepherd's surname is Bouffier.",
    hint: "Starts with the letter 'B'."
  },
  {
    id: 80,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "In the barren highlands, nothing grew except wild ",
    sentenceAfter: ".",
    correctAnswer: "lavender",
    options: ["lavender", "roses", "grass", "wheat"],
    explanation: "Only wild lavender survived on the arid mountain slopes.",
    hint: "A fragrant purple mountain plant."
  },
  {
    id: 81,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "The wind roared like a wild ",
    sentenceAfter: " disturbed during its meal.",
    correctAnswer: "beast",
    options: ["beast", "bird", "lion", "serpent"],
    explanation: "Giono compared the wind to a savage 'wild beast'.",
    hint: "A wild animal."
  },
  {
    id: 82,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "Each evening, Bouffier selected one hundred perfect ",
    sentenceAfter: " for planting.",
    correctAnswer: "acorns",
    options: ["acorns", "pinecones", "chestnuts", "pebbles"],
    explanation: "Acorns are the seeds of oak trees.",
    hint: "The nuts produced by oak trees."
  },
  {
    id: 83,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "Bouffier punched holes into the hard ground using an ",
    sentenceAfter: " rod.",
    correctAnswer: "iron",
    options: ["iron", "wooden", "copper", "steel"],
    explanation: "He used a heavy iron rod to make planting holes.",
    hint: "A strong magnetic metal."
  },
  {
    id: 84,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "The narrator was separated from Provence for five years due to World War ",
    sentenceAfter: ".",
    correctAnswer: "One",
    options: ["One", "Two", "Three", "Four"],
    explanation: "World War One lasted from 1914 to 1918.",
    hint: "The first global war."
  },
  {
    id: 85,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "Dried-up mountain springs once again flowed with sparkling ",
    sentenceAfter: ".",
    correctAnswer: "water",
    options: ["water", "stream", "rainfall", "sap"],
    explanation: "The trees absorbed moisture and brought back flowing spring water.",
    hint: "The vital liquid for all life."
  },
  {
    id: 86,
    categoryKey: "l13",
    categoryTitle: "Lesson 13: The Man Who Planted Trees",
    type: "drag-drop",
    sentenceBefore: "To protect tender young tree shoots from sheep, Bouffier kept ",
    sentenceAfter: ".",
    correctAnswer: "bees",
    options: ["bees", "goats", "rabbits", "horses"],
    explanation: "Bouffier turned to beekeeping to prevent livestock from chewing saplings.",
    hint: "Insects that make honey."
  },

  // ==========================================
  // GRAMMAR: PREFIX AND SUFFIX - MCQ (18 Questions)
  // ==========================================
  {
    id: 87,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix attaches to 'patient' to form its opposite?",
    options: ["un-", "im-", "in-", "dis-"],
    correct: 1,
    explanation: "Adjectives starting with 'p' or 'm' commonly take the prefix 'im-' (patient -> impatient, polite -> impolite, mature -> immature).",
    hint: "Think of words like 'impolite' or 'impossible'."
  },
  {
    id: 88,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix attaches to 'legal' to create its antonym?",
    options: ["il-", "ir-", "un-", "mis-"],
    correct: 0,
    explanation: "Root words beginning with 'l' generally take the prefix 'il-' to form opposites (legal -> illegal, literate -> illiterate, logical -> illogical).",
    hint: "Notice the first letter 'l'."
  },
  {
    id: 89,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix attaches to 'responsible' to create its opposite?",
    options: ["in-", "ir-", "un-", "dis-"],
    correct: 1,
    explanation: "Words starting with 'r' take the prefix 'ir-' (responsible -> irresponsible, regular -> irregular, reversible -> irreversible).",
    hint: "Notice the initial consonant 'r'."
  },
  {
    id: 90,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Add a suffix to 'free' to form an abstract noun:",
    options: ["-ment", "-dom", "-ness", "-ship"],
    correct: 1,
    explanation: "The suffix '-dom' denotes a state, condition, or realm (free -> freedom, wise -> wisdom, king -> kingdom).",
    hint: "Freedom of speech."
  },
  {
    id: 91,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Add a suffix to 'child' to denote the state or period of being a child:",
    options: ["-hood", "-able", "-ful", "-ous"],
    correct: 0,
    explanation: "The suffix '-hood' denotes a stage of life or condition (child -> childhood, boy -> boyhood, parent -> parenthood).",
    hint: "As in the book title 'Tales of Childhood'."
  },
  {
    id: 92,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix converts the verb 'govern' into a noun?",
    options: ["-ment", "-less", "-able", "-ly"],
    correct: 0,
    explanation: "The suffix '-ment' creates nouns from verbs indicating the action, process, or institution (govern -> government, manage -> management).",
    hint: "The political body that governs a country."
  },
  {
    id: 93,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix attaches to 'behave' to mean 'to act improperly'?",
    options: ["un-", "mis-", "dis-", "in-"],
    correct: 1,
    explanation: "The prefix 'mis-' signifies badly, wrongly, or mistakenly (misbehave, misunderstand, mislead, misplace).",
    hint: "Means wrong or bad conduct."
  },
  {
    id: 94,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix is used to form the opposite of 'appear'?",
    options: ["in-", "dis-", "un-", "non-"],
    correct: 1,
    explanation: "The prefix 'dis-' is added to 'appear' to form 'disappear'.",
    hint: "To vanish from sight."
  },
  {
    id: 95,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix transforms the noun 'danger' into an adjective?",
    options: ["-ous", "-ness", "-ment", "-ship"],
    correct: 0,
    explanation: "The suffix '-ous' forms adjectives meaning 'full of' or 'characterized by' (danger -> dangerous, courage -> courageous).",
    hint: "A dangerous path."
  },
  {
    id: 96,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix added to 'secure' creates the antonym meaning 'not safe'?",
    options: ["un-", "in-", "dis-", "mis-"],
    correct: 1,
    explanation: "'Secure' takes the Latinate prefix 'in-' to produce 'insecure'.",
    hint: "Lacking security or confidence."
  },
  {
    id: 97,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "What is the opposite of 'honest' formed by adding a prefix?",
    options: ["unhonest", "dishonest", "inhonest", "mishonest"],
    correct: 1,
    explanation: "The prefix 'dis-' is affixed to 'honest' to yield 'dishonest'.",
    hint: "Not truthful."
  },
  {
    id: 98,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix attaches to 'dark' to form an abstract noun?",
    options: ["-ness", "-tion", "-ment", "-ous"],
    correct: 0,
    explanation: "The Germanic suffix '-ness' creates abstract nouns of state or quality from adjectives (dark -> darkness, kind -> kindness, bright -> brightness).",
    hint: "The quality of being dark."
  },
  {
    id: 99,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix attaches to 'care' to mean 'without care' or 'reckless'?",
    options: ["-ful", "-less", "-able", "-ly"],
    correct: 1,
    explanation: "The suffix '-less' means without or lacking (care -> careless, hope -> hopeless, penny -> penniless).",
    hint: "Opposite of careful."
  },
  {
    id: 100,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix transforms the adjective 'quick' into an adverb of manner?",
    options: ["-ly", "-ness", "-ful", "-dom"],
    correct: 0,
    explanation: "Adding '-ly' to an adjective creates an adverb answering 'how' an action is performed (quick -> quickly, quiet -> quietly).",
    hint: "He ran quickly."
  },
  {
    id: 101,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix attaches to 'possible' to indicate inability to occur?",
    options: ["un-", "im-", "in-", "dis-"],
    correct: 1,
    explanation: "Root words beginning with 'p' take 'im-' (possible -> impossible, probable -> improbable).",
    hint: "Nothing is impossible."
  },
  {
    id: 102,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix attached to 'friend' forms a noun meaning the relationship between friends?",
    options: ["-ship", "-ment", "-able", "-ful"],
    correct: 0,
    explanation: "The suffix '-ship' forms nouns denoting relationship, status, or skill (friend -> friendship, leader -> leadership, member -> membership).",
    hint: "A bond of friendship."
  },
  {
    id: 103,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which prefix attaches to 'literate' to describe someone unable to read or write?",
    options: ["un-", "il-", "in-", "dis-"],
    correct: 1,
    explanation: "Root words beginning with 'l' assimilate 'in-' into 'il-' (literate -> illiterate).",
    hint: "Starts with 'il-'."
  },
  {
    id: 104,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "mcq",
    question: "Which suffix attaches to the verb 'educate' to form an abstract noun?",
    options: ["-tion", "-ness", "-ship", "-hood"],
    correct: 0,
    explanation: "Dropping the final 'e' and adding '-tion' converts 'educate' into 'education'.",
    hint: "Schooling and learning."
  },

  // ==========================================
  // GRAMMAR: PREFIX AND SUFFIX - DRAG & DROP (10 Questions)
  // ==========================================
  {
    id: 105,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "It is simply ",
    sentenceAfter: " to climb that sheer vertical icy cliff without ropes.",
    correctAnswer: "impossible",
    options: ["impossible", "unpossible", "dispossible", "inpossible"],
    explanation: "'Possible' takes the prefix 'im-' to form 'impossible'.",
    hint: "Prefix 'im-' before 'p'."
  },
  {
    id: 106,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "Every citizen cherishes the ",
    sentenceAfter: " of thought, expression, and belief.",
    correctAnswer: "freedom",
    options: ["freedom", "freeness", "freehood", "freeship"],
    explanation: "The noun formed from 'free' is 'freedom'.",
    hint: "Suffix '-dom'."
  },
  {
    id: 107,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "Please listen attentively so that you do not ",
    sentenceAfter: " the project guidelines.",
    correctAnswer: "misunderstand",
    options: ["misunderstand", "disunderstand", "ununderstand", "inunderstand"],
    explanation: "The prefix 'mis-' means incorrectly (misunderstand = understand wrongly).",
    hint: "Prefix meaning wrong comprehension."
  },
  {
    id: 108,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "Regular exercise and wholesome food improve physical ",
    sentenceAfter: ".",
    correctAnswer: "fitness",
    options: ["fitness", "fitment", "fitdom", "fithood"],
    explanation: "The adjective 'fit' forms the noun 'fitness' with '-ness'.",
    hint: "State of being physically fit."
  },
  {
    id: 109,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "Walking along unlit railway tracks at midnight is highly ",
    sentenceAfter: ".",
    correctAnswer: "dangerous",
    options: ["dangerous", "dangerness", "dangerful", "dangerable"],
    explanation: "'Danger' takes '-ous' to form the adjective 'dangerous'.",
    hint: "Full of danger."
  },
  {
    id: 110,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "An ",
    sentenceAfter: " person cannot read books or write letters.",
    correctAnswer: "illiterate",
    options: ["illiterate", "unliterate", "disliterate", "inliterate"],
    explanation: "'Literate' takes the prefix 'il-' to create 'illiterate'.",
    hint: "Opposite of literate."
  },
  {
    id: 111,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "Speeding through a busy school zone is an ",
    sentenceAfter: " act.",
    correctAnswer: "irresponsible",
    options: ["irresponsible", "unresponsible", "disresponsible", "inresponsible"],
    explanation: "Prefix 'ir-' before 'r' produces 'irresponsible'.",
    hint: "Lacking responsibility."
  },
  {
    id: 112,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "True and honest ",
    sentenceAfter: " is one of life's greatest treasures.",
    correctAnswer: "friendship",
    options: ["friendship", "friendment", "friendness", "friendhood"],
    explanation: "The noun 'friend' forms 'friendship' with '-ship'.",
    hint: "The bond between close friends."
  },
  {
    id: 113,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "The nurse handled the injured patient very ",
    sentenceAfter: ".",
    correctAnswer: "carefully",
    options: ["carefully", "carefulness", "careless", "caredom"],
    explanation: "The adverb 'carefully' modifies the verb 'handled'.",
    hint: "Adverb formed with '-ly'."
  },
  {
    id: 114,
    categoryKey: "grammar_prefix_suffix",
    categoryTitle: "Grammar: Prefix & Suffix",
    type: "drag-drop",
    sentenceBefore: "The thick morning fog began to ",
    sentenceAfter: " as the sun rose.",
    correctAnswer: "disappear",
    options: ["disappear", "unappear", "inappear", "misappear"],
    explanation: "'Appear' takes 'dis-' to mean vanish from sight.",
    hint: "To fade away from sight."
  },

  // ==========================================
  // GRAMMAR: VOICE CHANGE - MCQ (20 Questions)
  // ==========================================
  {
    id: 115,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Children like the game of cricket.'",
    options: [
      "The game of cricket is liked by children.",
      "The game of cricket was liked by children.",
      "The game of cricket has been liked by children.",
      "The game of cricket is being liked by children."
    ],
    correct: 0,
    explanation: "Simple Present tense in passive uses: `Object + is/am/are + V3 (past participle) + by + Subject`. 'The game of cricket' is singular, so we use 'is liked'.",
    hint: "Simple present passive formula: is/am/are + V3."
  },
  {
    id: 116,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'The boy caught the thief.'",
    options: [
      "The thief is caught by the boy.",
      "The thief was caught by the boy.",
      "The thief had been caught by the boy.",
      "The thief was being caught by the boy."
    ],
    correct: 1,
    explanation: "Simple Past tense in passive uses: `Object + was/were + V3 + by + Subject`. 'The thief' is singular, so 'was caught'.",
    hint: "Simple past passive formula: was/were + V3."
  },
  {
    id: 117,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'The boys are flying kites.'",
    options: [
      "Kites are flown by the boys.",
      "Kites were being flown by the boys.",
      "Kites are being flown by the boys.",
      "Kites have been flown by the boys."
    ],
    correct: 2,
    explanation: "Present Continuous passive uses: `Object + is/am/are + being + V3 + by + Subject`. 'Kites' is plural, so 'are being flown'.",
    hint: "Continuous tenses require 'being + V3'."
  },
  {
    id: 118,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'My mother was cooking dinner.'",
    options: [
      "Dinner is cooked by my mother.",
      "Dinner was being cooked by my mother.",
      "Dinner had been cooked by my mother.",
      "Dinner was cooked by my mother."
    ],
    correct: 1,
    explanation: "Past Continuous passive uses: `Object + was/were + being + V3 + by + Subject`. Hence, 'Dinner was being cooked by my mother.'",
    hint: "Past continuous takes was/were + being + V3."
  },
  {
    id: 119,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Some miscreants have cut all the telephone wires.'",
    options: [
      "All the telephone wires are cut by some miscreants.",
      "All the telephone wires were cut by some miscreants.",
      "All the telephone wires have been cut by some miscreants.",
      "All the telephone wires had been cut by some miscreants."
    ],
    correct: 2,
    explanation: "Present Perfect passive uses: `Object + have/has + been + V3 + by + Subject`. 'Wires' is plural, so 'have been cut'.",
    hint: "Present perfect passive uses have/has + been + V3."
  },
  {
    id: 120,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'They had not done their homework.'",
    options: [
      "Their homework was not done by them.",
      "Their homework had not been done by them.",
      "Their homework has not been done by them.",
      "Their homework is not done by them."
    ],
    correct: 1,
    explanation: "Past Perfect passive uses: `Object + had + not + been + V3 + by + Subject`.",
    hint: "Past perfect passive takes had + been + V3."
  },
  {
    id: 121,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'We shall finish the work by 6 o'clock.'",
    options: [
      "The work will be finished by us by 6 o'clock.",
      "The work shall finished by us by 6 o'clock.",
      "The work was finished by us by 6 o'clock.",
      "The work is finished by us by 6 o'clock."
    ],
    correct: 0,
    explanation: "Simple Future passive uses: `will/shall + be + V3`. 'The work' is third person singular, which takes 'will be finished'.",
    hint: "Future passive uses will be + V3."
  },
  {
    id: 122,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'He cannot solve this difficult puzzle.'",
    options: [
      "This difficult puzzle could not be solved by him.",
      "This difficult puzzle cannot be solved by him.",
      "This difficult puzzle is not solved by him.",
      "This difficult puzzle will not be solved by him."
    ],
    correct: 1,
    explanation: "Modal verbs take: `Modal + be + V3` (cannot solve -> cannot be solved). The tense of the modal does not change.",
    hint: "Modal rule: modal + be + V3."
  },
  {
    id: 123,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Shut the door.'",
    options: [
      "The door was shut.",
      "Let the door be shut.",
      "You shut the door.",
      "Let the door shut."
    ],
    correct: 1,
    explanation: "Imperative orders change to passive using: `Let + Object + be + V3`. Therefore: 'Let the door be shut.'",
    hint: "Imperative command formula: Let + object + be + V3."
  },
  {
    id: 124,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Help the poor.'",
    options: [
      "The poor should be helped.",
      "The poor are helped.",
      "You helped the poor.",
      "Let poor help."
    ],
    correct: 0,
    explanation: "Imperatives expressing moral advice or duty use: `Object + should + be + V3`. Hence, 'The poor should be helped.' (or 'Let the poor be helped.').",
    hint: "For moral advice, use 'should be + V3'."
  },
  {
    id: 125,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Do this work now.'",
    options: [
      "You do this work now.",
      "Let this work be done now.",
      "This work was done now.",
      "Let this work do now."
    ],
    correct: 1,
    explanation: "Imperative command formula: `Let + Object (this work) + be + V3 (done) + now`.",
    hint: "Let + object + be + past participle."
  },
  {
    id: 126,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Who taught you English?'",
    options: [
      "By whom was you taught English?",
      "By whom were you taught English?",
      "Who was taught English by you?",
      "By whom English was taught you?"
    ],
    correct: 1,
    explanation: "'Who' becomes 'By whom'. The auxiliary 'were' agrees with the new subject 'you': 'By whom were you taught English?'",
    hint: "'Who' changes to 'By whom', followed by 'were you'."
  },
  {
    id: 127,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Did she disobey you?'",
    options: [
      "Were you disobeyed by her?",
      "Was you disobeyed by her?",
      "Are you disobeyed by her?",
      "Had you disobeyed by her?"
    ],
    correct: 0,
    explanation: "Simple past question: `Did + S + V1` becomes `Was/Were + Object + V3 + by + Subject`. For 'you', we use 'Were you disobeyed by her?'",
    hint: "Use 'Were' with 'you' in past tense questions."
  },
  {
    id: 128,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Has someone taken my pen?'",
    options: [
      "Has my pen been taken by someone?",
      "Have my pen been taken by someone?",
      "Was my pen taken by someone?",
      "Did my pen be taken by someone?"
    ],
    correct: 0,
    explanation: "Present perfect interrogative: `Has/Have + Object + been + V3`. 'My pen' is singular, so 'Has my pen been taken...'",
    hint: "Has + singular object + been + V3."
  },
  {
    id: 129,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'I know the gentleman.'",
    options: [
      "The gentleman is known by me.",
      "The gentleman is known to me.",
      "The gentleman was known to me.",
      "The gentleman has been known by me."
    ],
    correct: 1,
    explanation: "Important WBBSE rule: The verb 'know' takes the preposition 'to' in passive voice, NOT 'by' (known to me).",
    hint: "The verb 'know' takes 'to', not 'by'."
  },
  {
    id: 130,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'His behavior surprised everyone.'",
    options: [
      "Everyone was surprised by his behavior.",
      "Everyone was surprised at his behavior.",
      "Everyone is surprised with his behavior.",
      "Everyone had surprised at his behavior."
    ],
    correct: 1,
    explanation: "Rule: The verb 'surprise' takes the preposition 'at' when referring to conduct or actions (surprised at his behavior).",
    hint: "We are surprised 'at' an action or conduct."
  },
  {
    id: 131,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'The smoke filled the room.'",
    options: [
      "The room was filled by smoke.",
      "The room was filled with smoke.",
      "The room is filled by smoke.",
      "The room was being filled with smoke."
    ],
    correct: 1,
    explanation: "Rule: The verb 'fill' takes the preposition 'with' in passive voice (filled with smoke, not filled by smoke).",
    hint: "Something is filled 'with' a substance."
  },
  {
    id: 132,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to passive voice: 'Do not pluck the flowers.'",
    options: [
      "Let the flowers not be plucked.",
      "The flowers should not pluck.",
      "Let not flowers plucked.",
      "You do not pluck flowers."
    ],
    correct: 0,
    explanation: "Negative imperative passive uses: `Let + Object + not + be + V3` (Let the flowers not be plucked).",
    hint: "Negative command: Let + object + not + be + V3."
  },
  {
    id: 133,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to active voice: 'A letter was written by Rita.'",
    options: [
      "Rita writes a letter.",
      "Rita wrote a letter.",
      "Rita is writing a letter.",
      "Rita has written a letter."
    ],
    correct: 1,
    explanation: "Passive 'was written' indicates simple past tense. Active form is subject + V2: 'Rita wrote a letter.'",
    hint: "Simple past passive changes back to V2 (wrote)."
  },
  {
    id: 134,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "mcq",
    question: "Change to active voice: 'The bridge is being repaired by the workers.'",
    options: [
      "The workers repaired the bridge.",
      "The workers are repairing the bridge.",
      "The workers repair the bridge.",
      "The workers have repaired the bridge."
    ],
    correct: 1,
    explanation: "Passive 'is being repaired' indicates present continuous. The active form is `are repairing`.",
    hint: "Being + V3 in passive corresponds to -ing in active."
  },

  // ==========================================
  // GRAMMAR: VOICE CHANGE - DRAG & DROP (10 Questions)
  // ==========================================
  {
    id: 135,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: The boy caught the thief. → Passive: The thief ",
    sentenceAfter: " caught by the boy.",
    correctAnswer: "was",
    options: ["was", "is", "has", "had"],
    explanation: "Simple past passive requires 'was' for singular subject 'The thief'.",
    hint: "Past tense auxiliary for singular subject."
  },
  {
    id: 136,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: The boys are flying kites. → Passive: Kites are being ",
    sentenceAfter: " by the boys.",
    correctAnswer: "flown",
    options: ["flown", "flew", "fly", "flying"],
    explanation: "The past participle (V3) of 'fly' is 'flown'.",
    hint: "V3 form of fly."
  },
  {
    id: 137,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: Shut the door. → Passive: Let the door ",
    sentenceAfter: " shut.",
    correctAnswer: "be",
    options: ["be", "been", "being", "is"],
    explanation: "Imperative passive formula: `Let + Object + be + V3`.",
    hint: "The base form auxiliary after Let + object."
  },
  {
    id: 138,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: I know him well. → Passive: He is known ",
    sentenceAfter: " me well.",
    correctAnswer: "to",
    options: ["to", "by", "with", "at"],
    explanation: "'Known' takes the preposition 'to', not 'by'.",
    hint: "Special preposition used with 'known'."
  },
  {
    id: 139,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: His news surprised us. → Passive: We were surprised ",
    sentenceAfter: " his news.",
    correctAnswer: "at",
    options: ["at", "by", "with", "for"],
    explanation: "'Surprised' is followed by 'at' for news, behavior, or events.",
    hint: "Special preposition after surprised."
  },
  {
    id: 140,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: Someone has cut the wire. → Passive: The wire has ",
    sentenceAfter: " cut.",
    correctAnswer: "been",
    options: ["been", "being", "be", "is"],
    explanation: "Present perfect passive uses `has + been + V3`.",
    hint: "Participle used in perfect passive."
  },
  {
    id: 141,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: Who wrote the poem? → Passive: By ",
    sentenceAfter: " was the poem written?",
    correctAnswer: "whom",
    options: ["whom", "who", "which", "whose"],
    explanation: "In passive interrogatives, 'Who' becomes the objective form 'By whom'.",
    hint: "Objective case of 'who'."
  },
  {
    id: 142,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: Mother was cooking dinner. → Passive: Dinner was ",
    sentenceAfter: " cooked by mother.",
    correctAnswer: "being",
    options: ["being", "been", "be", "is"],
    explanation: "Past continuous passive uses `was + being + V3`.",
    hint: "Marker of continuous aspect in passive."
  },
  {
    id: 143,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: Help the needy. → Passive: The needy should ",
    sentenceAfter: " helped.",
    correctAnswer: "be",
    options: ["be", "been", "being", "was"],
    explanation: "Modal passive formula: `should + be + V3`.",
    hint: "Follows modal verb 'should'."
  },
  {
    id: 144,
    categoryKey: "grammar_voice",
    categoryTitle: "Grammar: Voice Change",
    type: "drag-drop",
    sentenceBefore: "Active: Tears filled her eyes. → Passive: Her eyes were filled ",
    sentenceAfter: " tears.",
    correctAnswer: "with",
    options: ["with", "by", "from", "of"],
    explanation: "'Filled' is followed by 'with' in passive voice.",
    hint: "Special preposition paired with filled."
  },

  // ==========================================
  // GRAMMAR: ARTICLES AND PREPOSITIONS - MCQ (20 Questions)
  // ==========================================
  {
    id: 145,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: 'Mr. Sen is _____ honest gentleman.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "'Honest' begins with a silent 'h' and vowel sound /ɒ/, so it takes 'an' (an honest gentleman).",
    hint: "The initial 'h' is silent."
  },
  {
    id: 146,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: 'Mount Everest is _____ highest mountain peak on Earth.'",
    options: ["a", "an", "the", "no article"],
    correct: 2,
    explanation: "Superlative adjectives (highest, biggest, most beautiful) take the definite article 'the'.",
    hint: "Superlative degrees of adjectives take 'the'."
  },
  {
    id: 147,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: 'He is enrolled in _____ European university.'",
    options: ["a", "an", "the", "no article"],
    correct: 0,
    explanation: "'European' begins with the semi-vowel / consonant sound /juː/ (like 'you'), so it takes 'a', not 'an'.",
    hint: "Pronounced with a consonant 'y' sound."
  },
  {
    id: 148,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: 'Can you lend me _____ one-rupee coin?'",
    options: ["a", "an", "the", "no article"],
    correct: 0,
    explanation: "'One' starts with the consonant sound /w/ (like 'won'), requiring 'a' (a one-rupee coin).",
    hint: "Sounds like 'w' at the beginning."
  },
  {
    id: 149,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: 'Kolkata stands on the bank of _____ Hooghly.'",
    options: ["a", "an", "the", "no article"],
    correct: 2,
    explanation: "Proper names of rivers (the Hooghly, the Ganges, the Nile) always take the definite article 'the'.",
    hint: "Rivers take 'the'."
  },
  {
    id: 150,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: 'We had to wait for _____ hour at the station.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "'Hour' has a silent 'h' and opens with a vowel sound, so it takes 'an' (an hour).",
    hint: "Silent 'h' word."
  },
  {
    id: 151,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct article: '_____ sun rises in the east and sets in the west.'",
    options: ["A", "An", "The", "No article"],
    correct: 2,
    explanation: "Unique celestial objects take 'the' (the sun, the moon, the earth, the sky).",
    hint: "Unique celestial body."
  },
  {
    id: 152,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The little girl is very fond _____ reading ghost stories.'",
    options: ["with", "of", "for", "in"],
    correct: 1,
    explanation: "'Fond' takes the fixed preposition 'of' (fond of reading).",
    hint: "Fixed preposition: fond + of."
  },
  {
    id: 153,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The student has been absent from school _____ last Monday.'",
    options: ["for", "since", "from", "at"],
    correct: 1,
    explanation: "'Since' denotes a specific point in past time continuing up to the present with perfect tenses.",
    hint: "Point of time in the past."
  },
  {
    id: 154,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The athlete leapt _____ the tall hurdle effortlessly.'",
    options: ["into", "over", "on", "across"],
    correct: 1,
    explanation: "'Over' describes movement above and across an obstacle without touching it.",
    hint: "Movement above an obstacle."
  },
  {
    id: 155,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'Divide these sweet mangoes _____ the two brothers.'",
    options: ["among", "between", "with", "for"],
    correct: 1,
    explanation: "'Between' is used when distinguishing or distributing between exactly two parties.",
    hint: "Used for exactly two people."
  },
  {
    id: 156,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The teacher shared the prizes _____ all the twenty students.'",
    options: ["between", "among", "with", "in"],
    correct: 1,
    explanation: "'Among' is used when distributing or referring to more than two persons or objects.",
    hint: "Used for more than two people."
  },
  {
    id: 157,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'Every student must abide _____ the school discipline rules.'",
    options: ["by", "to", "with", "on"],
    correct: 0,
    explanation: "The phrasal verb 'abide by' means to follow or obey rules.",
    hint: "Fixed preposition: abide + by."
  },
  {
    id: 158,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The brave boy dived _____ the deep river to save his pet.'",
    options: ["in", "into", "on", "onto"],
    correct: 1,
    explanation: "'Into' expresses dynamic movement entering from outside to the interior of water or space.",
    hint: "Motion into water."
  },
  {
    id: 159,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'She is remarkably good _____ Mathematics and English.'",
    options: ["in", "at", "with", "for"],
    correct: 1,
    explanation: "'Good at' is the idiomatic phrase indicating skill or competence in an academic subject or activity.",
    hint: "Skilled in a subject takes 'at'."
  },
  {
    id: 160,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The train will arrive at the platform _____ 7:15 PM.'",
    options: ["on", "at", "in", "by"],
    correct: 1,
    explanation: "Precise clock times always use 'at' (at 7:15 PM, at dawn, at noon).",
    hint: "Preposition used for clock time."
  },
  {
    id: 161,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'Kolkata is the vibrant capital _____ West Bengal.'",
    options: ["in", "for", "of", "at"],
    correct: 2,
    explanation: "'Of' is used to show belonging, connection, or geographical association (capital of West Bengal).",
    hint: "Belonging to a state."
  },
  {
    id: 162,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The thief was accused _____ stealing gold ornaments.'",
    options: ["with", "of", "for", "by"],
    correct: 1,
    explanation: "The verb 'accuse' takes the preposition 'of' (accused of theft).",
    hint: "Fixed preposition: accused + of."
  },
  {
    id: 163,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'Mortimer walked cautiously _____ the long, damp tunnel.'",
    options: ["through", "across", "over", "between"],
    correct: 0,
    explanation: "'Through' indicates movement within a 3D enclosed passageway or tunnel from one end to the other.",
    hint: "Inside a passageway."
  },
  {
    id: 164,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "mcq",
    question: "Choose the correct preposition: 'The old parents are genuinely proud _____ their daughter's success.'",
    options: ["of", "with", "for", "in"],
    correct: 0,
    explanation: "'Proud' takes the preposition 'of' (proud of her success).",
    hint: "Fixed preposition: proud + of."
  },

  // ==========================================
  // GRAMMAR: ARTICLES AND PREPOSITIONS - DRAG & DROP (10 Questions)
  // ==========================================
  {
    id: 165,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The village doctor was known as ",
    sentenceAfter: " honest and compassionate man.",
    correctAnswer: "an",
    options: ["an", "a", "the", "some"],
    explanation: "'Honest' begins with a vowel sound, so it takes 'an'.",
    hint: "Indefinite article before silent 'h'."
  },
  {
    id: 166,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The frightened cat vaulted swiftly ",
    sentenceAfter: " the high garden wall.",
    correctAnswer: "over",
    options: ["over", "into", "at", "through"],
    explanation: "Vaulting above an obstacle uses 'over'.",
    hint: "Movement above a boundary."
  },
  {
    id: 167,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The headmaster is exceptionally proud ",
    sentenceAfter: " his school's brilliant results.",
    correctAnswer: "of",
    options: ["of", "with", "for", "at"],
    explanation: "'Proud' is followed by 'of'.",
    hint: "Fixed preposition: proud of."
  },
  {
    id: 168,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The travelers walked silently ",
    sentenceAfter: " the thick dark forest.",
    correctAnswer: "through",
    options: ["through", "between", "among", "across"],
    explanation: "Movement inside a three-dimensional dense environment is 'through'.",
    hint: "Passing inside woods."
  },
  {
    id: 169,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The principal distributed the certificates ",
    sentenceAfter: " all the forty students.",
    correctAnswer: "among",
    options: ["among", "between", "with", "by"],
    explanation: "For more than two recipients, use 'among'.",
    hint: "Used for multiple people."
  },
  {
    id: 170,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "You must always listen attentively ",
    sentenceAfter: " the teacher's explanation.",
    correctAnswer: "to",
    options: ["to", "at", "for", "with"],
    explanation: "'Listen' takes 'to' (listen to someone/something).",
    hint: "Preposition following 'listen'."
  },
  {
    id: 171,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The family has resided peacefully in this village ",
    sentenceAfter: " ten years.",
    correctAnswer: "for",
    options: ["for", "since", "at", "in"],
    explanation: "'For' is used to indicate a duration of time (for ten years).",
    hint: "Period or duration of time."
  },
  {
    id: 172,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "He bought ",
    sentenceAfter: " one-way bus ticket to Kolkata.",
    correctAnswer: "a",
    options: ["a", "an", "the", "by"],
    explanation: "'One-way' starts with the consonant sound /w/, so it takes 'a'.",
    hint: "Article before /w/ sound."
  },
  {
    id: 173,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "The young boy is remarkably good ",
    sentenceAfter: " solving algebraic equations.",
    correctAnswer: "at",
    options: ["at", "in", "with", "for"],
    explanation: "'Good at' indicates proficiency in a discipline.",
    hint: "Preposition used with proficiency."
  },
  {
    id: 174,
    categoryKey: "grammar_articles_prep",
    categoryTitle: "Grammar: Articles & Prepositions",
    type: "drag-drop",
    sentenceBefore: "Every citizen must abide ",
    sentenceAfter: " the democratic constitution of our country.",
    correctAnswer: "by",
    options: ["by", "to", "for", "with"],
    explanation: "'Abide by' means to observe and obey.",
    hint: "Fixed preposition following abide."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionsData;
}
