const backend = "http://localhost:3000"
const token = ""
const wsBase = `${backend}/api/`


/* Sets the height of <div id="#contents"> to benefit from all the remaining place on the page */
function setContentHeight() {
	let availableHeight = window.innerHeight
	availableHeight -= document.getElementById("contents").offsetTop
	availableHeight -= 2 * document.querySelector('h1').offsetTop
	availableHeight -= 4 * 1
	document.getElementById("contents").style.height = availableHeight + "px"
}




/* Selects a new object type : either "bookmarks" or "tags" */
function selectObjectType(type) {
	if (type == "new") {
		document.querySelector("#menu .show").classList.remove("selected");           // remove "selected" from show
		document.querySelector("#menu .new").classList.add("selected");               // add "selected" to new
        document.querySelector("#add .show").classList.remove("selected");            // remove "selected" from #add show       
    }                                               
	else if (type == "show") {
        document.querySelector("#menu .new").classList.remove("selected");            // remove "selected" from new
		document.querySelector("#menu .show").classList.add("selected");              // add "selected" to recipes
        document.querySelector("#add .show" ).classList.add("selected");              // add "selected" from #add recipe
        listRecipes();                                                                // show the recipes

	}
}


/* Loads the list of all recipes and displays them */
function listRecipes() {
	let vider = document.querySelector("#items");
	while (vider.lastElementChild) {
		vider.removeChild(vider.lastElementChild);}

    fetch(wsBase + "recipes", {
		method:'GET',
		headers:{	
            'Content-type':'application/json',
			'x-access-token':token
		}
	})  
        .then(response=>response.json())
        .then(json => {
            json.data.forEach(element =>{
                let copyRecipes = document.querySelector(".model.recipes").cloneNode(true);
                copyRecipes.querySelector("h2").textContent = element.title;
                copyRecipes.querySelector("a").setAttribute("href", element.link);
                copyRecipes.querySelector("a").textContent = element.link;
                copyRecipes.querySelector(".description").textContent = element.description;
                let recipeUl = copyRecipes.querySelector(".recipes");
                element.recipes.forEach(recipe =>{
                    let recipeLi = document.createElement("li");
                    recipeLi.textContent = recipe.name;
                    recipeUl.appendChild(recipeLi);
                })
                copyRecipes.setAttribute("num", element.id);
                copyRecipes.setAttribute("class","item recipes");
                document.querySelector("#items").append(copyRecipes);
            })
        })
       
}

function initNew(){
    let newInit = document.querySelector("items .selected");
    if (newInit){                                              // deselect the selected item (if there is any)
        newInit.classList.replace("selected","new");
	    newInit.removeChild(newInit.lastElementChild);
	    newInit.firstElementChild.style.display="";            // display
	}
}



/* Adds a new recipes */
function addRecipe() {
	let titleInput = document.querySelector("input[title = 'title']")
    let descriptionInput = document.querySelector("input[description = 'description']")
    let ingredientsInput = document.querySelector("input[ingredients = 'ingredients']")
    let instructionsInput = document.querySelector("input[intructions = 'intructions']")

    // Error handler
	if (titleInput.value == '') {
		window.alert("error: Please put a title")
	}
    if (descriptionInput.value == '') {
		window.alert("error: Please put a description")
	}
    if (ingredientsInput.value == '') {
		window.alert("error: Please add ingredients")
	}
    if (instructionsInput.value == '') {
		window.alert("error: Please put some instructions")
	}
	else {

		/*definition du body avec le key et le value */
		let body = [];
		body.push("data" + "=" 
            + JSON.stringify({ 
                "title": titleInput.value , 
                "description": descriptionInput.value , 
                "ingredients": ingredientsInput.value , 
                "title": instructionsInput.value 
                })
        );

		fetch(wsBase + "recipes",{
				method: 'POST',
				headers: {
					"Content-type": 'application/x-www-form-urlencoded',
					"x-access-token": token
				},
				body
			})
			.then(listRecipes)
	}

}


/* Handles the click on a tag */
function clickRecipe(tag) {

    initTag()
	tag.classList.replace("tag","selected")          // add the new class
	tag.firstElementChild.style.display="none";      // hid it name

	// add the form
	let form = document.createElement("form")
    tag.appendChild(form);

    // add the text
	let newText = document.createElement("input");
    newText.type = "text";
    newText.value = tag.textContent.replace(/[\t\r\n]/g,"");
    form.appendChild(newText);

    // add the button to modify the name
	let modifyButton = document.createElement("input");
    modifyButton.type = "button";
    modifyButton.value = "Modify name";
    form.appendChild(modifyButton);

    // add the button to delete the Tag
	let removeButton = document.createElement("input");
    removeButton.type = "button";
    removeButton.value = "Remove tag";
    form.appendChild(removeButton);

	//add eventlistener
	modifyButton.addEventListener("click",modifyTag);
	removeButton.addEventListener("click",removeTag);
	form.addEveListener("submit",modifyTag);

}

/* Performs the modification of a tag */
function modifyRecipe() {
	let previousText = document.querySelector("#items .item.selected h2").textContent;
	let newText = document.querySelector("#items .item.selected  input[type='text']").value.trim();
	let id = document.querySelector("#items .item.selected").getAttribute("num");


    // if the wrong thing is written
	if(newText == ''){
        alert("No entry");
        return;
    }
    if (newText == previousText) {
        alert("No change");
	    return;
    }
 
	const body = new URLSearchParams();
	body.append("data",JSON.stringify({"name":newText}));

	fetch(wsBase + "recipe/" + id, {
		method:'PUT',
		headers:{	
            'Content-type':'application/x-www-form-urlencoded',
			'x-access-token':token
		},
		body
	}).then(listRecipes).initTag()
}


/* Removes a recipe */
function removeRecipe() {
	let id = document.querySelector("#items .item.selected").getAttribute("num");
	fetch(wsBase + "recipes/" + id, {
		method:'DELETE',
		headers:{	
            'Content-type':'application/x-www-form-urlencoded',
			'x-access-token':token
		},
	})
    .then(listRecipes)
}


/* On document loading */
function miseEnPlace() {

	/* Give access token for future ajax requests */
	// Put the name of the current user into <h1>
	setIdentity()
	// Adapt the height of <div id="contents"> to the navigator window
	setContentHeight()
	window.addEventListener("resize", setContentHeight)
	// Listen to the clicks on menu items
	for (let element of document.querySelectorAll('#menu li')) {
		element.addEventListener('click', function () {
			const isTags = this.classList.contains('tags')
			selectObjectType(isTags ? "show" : "new")
		}, false)
	}
	// Initialize the object type to "tags"
	selectObjectType("show")
	// Listen to clicks on the "add tag" button

	document.getElementById("addRecipe").addEventListener("click", addRecipe, false)
	document.getElementById("items").addEventListener("click", (e) => {
		// Listen to clicks on the tag items
		const recipe = e.target.closest(".recipes.item")
		if (recipe !== null) { clickTag(recipe); return }
	// 	const newRecipe = e.target.closest(".bookmark.item")
	// 	if (bookmark !== null) { clickNew(bookmark) }
	// }
	// 	//, false
        )
}
window.addEventListener('load', miseEnPlace, false)

