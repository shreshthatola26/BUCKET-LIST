function Book(name , author , type){  //constructor created. Book object h use banane k lie name , author or type chaheye
    this.name = name;
    this.author = author;
    this.type = type;

}

//display constructor

function Display(){  //esk prototype m kuch methods dalenge  jo ki reponsible hoga book ko UI m add krne k lie


}

//add methods to display prototype








//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit' , libraryFormSubmit)