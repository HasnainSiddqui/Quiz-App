let allQuestions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        option: ["var", "let", "const", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        option: ["function myFunction() { }", "function: myFunction { }", "func myFunction() { }", "function = myFunction() { }"],
        correctAnswer: "function myFunction() { }"
    },
    {
        question: "How do you get the last element of an array in JavaScript?",
        option: ["array[length]", "array[array.length - 1]", "array[-1]", "array[last]"],
        correctAnswer: "array[array.length - 1]"
    },
    {
        question: "How do you display 'Hello, World!' in the console in JavaScript?",
        option: ["print('Hello, World!');", "Hello, World!", "console.log('Hello, World!');", "All of the above"],
        correctAnswer: "console.log('Hello, World!');"
    },
    {
        question: "How do you get the length of a string 'str' in JavaScript?",
        option: ["str.size", "str.length", "length(str)", "str.len"],
        correctAnswer: "str.length"
    },
    {
        question: "How do you add an element to the end of an array in JavaScript?",
        option: ["array.add(element)", "array.push(element)", "array.append(element)", "array.insert(element)"],
        correctAnswer: "array.push(element)"
    },
    {
        question: "How do you create an array in JavaScript?",
        option: ["array = {}", "array = []", "array = ()", "array = <>"],
        correctAnswer: "array = []"
    },
    {
        question: "How do you call a function named myFunction in JavaScript?",
        option: ["call myFunction()", "myFunction.call()", "myFunction()", "call function myFunction()"],
        correctAnswer: "myFunction()"
    },
    {
        question: "How do you create an object in JavaScript?",
        option: ["let obj = {}", "let obj = []", "let obj = ()", "let obj = <>"],
        correctAnswer: "let obj = {}"
    },
    {
        question: "How do you write a comment in JavaScript?",
        option: ["# This is a comment", "// This is a comment", "This is a comment ", "/* This is a comment */"],
        correctAnswer: "// This is a comment"
    },
];



// question
let mainQuest = document.getElementById("question");

// options
let buttons = document.getElementById("button");

// Total Page
let totalPage = document.getElementById("totalpage");
totalPage.innerHTML = allQuestions.length;

// current page no
let currentPage = document.getElementById("currentPage");
let currentPageNo = 1;


// Next BUTTON
let nextButton = document.getElementById("nextButton");



let next = 0



function render() {

    mainQuest.innerHTML = allQuestions[next].question



    buttons.innerHTML = ''
    for (let i = 0; i < allQuestions[next].option.length; i++) {
        let allButtons = allQuestions[next].option[i]

        buttons.innerHTML += `<button onClick="check('${allButtons}')"  id="button" class=" bg-danger text-light rounded me-5"
        style="height : 50px ;  width : 300px "  >${allButtons}</button>`

    }

}


render()

let totalMarks = 0

function nextQuestion() {
 if(next+1 == allQuestions.length){
    alert(`Your Marks is ${totalMarks}/100`)
    next = 0
    currentPageNo = 0
 }
    next++;
    
    currentPageNo++;
    
    currentPage.innerHTML = currentPageNo;
    
    render()
    
}



function check(b) {
    console.log(b);
    if (b == allQuestions[next].correctAnswer) {
console.log(true);
        totalMarks += 10
        console.log(totalMarks);
    }
    nextQuestion()
}