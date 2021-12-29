class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter your number")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement('h3');
    this.ans = createElement("h4");
    this.ans2 = createElement("h4");
    this.ans3 = createElement("h4");
    this.message = createElement("h2");
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.html("Thank You, Your Answer Has Been Submitted");
    this.Question.hide();
    this.ans.hide();
    this.ans2.hide();
    this.ans3.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //Create html() and position() for each question, input and answers.
    this.Question.html("who are you?");
    this.Question.position(150,100);

    this.ans.html("1. HUMAN");
    this.ans.position(150,120)

    this.ans2.html("2. ANIMAL");
    this.ans2.position(150,140);

    this.ans3.html("3. ROBOT");
    this.ans3.position(150,160);

    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(150, 250);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.hide();
    })


  }
}
