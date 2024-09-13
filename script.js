let flashcards = [
  {
    question: "What is TypeScript?",
    answer:
      "TypeScript is a superset of JavaScript that uses static typing to define types within your JavaScript application",
  },
  {
    question: "Why do we use TypeScript?",
    answer:
      "It helps find errors, write quality code, improves documentation and provides better tooling support such as autocompletion and refactoring.",
  },
  {
    question: "What are the basic types in TypeScript?",
    answer: "Number, String, Boolean, Array, Tuple, Enum, Any",
  },
  {
    question: "What is type inference in TypeScript?",
    answer:
      "A feature in TypeScript that infers the type based on the value assigned by using context.",
  },
  {
    question: "Why should we define types in TypeScript?",
    answer:
      "To enhance code clarity, improve IDE functionality, avoid unexpected errors, ensure clear interfaces and compatibility with external libraries",
  },
];

let currentCardIndex = 0;
let showingQuestion = true;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

// Function to display the current card
function displayCard() {
  const card = flashcards[currentCardIndex];
  questionElement.innerText = card.question;
  answerElement.innerText = card.answer;
  showingQuestion = true;
  questionElement.classList.add("active");
  answerElement.classList.remove("active");
}

displayCard();

//set variables for buttons in HTML - use DOM to access
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const flipButton = document.getElementById("flip");

//When prev button is clicked, use ternary to check if index greater than 0, if so -1 to move to prev card
//flashcards.length to wrap 1st question back to last, then update displayCard function with new card

prevButton.addEventListener("click", () => {
  currentCardIndex =
    currentCardIndex > 0 ? currentCardIndex - 1 : flashcards.length - 1;
  displayCard();
});

//when next button is clicked, check if index is less than length. If index is less than 0 add 1 then update function
nextButton.addEventListener("click", () => {
  currentCardIndex =
    currentCardIndex < flashcards.length - 1 ? currentCardIndex + 1 : 0;
  displayCard();
});

//when flip button clicked change show question function to !, if showing hide answer else hide question
flipButton.addEventListener("click", () => {
  showingQuestion = !showingQuestion;
  if (showingQuestion) {
    questionElement.classList.add("active");
    answerElement.classList.remove("active");
  } else {
    questionElement.classList.remove("active");
    answerElement.classList.add("active");
  }
});

//create a variable for the form to add a card and access HTML element 

const newCardForm = document.getElementById("newCardForm");

//when form is submitted, on the event create a variable for new question and answer with the value retrieved
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newQuestion = document.getElementById("newQuestion").value;
  const newAnswer = document.getElementById("newAnswer").value;

  //push new variables onto the end of flashcard list 
  flashcards.push({
    question: newQuestion,
    answer: newAnswer,
  });

  // clears form input after submitting new question 
  document.getElementById("newQuestion").value = "";
  document.getElementById("newAnswer").value = "";

  //create an alert to show flashcard has been added, this won't show if input field is blank
  alert("Flashcard added");
});
