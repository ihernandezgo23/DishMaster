async function login(){
    let izena = document.getElementById("name").value;
    let pasahitza = document.getElementById("pass").value;

    let response = await fetch("json/user.json");
    let kontuak = await response.json();
    //console.log(kontuak);

    let exists = false;
    let jsonData = JSON.parse(localStorage.getItem("users"));
    console.log("Berria"+jsonData)

    for(i=0; i<jsonData.length; i++){
        if(izena == "admin" && pasahitza == "admin"){
        load_page("admin.html");
        exists = true;
        }
        else if(jsonData[i].username == izena && pasahitza == jsonData[i].password){
            load_page("home.html");
            exists = true;
        }
        
    }

    if(!exists){
        alert("User or Password incorrect!");
    }
    
}


async function signUp(){
    let izena = document.getElementById("name").value;
    let pasahitza = document.getElementById("pass").value;

    let response = await fetch("json/user.json");
    let kontuak = await response.json();
    console.log(kontuak);

    let exist = false;
    for(i=0; i<kontuak.length; i++){
        if(izena == kontuak[i].username && pasahitza == kontuak[i].password){
            alert("The user "+izena+" is alredy register");
            load_page("home.html");
            exist = true;
        }
    }
    if(!exist){
        localStorage.setItem("users",JSON.stringify(kontuak));
        let jsonData = JSON.parse(localStorage.getItem("users"));
        console.log(jsonData);

        if(izena === "" || pasahitza === ""){
            confirm("You must not leave any empty fields!");
        }
        else{
            jsonData.push({
                user_id: jsonData.length,
                username: izena,
                password: pasahitza,
            });
            console.log(jsonData);
            localStorage.setItem("users",JSON.stringify(jsonData));
            alert("The user "+izena+" was registered correctly, now try to Sign In!");
        }
        
    }
}
function load_page(page){
    window.location.href = page;
}

/*

*/