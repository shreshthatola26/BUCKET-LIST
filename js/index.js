
function Book(name, author, type) {  //constructor created. Book object h use banane k lie name , author or type chaheye
    this.name = name;
    this.author = author;
    this.type = type;

}

//display constructor

function Display() {  //esk prototype m kuch methods dalenge  jo ki reponsible hoga book ko UI m add krne k lie

    


}

//add methods to display prototype
Display.prototype.add = function (book) {
    console.log('adding to User Interface')
    tableBody = document.getElementById('tableBody') //tableBody k andr ye bi daldo 
    let uiString = ` 
    <tr>
                    
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>
    
    
    `

    tableBody.innerHTML += uiString; //innerHTML m uistring daldo

}


//implementig the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset() //form ki id li or use reset krdia
}

//implementig the validate function
Display.prototype.validate = function (book) {
   if (book.name.length<2 || book.author.length<2 )
   {
       return false
   }
   else {
       return true
   }
}

//implementing the show function
Display.prototype.show = function (type, displayMessage) {
   let message= document.getElementById('message')
   let boldTxt;
        if(type==='success'){
            boldTxt = 'Success';
        }
        else{
            boldTxt = 'Error!';
        }
   message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                        <strong>${boldTxt}</strong> ${displayMessage}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
   </button>`
   setTimeout(function()  {
       message.innerHTML= ' '
   }, 2000);
    
 }



//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) { //jb b hm library form ko submit krenge ye function run hoi jaega
    console.log('you have submitted library form')
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    //fiction , thrill , romance , horror , Rom-com
    let fiction = document.getElementById('fiction')
    let thrill = document.getElementById('thrill')
    let romance = document.getElementById('romance')
    let horror = document.getElementById('horror')
    let romcom = document.getElementById('romcom')

    let type

    if (fiction.checked) {
        type = fiction.value
    }
    else if (thrill.checked) {
        type = thrill.value
    }
    else if (romance) {
        type = romance.value
    }
    else if (horror.checked) {
        type = horror.value
    }
    else if (romcom.checked) {
        type = romcom.value
    }

    let book = new Book(name, author, type) //book object created
    console.log(book)

    let display = new Display()

    if (display.validate(book)) {  //pehle valiodate krdo agr valid hua toe add krna else not


        display.add(book)  //book ko add kr dega 

        display.clear() //display m jo values dali thi vo delete kr dega .Ab hm ise dlenge prototype m upar banae hue function m

        display.show('success' , 'Added')
    }
    else {
        //show error to user
        display.show('danger' , 'Sorry you cannot add this')

    }


    e.preventDefault() //jb bhi we are adding new book the page gets reloaded coz it tthe the property of form that after every submit it gets reloaded therefore we are preventing this byu this function

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
