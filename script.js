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

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const flipButton = document.getElementById("flip");

prevButton.addEventListener("click", () => {
  currentCardIndex =
    currentCardIndex > 0 ? currentCardIndex - 1 : flashcards.length - 1;
  displayCard();
});

nextButton.addEventListener("click", () => {
  currentCardIndex =
    currentCardIndex < flashcards.length - 1 ? currentCardIndex + 1 : 0;
  displayCard();
});

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

const newCardForm = document.getElementById("newCardForm");

newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newQuestion = document.getElementById("newQuestion").value;
  const newAnswer = document.getElementById("newAnswer").value;

  flashcards.push({
    question: newQuestion,
    answer: newAnswer,
  });

  document.getElementById("newQuestion").value = "";
  document.getElementById("newAnswer").value = "";

  alert("Flashcard added");
});
