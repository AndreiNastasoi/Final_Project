window.onload = function () {
  const validForm = () => {
    const submit = document.querySelector("#submit");
    const nameValue = document.forms["accountForm"]["valid1"].value;
    const emailValue = document.forms["accountForm"]["valid2"].value;
    const passwordValue = document.forms["accountForm"]["valid3"].value;
    const password2Value = document.forms["accountForm"]["valid4"].value;
    const parentDiv = document.querySelector("#parentDiv");
    const newDiv = document.createElement("p");
    const childDiv = document.querySelector("#childDiv")
    const anotherDiv = document.createElement("p");
    const removeP = document.getElementById('parentDiv');
    


    if (
      (nameValue === "" && emailValue === "") ||
      (passwordValue === "" && password2Value === "")
    ) {
      newDiv.innerText = "These fields can't be blank";
      newDiv.setAttribute(
        "style",
        "color: red; text-align:center; border: 2px solid red; border-radius: 5px; margin:10px; padding:none;"
      );
      var input1 = document
        .getElementById("name")
        .setAttribute("style", "border: solid 2px red; border-radius:5px;");
      var input2 = document
        .getElementById("email")
        .setAttribute("style", "border: solid 2px red; border-radius:5px; ");
      var input3 = document
        .getElementById("password1")
        .setAttribute("style", "border: solid 2px red; border-radius:5px; ");
      var input4 = document
        .getElementById("password2")
        .setAttribute("style", "border: solid 2px red; border-radius:5px; ");
      parentDiv.appendChild(newDiv);
      
      }
    else {
      removeP.remove();
      anotherDiv.innerText = "You are now registered";
      anotherDiv.setAttribute(
        "style",
        "color: green; text-align: center;  border: 2px solid green; border-radius: 5px; margin:10px; padding:none;"
      );

      var input1 = document
        .getElementById("name")
        .setAttribute("style", "border: solid 2px green; border-radius:5px;");
      var input2 = document
        .getElementById("email")
        .setAttribute("style", "border: solid 2px green; border-radius:5px; ");
      var input3 = document
        .getElementById("password1")
        .setAttribute("style", "border: solid 2px green; border-radius:5px;");
      var input4 = document
        .getElementById("password2")
        .setAttribute("style", "border: solid 2px green; border-radius:5px; ");
        childDiv.appendChild(anotherDiv);
    }
    
  };
  submit.addEventListener("click", validForm);
};

window.addEventListener("load", function () {
  const addCommentElement = document.querySelector("#addComment");
  const commentContent = document.querySelector(".commentEx");
  const addButtonElement = document.querySelector("#commentBtn");

  const create = () => {
    var commElement = createCommentElement(addCommentElement.value);
    commentContent.appendChild(commElement);
  };
  if (create) {
    addButtonElement.addEventListener("click", create);
  }
});

const deleteCommentElement = (event) => {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
};

const createCommentElement = (textareaValue) => {
  const div = document.createElement("div");
  div.classList.add("commexample3");
  div.innerHTML =
    "<p></p>" +
    textareaValue +
    "<button class='deleteBtn' onclick=deleteCommentElement(event)>Delete</button>";
  return div;
};

window.addEventListener("load", function () {
  const addCommentsElement = document.querySelector("#addComment2");
  const commentsContent = document.querySelector(".commentEx2");
  const addButtonsElement = document.querySelector("#commentBtn2");

  const create = () => {
    var comsElement = createCommentsElement(addCommentsElement.value);
    commentsContent.appendChild(comsElement);
  };
  if (create) {
    addButtonsElement.addEventListener("click", create);
  }
});

const deleteCommentsElement = (event) => {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
};

const createCommentsElement = (textareaValue) => {
  const div = document.createElement("div");
  div.classList.add("commexamples3");
  div.innerHTML =
    "<p></p>" +
    textareaValue +
    "<button class='deleteBtn2' onclick=deleteCommentElement(event)>Delete</button>";
  return div;
};
