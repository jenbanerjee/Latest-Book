function saveMyStory(book_id){
var bookInputs = document.forms["book_inputs"];
  var bookInput;
  var bookObject = new Object();
  for(bookInput=0; bookInput < bookInputs.length; bookInput++){
    if(bookInputs[bookInput].type != "button"){
      if(bookInputs[bookInput].id != ""){
        if(bookInputs[bookInput].type == "radio"){
          var radioInputs = document.getElementsByName(bookInputs[bookInput].name);
          var radioOption;
          for (radioOption = 0; radioOption <radioInputs.length; radioOption++){
            if(radioInputs[radioOption].checked){
              bookObject[radioInputs[radioOption].name] = radioInputs[radioOption].value;
              //alert(radioInputs[radioOption].name + " = " + radioInputs[radioOption].value);
            }
          }
        }
        else{
          bookObject[bookInputs[bookInput].id] = bookInputs[bookInput].value;
          //alert(bookInputs[bookInput].id + " = " + bookInputs[bookInput].value);
        }
      }
    }
    //alert(bookInputs[bookInput].id + " = " + bookInputs[bookInput].value);
  }
  alert('users/' + currentUid + '/' + book_id);
    /*firebase.database().ref('users/' + currentUid + '/' + book_id).set({
    bookObject;
  });*/
  //alert("Done");
}
