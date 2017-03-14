var bookInputs = document.forms["book_inputs"];
//var head_ref = firebase.database().ref('users/' + currentUid);

function saveMyStory(book_id){
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

  head_ref.child(book_id).set(bookObject);

    /*firebase.database().ref('users/' + currentUid + '/' + book_id).set({
    bookObject;
  });*/
  //alert("Done");
  $('#modal_save').closeModal();
}

function loadMyStory(book_id){

  head_ref.child(book_id).on('value', snap => {

    for (var i = 0; i < bookInputs.length; i++){
      var b = bookInputs[i];

      if(b.type != "button"){
        if(b.id != ""){
          //Retrieve data (method depending on input type).
          if(b.type == 'radio'){
            b.checked = (b.value == snap.child(b.name).val()) ? true : false;
          }else if (b.type == 'select-one'){
            for (var j = 0; j < b.options.length; j++){
              if(b.options[j].value == snap.child(b.id).val()){
                b.options[j].selected = true
              }
            }
            var io = b.id.indexOf('Type')
            if (io > -1) {
              var o = b.id.substring(0, io);
              if(o.length < 4){
                hideShowTypeSpecificField(b.value, o);
              }
            }
            $('select').material_select();
          }else{
            b.value = snap.child(b.id).val();
            Materialize.updateTextFields();
          }
        }
      }
    }
  })
}
