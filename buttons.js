function ModalOpen (a) {
  var b = "#modal_"+(a.replace("Btn", ""));
  if (a == "loadBtn"){
    var c, d = '#modal_load select';
    head_ref.on('value' , snap => {
      if($(d)[0].length > 1){
        $(d).val('');
        $(d).material_select();
        $(d + ' option').each(function(i){
          if(i!=0){
            this.remove();
          }
        })
      }
      if (snap.val()){
        for (var i = 1; i < snap.val().length; i++){
          c = snap.val()[i].BookTitle;
          $(d).append('<option value="' +i+ '">' +c+ '</option>');
        }
        if($(d).attr('disabled')){
          $(d).removeAttr('disabled');
        }
        $(d).material_select();
      } else if(!snap.val()){
        $(d).attr('disabled','');
        $(d).material_select();
      }
    });
  }
  $(b).openModal();

}

function saveButton(a){
  var book_id;
  var book_title = $('#BookTitle').val();
  //console.log(book_title);
  head_ref.once('value' , snap => {
    book_id = 1;
    if (snap.val()){
      for (var i = 1; i<snap.val().length; i++){
        var snap_title = snap.val()[i].BookTitle;
        if (book_title == snap_title){
          if (a){
            book_id = i;
            break;
          } else{
            confirm();
            return;
          }
        } else {
          book_id++;
        }
      }
    }
    saveMyStory(book_id);
  });
  function confirm(){
    var d = '#modal_save';
    var a;
    $(d).children().toggle();
    $('.confirm').one('click', function(){
      a = this.text;
      if (a=='Continue'){
        saveButton(true)
      } else {
        $(d).children().toggle();
        return;
      }
      $(d).children().toggle();
    })
  }
}

function loadButton(){
  var d = '#modal_load select';
  var book_id = $(d).val();
  if(book_id){
    loadMyStory(book_id);
    setTimeout(function(){
      $('#modal_load').closeModal();
    }, 500);
  } else{
    return;
  }
}
