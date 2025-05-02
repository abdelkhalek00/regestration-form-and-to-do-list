var commentTitleInput=document.getElementById("commentTitle");
var commentContentInput=document.getElementById("commentContent");
var addNoteBtn=document.getElementById("addNote");
var searchInput=document.getElementById("searchInput");
var updateNote=document.getElementById("updateNote");

var commentsContainer;
if(localStorage.getItem("comments")==null){
    commentsContainer=[];
}
else{
    commentsContainer=JSON.parse(localStorage.getItem("comments"));
    displayComments();
}

function openAddCommentWindow(){
    document.getElementById("noteWindow").classList.remove("d-none")
    document.getElementById("confirmUpdate").classList.add("d-none")
    clear();
}


function closeAddCommentWindow(){
    document.getElementById("noteWindow").classList.add("d-none")
}

                    // add function//
function addNote(){
    var comment={
        title:commentTitleInput.value,
        content:commentContentInput.value,
    }

    commentsContainer.push(comment);
    localStorage.setItem("comments",JSON.stringify(commentsContainer));
    displayComments();
    document.getElementById("noteWindow").classList.add("d-none")
}


                    // display function//
function displayComments(){
    var cartona=``;
    for(var i=0;i<commentsContainer.length;i++){
        cartona+=`<div class="commentBox p-2 " id="commentBox">
                    <h3>${commentsContainer[i].title}</h3>
                    <p>${commentsContainer[i].content}</p>
                    <button class="commentBoxExit" id="commentBoxExit" onclick="deleteNote(${i})">x</button>
                    <button class="updateNode btn btn-warning" id="updateNote" onclick="setUpdate(${i});">update</button>
                </div>`
    }
    document.getElementById("notesBox").innerHTML=cartona;
}


                    // search function//
function searchComments(){
    var cartona=``;
    var term=searchInput.value;
    for(var i=0;i<commentsContainer.length;i++){
        if(commentsContainer[i].title.includes(term)){
            cartona+=`
                <div class="commentBox p-2 " id="commentBox">
                    <h3>${commentsContainer[i].title}</h3>
                    <p>${commentsContainer[i].content}</p>
                    <button class="commentBoxExit" id="commentBoxExit" onclick="deleteNote(${i})">x</button>
                    <button class="updateNode btn btn-warning" id="updateNote" onclick="setUpdate();">update</button>
                </div>`
        }
    }
    document.getElementById("notesBox").innerHTML=cartona;
}

                    // delete function//
function deleteNote(deleteIndex){
    commentsContainer.splice(deleteIndex,1)
    localStorage.setItem("comments",JSON.stringify(commentsContainer));
    displayComments();
}


                    // update function//
var updateIndex;
function setUpdate(i){
    updateIndex=i;
    document.getElementById("noteWindow").classList.remove("d-none")
    document.getElementById("confirmUpdate").classList.remove("d-none")
    commentTitleInput.value=commentsContainer[i].title;
    commentContentInput.value=commentsContainer[i].content;
}
function confirmUpdate(){
    commentsContainer[updateIndex].title=commentTitleInput.value;
    commentsContainer[updateIndex].content=commentContentInput.value;
    displayComments();
    localStorage.setItem("comments",JSON.stringify(commentsContainer));
    document.getElementById("noteWindow").classList.add("d-none")

}      
              // clear function//
function clear(){
    commentTitleInput.value="";
    commentContentInput.value="";
}