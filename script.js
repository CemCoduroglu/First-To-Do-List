addToButton = document.getElementById("addButton");
clearButton = document.getElementById("clearButton");
inputArea = document.getElementById("inputArea");
toDoContainer = document.getElementById("toDoContainer");

addToButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputArea.value;
    paragraph.classList.add('paragraph.style');
    inputArea.value = "";

    clearButton.addEventListener('click', function (){
       toDoContainer.removeChild(paragraph); 
    });

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    });
});
