let notes = JSON.parse(localStorage.getItem("notes")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

function saveUsers(){

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}

function register(){

    const name =
    document.getElementById("registerName").value;

    const email =
    document.getElementById("registerEmail").value;

    const password =
    document.getElementById("registerPassword").value;

    if(name === "" || email === "" || password === ""){

        alert("Please fill all fields");

        return;

    }

    users.push({

        name,
        email,
        password

    });

    saveUsers();

    alert("Registration Successful");

    window.location.href = "login.html";

}

function login(){

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    const user = users.find(

        user =>

        user.email === email &&

        user.password === password

    );

    if(!user){

        alert("Invalid Credentials");

        return;

    }

    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );

    alert("Login Successful");

    window.location.href = "index.html";

}
function saveNotes(){

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}

function addNote(){

    const title =
    document.getElementById("noteTitle").value;

    const description =
    document.getElementById("noteDescription").value;

    const color =
    document.getElementById("noteColor").value;

    if(title === "" || description === ""){

        alert("Fill all fields");

        return;

    }

    notes.push({

        title,
        description,
        color

    });

    saveNotes();

    displayNotes();

    alert("Note Added");

}

function displayNotes(data = notes){

    const container =
    document.getElementById("notesContainer");

    container.innerHTML = "";

    data.forEach((note,index)=>{

        container.innerHTML += `

        <div class="note"
        style="background:${note.color}">

            <h3>${note.title}</h3>

            <p>${note.description}</p>

            <button onclick="deleteNote(${index})">

                Delete

            </button>

        </div>

        `;

    });

}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}

function searchNotes(){

    const value = document
    .getElementById("searchBox")
    .value
    .toLowerCase();

    const filtered = notes.filter(note =>

        note.title.toLowerCase().includes(value)

    );

    displayNotes(filtered);

}

function showAllNotes(){

    displayNotes();

}
if(document.getElementById("notesContainer")){

    displayNotes();

}
