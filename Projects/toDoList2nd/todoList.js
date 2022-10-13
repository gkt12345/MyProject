let count = 0;
function onSubmitHandler(){
    count++;

    let input = document.querySelector("#list-notes").value;
    document.querySelector("#count").innerHTML = count;

        //create div
    let parentElement = document.createElement("div");
        //create classes
        parentElement.classList.add("form-group");
        parentElement.classList.add("notes");

        // create P tag
        let paragraphElement = document.createElement("p");
        //text from input tag
        let paragraphNode = document.createTextNode(count+" . "+input);
        paragraphElement.addEventListener('blur',onBlurHandler);
        paragraphElement.appendChild(paragraphNode);
        //<div class="form-group notes"><p>welcome to programming</p></div>
        parentElement.appendChild(paragraphElement);

        let deleteElement = document.createElement("button");
        //<button class="form-button"></button>
        deleteElement.classList.add("form-button");
        deleteElement.addEventListener('click',onDeleteHandler);
           
        let deleteNode = document.createTextNode("Delete");
            deleteElement.appendChild(deleteNode);

            parentElement.appendChild(deleteElement);

            let editElement = document.createElement("button");
            editElement.addEventListener('click',onEditHandler);

            editElement.classList.add("form-button");
            let editNode = document.createTextNode("Edit");
            editElement.appendChild(editNode);
            parentElement.appendChild(editElement);

            let globalList = document.querySelector("#list");

            globalList.appendChild(parentElement);
}


         function onDeleteHandler(event){
                count--;
                document.querySelector("#count").innerHTML = count;
                event.target.parentElement.remove();
         }   

         function onEditHandler(event){
            event.target.parentElement.firstChild.setAttribute("contenteditable",true);
        }

         
        function onBlurHandler(event){
            event.target.parentElement.firstChild.setAttribute("contenteditable",false);
        }