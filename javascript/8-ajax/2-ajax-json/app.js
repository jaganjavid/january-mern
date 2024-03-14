

document.getElementById("btn-1").addEventListener("click", loadCustomer);
document.getElementById("btn-2").addEventListener("click", loadCustomers);



function loadCustomer() {

    const xhr = new XMLHttpRequest();

    // OPEN

    xhr.open("GET", "customer.json", true);

    xhr.onload = function () {

        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID : ${customer.id}</li>
                    <li>Name : ${customer.name}</li>
                    <li>Company : ${customer.company}</li>
                    <li>phone : ${customer.phone}</li>
                </ul>
            `;
           
            document.getElementById("customer").innerHTML = output;
        }

        if(this.status === 404){
            document.getElementById("customer").innerHTML = "<h1>Not Found</h1>";
        }

    }

    xhr.send();
}
function loadCustomers() {

    const xhr = new XMLHttpRequest();

    // OPEN

    xhr.open("GET", "customers.json", true);

    xhr.onload = function () {

        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            // console.log(customers);

            let output = "";

            customers.forEach(function(customer) {
                output = output + `
                        <ul>
                           <li>ID : ${customer.id}</li>
                           <li>Name : ${customer.name}</li>
                           <li>Company : ${customer.company}</li>
                           <li>phone : ${customer.phone}</li>
                        </ul>
                `;
            });
           
            document.getElementById("customers").innerHTML = output;
        }

        if(this.status === 404){
            document.getElementById("customer").innerHTML = "<h1>Not Found</h1>";
        }

    }

    xhr.send();
}


let x = 5;

console.log(x + 5);