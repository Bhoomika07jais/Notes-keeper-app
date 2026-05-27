
async function addNote(){

    const title =
    document.getElementById("noteTitle").value;

    const text =
    document.getElementById("noteText").value;

    if(title === "" || text === ""){

        alert("Please fill all fields");

        return;
    }

    const response = await fetch(

        "http://localhost:7000/api/notes/add",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                title,
                text

            })

        }

    );

    const data = await response.json();

    alert(data.message);

}