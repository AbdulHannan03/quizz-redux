const INITIAL_sTATE = {
  userName: "Malik Aamir",
  questions: [
    {
      id: 1,
      questions: "HTML STANDS FOR _______",
      option: [
        "Hyper Text Markup Language",
        "Something",
        "Something",
        "Something",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      questions: "JS Stands For",
      option: ["Something", "Java Script", "Something", " Something"],
      answer: "Java Script",
    },
    {
      id: 3,
      questions: "Pakistan Won The Match Against India By ___ Wickets",
      option: ["Something", "Something", " Something", 10],
      answer: 10,
    },
    {
      id: 4,
      questions: " Pakistan Solved Newzelands ________ Issues",
      option: ["Something", "Security", "Something", "Something"],
      answer: "Security",
    },
    {
      id: 5,
      questions: "Batman Is ____________",
      option: ["Something", "Something", " Something", "Bruce Wayne"],
      answer: "Bruce Wayne",
    },
    {
      id: 6,
      questions: "Avengers Have ____ Main Characters",
      option: ["6", "Something", "Something", "Something"],
      answer: "6",
    },
    {
      id: 7,
      questions:
        "Which of the following command is used to create a react app?",
      option: [
        "Something",
        "npm install create-react-app Appname",
        "Something",
        " Something",
      ],
      answer: "npm install create-react-app Appname",
    },
    {
      id: 8,
      questions:
        "........... port is the default where the webpack-dev-server will run.",
      option: [" Something", " Something", "Something", "3000"],
      answer: "3000",
    },
    {
      id: 9,
      questions: "Avengers __________",
      option: [" Something", " Something", "Assemble", "Something"],
      answer: "Assemble",
    },
    {
      id: 10,
      questions: "A valid react component can return only ......... element.",
      option: [0, 0, 1, 0],
      answer: 1,
    },
  ],
};

const reducer = (state = INITIAL_sTATE) => state;

export default reducer;
