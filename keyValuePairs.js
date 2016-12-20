
var currentPage = 0;
var finalPages = new Array();

function setUpCharacter(OCNumber){
  bookVariables[OCNumber+"Type"] = getOCType(document.getElementById(OCNumber+"Type").value, document.getElementById(OCNumber+"Age").value, document.getElementById(OCNumber+"Animal").value);
  bookVariables[OCNumber+"Name"] = document.getElementById(OCNumber+"Name").value;
  $OCGender = $('input[name="'+OCNumber+'Gender"]:checked').val();
  bookVariables[OCNumber+"Descriptor"] = getOCDescriptor(document.getElementById(OCNumber+"Type").value, document.getElementById(OCNumber+"Age").value, $OCGender, document.getElementById(OCNumber+"Animal").value);
  bookVariables[OCNumber+"SheHeCapital"] = getSheHeCapital($OCGender);
  bookVariables[OCNumber+"SheHeLower"] = getSheHeLower($OCGender);
  bookVariables[OCNumber+"HerHisCapital"] = getHerHisCapital($OCGender);
  bookVariables[OCNumber+"HerHisLower"] = getHerHisLower($OCGender);
  bookVariables[OCNumber+"HerHimCapital"] = getHerHimCapital($OCGender);
  bookVariables[OCNumber+"HerHimLower"] = getHerHimLower($OCGender);
  bookVariables[OCNumber+"FellaLady"] = returnValueFromGender($OCGender, "lady", "fella", "");
  bookVariables[OCNumber+"BoyGirl"] = returnValueFromGender($OCGender, "girl", "boy", "");
  bookVariables[OCNumber+"ToyType"] = document.getElementById(OCNumber+"ToyType").value;
}

function writeMyStory(){
  //  alert("Writing Story");
  if(!validateForm()){
    return false;
  }

  currentPage=0;

  setUpCharacter("OC1");
  setUpCharacter("OC2");
  setUpCharacter("OC3");
  setUpCharacter("OC4");

  if(getInvitingFriends().length>0){
    bookVariables.InvitingFriends = "Decision made, MCFirstName went to ask MCParents if they could invite ListFriendsToInvite round for the day. Luckily MCParentsSheHeThey said yes and it was all arranged. When ListFriendsToInvite had arrived, ";
  }
  else{
    bookVariables.InvitingFriends = "";
  }
  bookVariables.Meeting1 = $meeting1[bookVariables.OC1Type-1];
  bookVariables.Meeting2 = $meeting2[bookVariables.OC2Type-1];
  bookVariables.Meeting3 = $meeting3[bookVariables.OC3Type-1];
  bookVariables.Meeting4 = $meeting4[bookVariables.OC4Type-1];
  bookVariables.SolveClue1 = $solveClue1[bookVariables.OC2Type-1];
  bookVariables.CelebrateClue1 = $celebrateClue1[bookVariables.OC2Type-1];
  bookVariables.FindClue2 = $findClue2[bookVariables.OC3Type-1];
  bookVariables.SolveClue2 = $solveClue2[bookVariables.OC1Type-1];
  bookVariables.FindClue3 = $findClue3[bookVariables.OC1Type-1];
  bookVariables.SolveClue3 = $solveClue3[bookVariables.OC3Type-1];
  bookVariables.FindClue4 = $findClue4[bookVariables.OC2Type-1];
  bookVariables.SolveClue4 = $solveClue4[bookVariables.OC4Type-1];

  var arrOCTypes = [bookVariables.OC1Type, bookVariables.OC2Type, bookVariables.OC3Type, bookVariables.OC4Type];
  if(isTrainLover(arrOCTypes)){
    bookVariables.TrainLove = "\"I love trains\" said TrainLover. MCFirstName smothered a giggle by pretending to sneeze.";
  }
  else{
    bookVariables.TrainLove = "";
  }
  bookVariables.TrainLover = getTrainLover(arrOCTypes);
  //alert(arrOCTypes[3]);

  bookVariables.Station1 = $station1[bookVariables.OC1Type-1];
  bookVariables.Station2 = $station2[bookVariables.OC2Type-1];
  bookVariables.Station3 = $station3[bookVariables.OC3Type-1];
  bookVariables.FindClue5 = $findClue5[bookVariables.OC4Type-1];
  bookVariables.Pub1 = $pub1[bookVariables.OC4Type-1];
  bookVariables.Pub2 = $pub2[bookVariables.OC1Type-1];
  bookVariables.Pub3 = $pub3[bookVariables.OC3Type-1];
  bookVariables.Pub4 = $pub4[bookVariables.OC2Type-1];

  bookVariables.MCFirstName = document.getElementById("MCFirstName").value;
  bookVariables.MCSurname = document.getElementById("MCSurname").value;
  bookVariables.MCAge = document.getElementById("MCAge").value;
  bookVariables.MCAddress = document.getElementById("MCAddress").value;
  $MCGender = $('input[name="MCGender"]:checked').val();
  bookVariables.MCSheHeCapital = getSheHeCapital($MCGender);
  bookVariables.MCSheHeLower = getSheHeLower($MCGender);
  bookVariables.MCHerHisCapital = getHerHisCapital($MCGender);
  bookVariables.MCHerHisLower = getHerHisLower($MCGender);
  bookVariables.MCHerHimCapital = getHerHimCapital($MCGender);
  bookVariables.MCHerHimLower = getHerHimLower($MCGender);
  bookVariables.MCHimselfHerself = getHerselfHimself($MCGender);
  bookVariables.NumFriends = getNumFriends();
  bookVariables.NumberFriendsToInvite = getNumFriendsToInvite();
  //bookVariables.ListFriendsToInvite = getListOfFriendsToInvite();
  bookVariables.ListFriendsToInvite = getInvitingFriends().join(" and ");

  bookVariables.SchoolName = document.getElementById("SchoolName").value;
  bookVariables.SchoolHeadName = document.getElementById("SchoolHeadName").value;
  bookVariables.SchoolHeadMasterMistress = $('input[name="SchoolHeadMasterMistress"]:checked').val();
  bookVariables.SchoolHeadSheHeLower = getSchoolHeadSheHe(bookVariables.SchoolHeadMasterMistress);

  bookVariables.MCParents = document.getElementById("MCParents").value;
  $parentNumber = $('input[name="MCParentNumber"]:checked').val();
  bookVariables.MCParentsSheHeTheyCapital = getMCParentsInfo($parentNumber, "They", "She", "He");
  bookVariables.MCParentsSheHeThey = getMCParentsInfo($parentNumber, "they", "she", "he");
  bookVariables.MCParentsHerHisTheir = getMCParentsInfo($parentNumber, "their", "her", "his");
  bookVariables.MCParentsHerHimThem = getMCParentsInfo($parentNumber, "them", "her", "him");
  bookVariables.MCParentsWereWas = getMCParentsInfo($parentNumber, "were", "was", "was");
  bookVariables.MCParentsWeI = getMCParentsInfo($parentNumber, "We", "I", "I");
  bookVariables.MCParentsSingular = getMCParentsInfo($parentNumber, "", "a ", "a ");
  bookVariables.MCParentsMouth = getMCParentsInfo($parentNumber, "mouths", "mouth", "mouth");

  bookVariables.LibraryName = document.getElementById("LibraryName").value;
  bookVariables.PlaygroundName = document.getElementById("PlaygroundName").value;
  bookVariables.ShopName = document.getElementById("ShopName").value;
  bookVariables.StationName = document.getElementById("StationName").value;
  bookVariables.PubName = document.getElementById("PubName").value;

  finalPages=[];
  for(i=0;i<$origPages.length; i++){
    finalPageText = $origPages[i];
    for(bookVariable in bookVariables){
      var regExpVariable = new RegExp(bookVariable, "g");
      finalPageText = finalPageText.replace(regExpVariable, bookVariables[bookVariable]);
    }
    finalPages.push(finalPageText);
  }


  document.getElementById("bookTextCell").innerHTML = finalPages[currentPage];
  $pageDisplay = currentPage + 1;
  document.getElementById("pageNumberCell").innerHTML = "<span class=\"card-title\">"+$pageDisplay+" of "+finalPages.length + "</span>";
  document.getElementById("bookFormRow").hidden = true;
  document.getElementById("bookText").hidden = false;
  document.getElementById("book_inputs").elements["nextButton"].disabled=false;

}

function previousPage(){
  if(currentPage==0){
    return false;
  }
  currentPage--;
  changePage();
}

function nextPage(){
  if (currentPage==(finalPages.length-1)){
    return false;
  }
  currentPage++;
  changePage();
}

function startAgain(){
  document.getElementById("bookFormRow").hidden = false;
  document.getElementById("bookText").hidden = true;
}

function changePage(){
  document.getElementById("bookTextCell").innerHTML = finalPages[currentPage];
  $pageDisplay = currentPage + 1;
  document.getElementById("pageNumberCell").innerHTML = "<span class=\"card-title\">"+$pageDisplay+" of "+finalPages.length + "</span>";
  if(currentPage==0){
    document.getElementById("book_inputs").elements["previousButton"].disabled=true;
    document.getElementById("book_inputs").elements["nextButton"].disabled=false;
  }
  else if(currentPage==(finalPages.length-1)){
    document.getElementById("book_inputs").elements["previousButton"].disabled=false;
    document.getElementById("book_inputs").elements["nextButton"].disabled=true;
  }
  else{
    document.getElementById("book_inputs").elements["previousButton"].disabled=false;
    document.getElementById("book_inputs").elements["nextButton"].disabled=false;
  }

}

function isTrainLover(OCTypes){
  for(i=0; i<OCTypes.length; i++){
    if(OCTypes[i]>1 && OCTypes[i]<5){
      return true;
    }
  }
  return false;
}

function getTrainLover(OCTypes){
  if(OCTypes[3]>1 && OCTypes[3]<5){
    return bookVariables.OC4Name;
  }
  else if(OCTypes[0]>1 && OCTypes[0]<5){
    return bookVariables.OC1Name;
  }
  else if(OCTypes[1]>1 && OCTypes[1]<5){
    return bookVariables.OC2Name;
  }
  else if(OCTypes[2]>1 && OCTypes[2]<5){
    return bookVariables.OC3Name;
  }
  else{
    return "";
  }
}

function getMCParentsInfo(parentType, returnPlural, returnFemale, returnMale){
  if(parentType=="singleMum"){
    return returnFemale;
  }
  else if(parentType=="singleDad"){
    return returnMale;
  }
  else if(parentType=="multiple"){
    return returnPlural;
  }
  else{
    return "";
  }
}
function getOCDescriptor(OCType, OCAge, OCGender, OCAnimal){
  if(OCType=="Sibling"){
    if(OCGender=="Male"){
      if(Number(OCAge) > Number(document.getElementById("MCAge").value)){
        return "big brother";
      }
      else{
        return "little brother";
      }
    }
    else if(Number(OCAge) > Number(document.getElementById("MCAge").value)){
      return "big sister";
    }
    else{
      return "little sister";
    }
  }
  else if(OCType=="Cousin"){
    return "cousin";
  }
  else if(OCType=="Friend"){
    return "friend";
  }
  else if(OCType=="Pet"){
    return OCAnimal.toLowerCase();
  }
  else if(OCType=="Toy"){
    return "very favourite toy";
  }
  else{
    return "";
  }
}

function getOCType(OCType, OCAge, OCAnimal){
  if(OCType=="Sibling" || OCType=="Friend" || OCType=="Cousin"){
    if(Number(OCAge)<=1){
      return 1;
    }
    else if(Number(OCAge)<=3){
      return 2;
    }
    else if(Number(OCAge)<=8){
      return 3;
    }
    else{
      return 4;
    }
  }
  else if (OCType=="Pet"){
    if(OCAnimal=="Cat"){
      return 5;
    }
    else if(OCAnimal=="Dog"){
      return 6;
    }
    else{
      return "";
    }
  }
  else if (OCType=="Toy"){
    return 7;
  }
  else{
    return "";
  }
}

function getSheHeCapital(gender){
  return returnValueFromGender(gender, "She", "He", "");
}

function getSheHeLower(gender){
  return returnValueFromGender(gender, "she", "he", "");
}

function getSchoolHeadSheHe(masterMistress){
  if(masterMistress=="Headmaster"){
    return "he";
  }
  if(masterMistress=="Headmistress"){
    return "she";
  }
}

function getHerHisCapital(gender){
  return returnValueFromGender(gender, "Her", "His", "");
}

function getHerHisLower(gender){
  return returnValueFromGender(gender, "her", "his", "");
}

function getHerHimCapital(gender){
  return returnValueFromGender(gender, "Her", "Him", "");
}

function getHerHimLower(gender){
  return returnValueFromGender(gender, "her", "him", "");
}

function getHerselfHimself(gender){
  return returnValueFromGender(gender, "herself", "himself", "");
}

function returnValueFromGender(gender, femaleResponse, maleResponse, nullResponse){
  if(gender=="Female") {return femaleResponse;}
  else if(gender=="Male") {return maleResponse;}
  else {return nullResponse;}
}

function getNumFriends(){
  if(document.getElementById("OC2Name").value == ""){
    return 1;
  }
  if(document.getElementById("OC3Name").value == ""){
    return 2;
  }
  if(document.getElementById("OC4Name").value == ""){
    return 3;
  }
  return 4;
}

function getNumFriendsToInvite(){
  var num = getNumFriends();
  if(num > 1){
    return num + " friends";
  }
  else{
    return num + " friend";
  }
}


function getInvitingFriends(){
  var arrFriendsAndCousins = new Array();
  if(document.getElementById("OC1Type").value=="Cousin" || document.getElementById("OC1Type").value=="Friend"){
    arrFriendsAndCousins.push(bookVariables.OC1Name);
  }
  if(document.getElementById("OC2Type").value=="Cousin" || document.getElementById("OC2Type").value=="Friend"){
    arrFriendsAndCousins.push(bookVariables.OC2Name);
  }
  if(document.getElementById("OC3Type").value=="Cousin" || document.getElementById("OC3Type").value=="Friend"){
    arrFriendsAndCousins.push(bookVariables.OC3Name);
  }
  if(document.getElementById("OC4Type").value=="Cousin" || document.getElementById("OC4Type").value=="Friend"){
    arrFriendsAndCousins.push(bookVariables.OC4Name);
  }
  return arrFriendsAndCousins;
}

var bookVariables={
    InvitingFriends: "" ,
    Meeting1: "",
    Meeting2: "",
    Meeting3: "",
    Meeting4: "",
    SolveClue1: "",
    CelebrateClue1: "",
    FindClue2: "",
    SolveClue2: "",
    FindClue3: "",
    SolveClue3: "",
    FindClue4: "",
    SolveClue4: "",
    TrainLove: "",
    TrainLover: "",
    Station1: "",
    Station2: "",
    Station3: "",
    FindClue5: "",
    Pub1: "",
    Pub2: "",
    Pub3: "",
    Pub4: "",
    MCFirstName: "",
    MCSurname: "",
    MCAge: "",
    MCAddress: "",
    MCSheHeCapital: "",
    MCSheHeLower: "",
    MCHerHisCapital: "",
    MCHerHisLower: "",
    MCHerHimCapital: "",
    MCHerHimLower: "",
    MCHimselfHerself: "",
    NumFriends: "",
    NumberFriendsToInvite: "",
    ListFriendsToInvite: "",
    OC1Name: "",
    OC1Descriptor: "",
    OC1HerHimCapital: "",
    OC1HerHimLower: "",
    OC1HerHisCapital: "",
    OC1HerHisLower: "",
    OC1SheHeCapital: "",
    OC1SheHeLower: "",
    OC1FellaLady: "",
    OC1BoyGirl: "",
    OC2Name: "",
    OC2Descriptor: "",
    OC2HerHimCapital: "",
    OC2HerHimLower: "",
    OC2HerHisCapital: "",
    OC2HerHisLower: "",
    OC2SheHeCapital: "",
    OC2SheHeLower: "",
    OC3Name: "",
    OC3Descriptor: "",
    OC3HerHimCapital: "",
    OC3HerHimLower: "",
    OC3HerHisCapital: "",
    OC3HerHisLower: "",
    OC3SheHeCapital: "",
    OC3SheHeLower: "",
    OC4Name: "",
    OC4Descriptor: "",
    OC4HerHimCapital: "",
    OC4HerHimLower: "",
    OC4HerHisCapital: "",
    OC4HerHisLower: "",
    OC4SheHeCapital: "",
    OC4SheHeLower: "",
    OC4ToyType: "",
    OC1Type: "",
    OC2Type: "",
    OC3Type: "",
    OC4Type: "",
    SchoolName: "",
    SchoolHeadName: "",
    SchoolHeadMasterMistress: "",
    SchoolHeadSheHeLower: "",
    MCParentsSheHeTheyCapital: "",
    MCParentsSheHeThey: "",
    MCParentsHerHimThem: "",
    MCParentsHerHisTheir: "",
    MCParentsWereWas: "",
    MCParentsWeI: "",
    MCParentsSingular: "",
    MCParentsMouth: "",
    MCParents: "",
    LibraryName: "",
    PlaygroundName: "",
    ShopName: "",
    StationName: "",
    PubName: "",
};
