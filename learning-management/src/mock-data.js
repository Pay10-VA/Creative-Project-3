let mock = [{
    id: 1,
    name: "Exam One",
    description: "First midterm of the course. This is a summative assessment. Make sure to study.",
    points: 100,
    dueDate: "April 1",
    submitted: true ,
    grade: 90
  },
  {
    id: 2,
    name: "Exam Two",
    description: "Second midterm of the course. This is a summative assessment. Make sure to study.",
    points: 100,
    dueDate: 'April 5',
    submitted: true,
    grade: 95
  },
  {
    id: 3,
    name: "Exam Three",
    description: "Third exam of the course. This is a summative assessment. Make sure to study.",
    points: 100,
    dueDate: 'April 20',
    submitted: true,
    grade: 70
  },
  {
    id: 4,
    name: "Exam Four",
    description: "Fourth exam of the course. This is a summative assessment. Make sure to study.",
    points: 100,
    dueDate: 'May 1',
    submitted: false,
    grade: 0
  },
  {
    id: 5,
    name: "Exam Five",
    description: "Fifth exam of the course. This is a summative assessment. Make sure to study.",
    points: 100,
    dueDate: 'May 10',
    submitted: false,
    grade: 0
  },
  //Labs section
  {
    id: 6,
    name: "Lab 1",
    description: "This is the first lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "April 1",
    submitted: true,
    grade: 35
  },
  {
    id: 7,
    name: "Lab 2",
    description: "This is the second lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "April 7",
    submitted: true,
    grade: 50
  },
  {
    id: 8,
    name: "Lab 3",
    description: "This is the third lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "April 23",
    submitted: true,
    grade: 45
  },
  {
    id: 9,
    name: "Lab 4",
    description: "This is the fourth lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 1",
    submitted: false,
    grade: 0
  },
  {
    id: 10,
    name: "Lab 5",
    description: "This is the fifth lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 6",
    submitted: false,
    grade: 0
  },
  {
    id: 11,
    name: "Lab 6",
    description: "This is the sixth lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 10",
    submitted: false,
    grade: 0
  },
  {
    id: 12,
    name: "Lab 7",
    description: "This is the seventh lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 15",
    submitted: false,
    grade: 0
  },
  {
    id: 13,
    name: "Lab 8",
    description: "This is the eighth lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 20",
    submitted: false,
    grade: 0
  },
  {
    id: 14,
    name: "Lab 9",
    description: "This is the ninth lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 30",
    submitted: false,
    grade: 0
  },
  {
    id: 15,
    name: "Lab 10",
    description: "This is the tenth lab of the course. Labs test what you learned in class. Review Class Material.",
    points: 50,
    dueDate: "May 31",
    submitted: false,
    grade: 0
  },
  //Quizzes section
  {
    id: 16,
    name: "Quiz 1",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "April 1",
    submitted: true,
    grade: 49
  },
  {
    id: 17,
    name: "Quiz 2",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "April 10",
    submitted: true,
    grade: 17
  },
  {
    id: 18,
    name: "Quiz 3",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "April 15",
    submitted: true,
    grade: 30
  },
  {
    id: 19,
    name: "Quiz 4",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "April 29",
    submitted: true,
    grade: 50
  },
  {
    id: 20,
    name: "Quiz 5",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "May 1",
    submitted: true,
    grade: 45
  },
  {
    id: 21,
    name: "Quiz 6",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "May 5",
    submitted: false,
    grade: 0
  },
  {
    id: 22,
    name: "Quiz 7",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "May 10",
    submitted: false,
    grade: 0
  },
  {
    id: 23,
    name: "Quiz 8",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "May 15",
    submitted: false,
    grade: 0
  },
  {
    id: 24,
    name: "Quiz 9 ",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "May 20",
    submitted: false,
    grade: 0
  },
  {
    id: 25,
    name: "Quiz 10",
    description: "This is a summative assesment. This will test whay you learned thus far in class. Please study class material before taking the quiz.",
    points: 50,
    dueDate: "May 30",
    submitted: false,
    grade: 0
  },
  //Homework
  {
    id: 26,
    name: "HW 1",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 3",
    submitted: true,
    grade: 7
  },
  {
    id: 27,
    name: "HW 2",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 5",
    submitted: true,
    grade: 8
  },
  {
    id: 28,
    name: "HW 3",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 5",
    submitted: true,
    grade: 10
  },
  {
    id: 29,
    name: "HW 4",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 7",
    submitted: true,
    grade: 2
  },
  {
    id: 30,
    name: "HW 5",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 10",
    submitted: true,
    grade: 8
  },
  {
    id: 31,
    name: "HW 6",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 15",
    submitted: true,
    grade: 10
  },
  {
    id: 32,
    name: "HW 7",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 18",
    submitted: true,
    grade: 9
  },
  {
    id: 33,
    name: "HW 8",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 20",
    submitted: true,
    grade: 10
  },
  {
    id: 34,
    name: "HW 9",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 22",
    submitted: true,
    grade: 6
  },
  {
    id: 35,
    name: "HW 10",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 25",
    submitted: true,
    grade: 7
  },
  {
    id: 36,
    name: "HW 11",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 26",
    submitted: true,
    grade: 5
  },
  {
    id: 37,
    name: "HW 12",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "april 28",
    submitted: true,
    grade: 9
  },
  {
    id: 38,
    name: "HW 13",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 1",
    submitted: true,
    grade: 9
  },
  {
    id: 39,
    name: "HW 14",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 3",
    submitted: true,
    grade: 8
  },
  {
    id: 40,
    name: "HW 15",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 5",
    submitted: false,
    grade: 0
  },
  {
    id: 41,
    name: "HW 16",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 7",
    submitted: false,
    grade: 0
  },
  {
    id: 42,
    name: "HW 17",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 10",
    submitted: false,
    grade: 0
  },
  {
    id: 43,
    name: "HW 18",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 12",
    submitted: false,
    grade: 0
  },
  {
    id: 44,
    name: "HW 19",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 15",
    submitted: false,
    grade: 0
  },
  {
    id: 45,
    name: "HW 20",
    description: "Homework is due after every class. No late work is accepted. The homeworks cover everything we learned in class that day. Make sure to turn HW in on time.",
    points: 10,
    dueDate: "May 17",
    submitted: false,
    grade: 0
  }
]

export default mock;
