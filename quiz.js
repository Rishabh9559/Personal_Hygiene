let question = {
  1: {
    1: "What is the most effective way to prevent the spread of germs?",
    2: "Washing hands frequently",
    3: "Avoiding contact with others",
    4: "Wearing gloves all the time",
    5: "Taking antibiotics",
  },
  2: {
    1: "How often should you brush your teeth?",
    2: "Once a day",
    3: "Twice a day",
    4: "Three times a day",
    5: "Once a week",
  },
  3: {
    1: "Which of the following is a good practice for personal hygiene?",
    2: "Sharing personal items like toothbrushes",
    3: "Wearing clean clothes",
    4: "Scratching insect bites",
    5: "Eating food with dirty hands",
  },
  4: {
    1: "What is the best way to dispose of tissues after using them?",
    2: "Throwing them on the floor",
    3: "Flushing them down the toilet",
    4: "Putting them in a trash can",
    5: "Keeping them in your pocket",
  },
  5: {
    1: "Why is it important to cover your mouth when you sneeze or cough?",
    2: "To prevent the spread of germs",
    3: "To avoid making noise",
    4: "To protect your throat",
    5: "To look polite",
  },
  6: {
    1: "How often should you shower or bathe?",
    2: "Once a week",
    3: "Twice a week",
    4: "Daily",
    5: "Every other day",
  },
  7: {
    1: "What is the best way to dry your hands after washing them?",
    2: "Using a dirty towel",
    3: "Air drying",
    4: "Using a clean paper towel",
    5: "Using a handkerchief",
  },
  8: {
    1: "Which of the following is a good practice for nail hygiene?",
    2: "Biting your nails",
    3: "Keeping your nails long",
    4: "Trimming your nails regularly",
    5: "Using a dirty nail file",
  },
  9: {
    1: "Why is it important to wear clean underwear?",
    2: "To prevent skin irritation",
    3: "To look fashionable",
    4: "To avoid bad odors",
    5: "All of the above",
  },
  10: {
    1: "What is the best way to prevent body odor?",
    2: "Wearing strong perfume",
    3: "Eating spicy food",
    4: "Showering regularly and using deodorant",
    5: "Avoiding physical activity",
  },
};

let answer = {
  1: "Washing hands frequently",
  2: "Twice a day",
  3: "Wearing clean clothes",
  4: "Putting them in a trash can",
  5: "To prevent the spread of germs",
  6: "Daily",
  7: "Using a clean paper towel",
  8: "Trimming your nails regularly",
  9: "All of the above",
  10: "Showering regularly and using deodorant",
};




let next = document.getElementById("next");
let nextQuestion = document.getElementById("nextQuestion");
let click = document.getElementById("click");
let quiz = document.getElementById("quiz");
let resultTag=document.getElementById("result");

click.addEventListener("click", () => {
  quiz.style.display = "";
});

click.addEventListener("dblclick",(e)=>{
  e.preventDefault();
  window.location.reload();
})

let i = 1;
let selectedAnswer = [];

function loadQuestion(index) {
  if (index < 11) {
    let html = `
      <h1 class="text-lg font-semibold mb-4">Question ${index}/10</h1>
      <p class="text-gray-500 mb-4">Personal Hygiene Quiz</p>      
      <p class="font-medium mb-6">${question[index][1]}</p>
      
      <form>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][2]}" class="form-radio text-blue-600">
            <span>${question[index][2]}</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][3]}" class="form-radio text-blue-600">
            <span>${question[index][3]}</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][4]}" class="form-radio text-blue-600">
            <span>${question[index][4]}</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][5]}" class="form-radio text-blue-600">
            <span>${question[index][5]}</span>
          </label>
        </div>
      </form>
    `;

    nextQuestion.innerHTML = html;
  } 
  if(index==11) {
    nextQuestion.innerHTML = "<h1 class='text-lg font-semibold mb-4'>Quiz Completed!</h1>";
    next.innerHTML = `<button type="submit"  class="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">Submit</button>`;

  }
  if(index==12){
    
      calculate(selectedAnswer,answer)
      
    
  }
}

next.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission behavior

  let selected = document.querySelector('input[name="question"]:checked');
  if (selected) {
    selectedAnswer.push(selected.value);
  }
  else{
    selectedAnswer.push(null);
  }


  i++;
  loadQuestion(i);

  console.log(selectedAnswer); 

  

});



function calculate(selectedAnswer,answer){
let result=0;
let k=0;
let a=1;
while (k<10) {
  if(selectedAnswer[k]==answer[a]){
    result++;
    console.log("incre="+result);
    console.log(selectedAnswer[k]+" answer = "+answer[a]);
  }
  k++;
  a++;
}

// show answer

function showResult(result){
  quiz.style.display="none";
  if(result>8){
    resultTag.innerHTML=` <h1 class='text-lg font-semibold mb-4 text-lime-300 '>Excellent</h1>`
    console.log(result);
  }
  if(result<8 && result>5){
    resultTag.innerHTML=` <h1 class='text-lg font-semibold mb-4 text-yellow-300' >Good</h1>`
    console.log(result);

  }
  if(result<=5){
    resultTag.innerHTML=` <h1 class='text-lg font-semibold mb-4 text-red-500' >Poor</h1>`
    console.log(result);

  }
}

showResult(result);

}


//  post form

let post=document.getElementById("post");

post.addEventListener("click",(e)=>{
  e.preventDefault();
  post.innerHTML=`
          <div  >
            <h1 class="text-lg font-semibold mb-4">Thank You !</h1>

            <form>
          

             
                <div class="mb-6">
                    <label for="feedback" class="block text-sm font-medium mb-2">Share Your Tips</label>
                    <textarea id="feedback" name="feedback" rows="4" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Share your thoughts..."></textarea>
                </div>

              
                <div class="mb-6">
                    <label for="email" class="block text-sm font-medium mb-2">Your Email (optional)</label>
                    <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="email@example.com">
                </div>

                <!-- Submit Button -->
                <div id="postSubmit" class="flex justify-end">
                    <button type="submit" class=" bg-[#33b3e6] text-[#111618] text-sm font-bold  py-2 px-6 rounded-full  ">Submit</button>
                </div>
            </form>
        </div>
  `;
 
  let postSubmit=document.getElementById("postSubmit");
  postSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.reload();
  })

})