// const employees = fetch("./employees.json")
// .then(response => {
//    return response.json();
// })
// .then(variable => console.log(variable))
// .catch(error => console.error(error));


const btn = document.getElementById("submit");

const load = async function() {
    try {
        let employees = await fetch("./employees.json");
        let finalEmploy = await employees.json();
        console.log(finalEmploy.Employees);
    }
    catch(e) {console.log('Error')}
}

btn.onclick = () => {
    load();
    console.log('clicked');
}
