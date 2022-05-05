var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();});



document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});


document.getElementById("footer").innerHTML = "Powered By @ENES EKEN | Words  " + "<b>"+ contentArray.length+ "</b>";

flashcardMaker = (text, delThisIndex) => {
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');
  const search = document.createElement('div');
  // const tag = document.createElement('div');


flashcard.className = 'flashcard';
question.className ="questionA";

  question.setAttribute("style", "   padding: 15px; margin-top:30px");
  question.textContent = "Question : " + text.my_question;
  search.setAttribute("style", "text-align: center; opacity: 0.5;")
  // tag.setAttribute("style", "text-align: center; opacity: 0.5; color: red;")



  answer.setAttribute("style", "text-align:center; display:none; color:green");
  answer.textContent ="Answer : " + text.my_answer.toUpperCase();




  flashcard.appendChild(question);
  flashcard.appendChild(search);
  flashcard.appendChild(answer);
  // flashcard.appendChild(tag);
  


  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none"){answer.style.display = "block"; search.style.display = "block"; tag.innerText= text.my_tag; tag.style.display= "block"; search.innerHTML = "Edit,Voice,Delete,Save,Scratch "}
    else{answer.style.display = "none"; tag.style.display="none";  search.style.display= "none"}
  });



  document.querySelector("#flashcards").appendChild(flashcard);

}

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  // const tag = document.querySelector("#unıts");

  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value,
    // 'my_tag'  : tag.textContent
  }
 

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";
  // tag.value = "";


}
