// START

// CHECKING LOCAL STROAGE FOR PEOPLE KEY 
var inLocalStorage = localStorage.getItem('People');
// IF THE KEY PEOPLE DOESNT EXIST IN LOCAL STORAGE THEN SET A NEW LOCAL STORAGE WITH KEY PEOPLE AND VALUE PERSON
if (inLocalStorage == null) {
    let person = [
    ]

    // PARSING THE ARRAY AS A STRING AND SAVING THE ARRAY IN LOCAL STORAGE 
    localStorage.setItem("People", JSON.stringify(person))

}



// CHECKING IF THE KEY 'SALES' EXISTS IN LOCAL STORAGE
// IF IT DOESNT EXIST A NEW VARIABLE IS CREATED AND SAVED TO LOCAL STORAGE WITH THE KEY 'SALES'
var salesInLocalStorage = localStorage.getItem("Sales")
if (salesInLocalStorage == null) {
    var sales = []
    localStorage.setItem("Sales", JSON.stringify(sales))
}


// FOR LOAN ORDER
// FINDING THE LOAN ORDER DATA IN LOCAL STORAGE AND STORING IT IN A VARIABLE
var existingLoanOrders = localStorage.getItem("Loan Orders")
existingLoanOrders = JSON.parse(existingLoanOrders)
// CHECKING IF THERE ARE ANY EXISTING LOAN ORDERS

if (existingLoanOrders == null) {

    var customersLoanOrder = [
    ]
    localStorage.setItem("Loan Orders", JSON.stringify(customersLoanOrder))

}

// FOR REGISTERED CUSTOMERS

var existingCustomers = localStorage.getItem("Customers")

if (existingCustomers == null) {
    var customer = []
    localStorage.setItem("Customers", JSON.stringify(customer))
}



// TO CREATE NEW USER

function addUser() {
    // WHEN BUTTON IS CLICKED GET PEOPLE FROM LOCAL STORAGE 
    var existingUsers = localStorage.getItem('People')
    // THE OBJECT IS SAVED IN LOCAL STORAGE AS STRING SO IT SHOULD BE PARSED TO AN OBJECT
    existingUsers = JSON.parse(existingUsers)
    // GETTING NEW USER DATA FROM FORM
    var newUsername = document.getElementById('newname').value
    var newPassword = document.getElementById('newpassword').value

    // ADDING NEW USER AND SAVING IN ALREADY EXISTING LOCAL STORAGE 
    var newUser = { username: newUsername, password: newPassword }
    // CHECKING IF A USERNAME AND PASSWORD WAS INPUTED
    if (newUsername && newPassword) {
        existingUsers.push(newUser)
        localStorage.setItem("People", JSON.stringify(existingUsers))
        location.assign("login.html")

    } else {
        alert("Enter required information")
        location.reload()
    }

    // THIS IS A JS FUNCTION TO RELOAD THE PAGE

}

// LOGIN EXISTING USER
// CHANGE DATA IN LOCAL STORAGE TO OBJECT USING JSON PARSE 
inLocalStorage = JSON.parse(inLocalStorage)

function login() {

    // GET USER INPUT INFO FOR LOGIN
    var inputUsername = document.getElementById('username').value
    var inputPassword = document.getElementById('password').value

    // LOOPING THROUGH EVERY USER SAVED IN LOCAL STORAGE 
    for (let i = 0; i < inLocalStorage.length; i++) {
        // IF INPUTED USERNAME IS FOUND IN LOCAL STOGAGE THEN USER IS LOGGED IN
        if (inputUsername == inLocalStorage[i].username && inputPassword == inLocalStorage[i].password) {

            location.assign("homepage.html")
            return
        }

    }
    alert("INCORRECT CRIDENTIALS")
    location.reload()
}


// REGISTER CUSTOMERS 

function registerCustomer() {
    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)


    var newCustomerName = document.getElementById("NewCustomerName").value
    var newCustomerNumber = document.getElementById("NewCustomerNumber").value
    var newCustomerAddress = document.getElementById("NewCustomerAddress").value

    var newCustomer = { newName: newCustomerName, newNumber: newCustomerNumber, newAddress: newCustomerAddress }

    if (newCustomerName && newCustomerNumber.length > 0 && newCustomerNumber.length == 9 && newCustomerAddress) {


        existingCustomers.push(newCustomer)
        localStorage.setItem("Customers", JSON.stringify(existingCustomers))

    } else if (newCustomerNumber.length != 9) {
        alert("incorrect phone number")
    }
    
    location.reload()

}



function displayCustomers() {

    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)

    for (let i = 0; i < existingCustomers.length; i++) {


        customerTable.innerHTML += '<tr> <td> ' + existingCustomers[i].newName + ' </td>  <td> '
            + existingCustomers[i].newNumber + ' </td>   <td> '
            + existingCustomers[i].newAddress + '  </td>  <td> <!-- <button onclick="editCustomer(' + i + ')" class="btn btn-secondary btn-sm"> edit</button> --> '
            + ' <button onclick="deleteCustomer(' + i + ')" class="btn btn-sm btn-danger"> delete customer</button></td></tr>'


    }

}

// DELETE A CUSTOMER
function deleteCustomer(i) {

    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)


    var mappedCustomers = existingCustomers.map(existingCustomers => ({
        newName: existingCustomers.newName,
        newNumber: existingCustomers.newNumber,
        newAddress: existingCustomers.newAddress
    }))

    mappedCustomers.splice(i, 1)
    localStorage.setItem("Customers", JSON.stringify(mappedCustomers))

    location.reload()
}

// EDIT CUSTOMER INFO

// function editCustomer(i) {
//    document.getElementById("regBtn").remove()
//     updateBtn.innerHTML = "Update Customer Details"
//    document.getElementById('updateBtn').classList.add("btn", "btn-primary")
//     updateCustomerh2.innerHTML = "Update Customer Info"


// }

// UPDATE CUSTOMER INFO

// function updateCustomer() {


//     var existingCustomers = localStorage.getItem("Customers")
//     existingCustomers = JSON.parse(existingCustomers)

//     var newCustomerName = document.getElementById("NewCustomerName").value
//     var newCustomerNumber = document.getElementById("NewCustomerNumber").value
//     var newCustomerAddress = document.getElementById("NewCustomerAddress").value



//     var mappedCustomers = existingCustomers.map(existingCustomers => ({
//         newName: existingCustomers.newName,
//         newNumber: existingCustomers.newNumber,
//         newAddress: existingCustomers.newAddress
//     }))

//     mappedCustomers.splice(i, 1, { newName: newCustomerName, newNumber: newCustomerNumber, newAddress: newCustomerAddress })

//     console.log(mappedCustomers);

//         localStorage.setItem("Customers", JSON.stringify(mappedCustomers))

//     location.reload()

// }


// FUNCTION TO ADD LOAN ORDER AFTER BUTTON IS CLICKED
function loanOrder() {
    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)


    var existingLoanOrders = localStorage.getItem("Loan Orders")
    existingLoanOrders = JSON.parse(existingLoanOrders)

    salesInLocalStorage = JSON.parse(localStorage.getItem("Sales"))

    // THIS IS TO GET THE DATE 
    var date = new Date()
    var currentYear = date.getFullYear()
    var currentMonth = date.getMonth()
    var currentDay = date.getDate()
    var hours = date.getHours()
    var mins = date.getMinutes()
    var secs = date.getSeconds()

    // GETTING THE DATA FROM THE FORM IN THE LOAN ORDER PAGE
    var selectedName = document.getElementById("customerSelect").value
    var ammountNeeded = document.getElementById('ammount').value


    // CREATING A NEW LOAN ORDER OBJECT WITH DATA FROM THE FORM

    for (let i = 0; i < existingCustomers.length; i++) {
        if (selectedName == existingCustomers[i].newName) {

            var newLoanOrder = {
                customerName: selectedName, ammount: ammountNeeded,
                address: existingCustomers[i].newAddress, phoneNumber: existingCustomers[i].newNumber,
                year: currentYear, month: currentMonth,
                day: currentDay, hour: hours, min: mins, sec: secs
            }

        }

    }



    // IF USER HAS PAID HIS DEBT HE CAN TAKE ANOTHER LOAN 
    for (let i = 0; i < salesInLocalStorage.length; i++) {

        if (salesInLocalStorage[i].Name.includes(selectedName) && salesInLocalStorage[i].debtLeft == 0) {
            existingLoanOrders.push(newLoanOrder)
            existingLoanOrders = JSON.stringify(existingLoanOrders)
            localStorage.setItem("Loan Orders", existingLoanOrders)
            location.reload()
            return
        }

    }


    // IF CUSTOMER STILL HAS A DEBT

    for (let i = 0; i < salesInLocalStorage.length; i++) {

        if (salesInLocalStorage[i].Name.includes(selectedName) && salesInLocalStorage[i].debtLeft > 1 && salesInLocalStorage[i].debtLeft != 0) {

            debtAlert.innerHTML = "You have an unpaid debt <br> Kindly clear your debt in order to take a new loan "
            return

        }

    }


    // CHECKING IF SOME SPECIFIC DATA IS INPUTED , IF YES  THEN LOAN ORDER IS MADE AND SAVED IN LOCAL STORAGE AS A STRING
    if (selectedName, ammountNeeded) {
        existingLoanOrders.push(newLoanOrder)
        existingLoanOrders = JSON.stringify(existingLoanOrders)
        localStorage.setItem("Loan Orders", existingLoanOrders)
    }
    else {
        alert("you must fill in the information required")
    }


    // RELOAD PAGE
    location.reload()


}



// DIISPLAYING LOAN ORDERS ON A TABLE
function displayLoanOrders() {

    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)

    var existingLoanOrders = localStorage.getItem("Loan Orders")
    existingLoanOrders = JSON.parse(existingLoanOrders)
    // THIS IS TO SHOW THE AMOUNT OF LOAN ORDERS CURRENTLY
    document.getElementById("loanCount").innerHTML = existingLoanOrders.length

    // display select items 
    for (let i = 0; i < existingCustomers.length; i++) {
        customerSelect.innerHTML += '<option> ' + existingCustomers[i].newName + ' </option>'
    }


    // FOR LOOP TO LOOP THROUGH ALL EXISTING LOAN ORDERS 
    for (let i = 0; i < existingLoanOrders.length; i++) {
        var ampm = ""
        if (existingLoanOrders[i].hour > 12) {
            ampm = "PM"
        } else {
            ampm = "AM"
        }

        // THIS IS THE TABLE ON WHICH THE LOAN ORDERS WILL BE DISPLAYED
        tablebody.innerHTML += '<tr><td>' + existingLoanOrders[i].customerName + ' </td> <td>'
            + existingLoanOrders[i].phoneNumber + '</td><td class ="amtdata">'
            + existingLoanOrders[i].ammount + ' ' + ' FCFA</td><td>'
            + existingLoanOrders[i].address + '</td><td> '
            + existingLoanOrders[i].day + '-' + '0' + existingLoanOrders[i].month + '-'
            + existingLoanOrders[i].year + '</td> <td> ' + existingLoanOrders[i].hour + ':'
            + existingLoanOrders[i].min + ' ' + ampm + '   </td> <td> <button  onclick="deleteLoan(' + i + ')" class="deleteBtn btn btn-sm  btn-danger" >Delete</button> </td> </tr>'

    }
}

// DELETING  LOAN ORDERs
function deleteLoan(i) {
    var existingLoanOrders = localStorage.getItem("Loan Orders")
    existingLoanOrders = JSON.parse(existingLoanOrders)

    var mappedOrders = existingLoanOrders.map(existingLoanOrders => ({


        customerName: existingLoanOrders.customerName,
        phoneNumber: existingLoanOrders.phoneNumber,
        ammount: existingLoanOrders.ammount,
        address: existingLoanOrders.address,
        day: existingLoanOrders.day,
        month: existingLoanOrders.month,
        year: existingLoanOrders.year,
        hour: existingLoanOrders.hour,
        min: existingLoanOrders.min


    }))

    mappedOrders.splice(i, 1)
    localStorage.setItem("Loan Orders", JSON.stringify(mappedOrders))

    location.reload()

}

// delete all loan orders

var deleteAllOrders = () => {
    localStorage.removeItem("Loan Orders")
    location.reload()
}


// FUNCTION TO PERFORM A SALE AFTER BUTTON IS CLICKED

function performSales() {
    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)

    var existingSales = localStorage.getItem("Sales")
    existingSales = JSON.parse(existingSales)


    var date = new Date()
    var currentYear = date.getFullYear()
    var currentMonth = date.getMonth()
    var currentDay = date.getDate()
    var hours = date.getHours()
    var mins = date.getMinutes()
    var secs = date.getSeconds()


    var sellerName = document.getElementById("customerSelect").value
    var sellerProduct = document.getElementById("sellerProduct").value
    var productAmmount = document.getElementById("productAmmount").value



    // FOR LOOP TO LOOP THROUGH ALL LOAN ORDERS MADE MADE
    for (let i = 0; i < existingLoanOrders.length; i++) {

        if (sellerName == existingLoanOrders[i].customerName && productAmmount < existingLoanOrders[i].ammount) {

            var remainingDebt = existingLoanOrders[i].ammount - productAmmount
            var balance = 0

            
        }

        else if (sellerName == existingLoanOrders[i].customerName && productAmmount == existingLoanOrders[i].ammount) {
            var remainingDebt = productAmmount - existingLoanOrders[i].ammount
            var balance = remainingDebt

            
        }

        else if (existingLoanOrders[i].customerName.includes(sellerName) && productAmmount > existingLoanOrders[i].ammount) {
            var balance = productAmmount - existingLoanOrders[i].ammount
            var remainingDebt = 0

        }


    }


    if (productAmmount == "" && sellerProduct == "") {
        alert("you must input required information")
        location.reload()
        return


    }



    // FOR LOOP TO LOOP THROUGH ALL SALES MADE
    for (let i = existingSales.length - 1; i >= 0; i--) {


        // TESTING


        if (existingSales[i].Name.includes(sellerName) && existingSales[i].Balance > 1 && existingSales[i].debtLeft == 0 && productAmmount > existingSales[i].debtLeft) {
            for (let i = 0; i < existingLoanOrders.length; i++) {

                if (existingLoanOrders[i].customerName.includes(sellerName)) {

                    var remainingDebt = existingLoanOrders[i].ammount - productAmmount
                    var balance = 0
                    var newSale = {
                        Name: sellerName, prodduct: sellerProduct,
                        ammount: productAmmount, debtLeft: remainingDebt, Balance: balance,
                        year: currentYear, month: currentMonth,
                        day: currentDay, hour: hours, min: mins, sec: secs
                    }
                
                    existingSales.push(newSale)
                    // console.log(existingSales);
                    existingSales = JSON.stringify(existingSales)
                    localStorage.setItem("Sales", existingSales)
                    location.reload()

                    return
                    
                }
                
            }


        }


        // END OF TESTING

        if (sellerName == existingSales[i].Name && existingSales[i].debtLeft > 0 && productAmmount <= existingSales[i].debtLeft) {

            var remainingDebt = existingSales[i].debtLeft - productAmmount

            var newSale = {
                Name: sellerName, prodduct: sellerProduct,
                ammount: productAmmount, debtLeft: remainingDebt, Balance: 0,
                year: currentYear, month: currentMonth,
                day: currentDay, hour: hours, min: mins, sec: secs
            }
            existingSales.push(newSale)
            existingSales = JSON.stringify(existingSales)
            localStorage.setItem("Sales", existingSales)
            location.reload()
            return
        }


        else if (sellerName == existingSales[i].Name && productAmmount > existingSales[i].debtLeft) {

            var zero = 1 - 1
            var remainingDebt = zero
            var balance = productAmmount - existingSales[i].debtLeft

            var newSale = {
                Name: sellerName, prodduct: sellerProduct,
                ammount: productAmmount, debtLeft: remainingDebt, Balance: balance,
                year: currentYear, month: currentMonth,
                day: currentDay, hour: hours, min: mins, sec: secs
            }

            existingSales.push(newSale)
            existingSales = JSON.stringify(existingSales)
            localStorage.setItem("Sales", existingSales)
            location.reload()
            return
        }

    }



    // If the arguments in the two loops are not furfilled , the code continues and a sale is made 

    var newSale = {
        Name: sellerName, prodduct: sellerProduct,
        ammount: productAmmount, debtLeft: remainingDebt, Balance: balance,
        year: currentYear, month: currentMonth,
        day: currentDay, hour: hours, min: mins, sec: secs
    }

    existingSales.push(newSale)
    // console.log(existingSales);
    existingSales = JSON.stringify(existingSales)
    localStorage.setItem("Sales", existingSales)



    location.reload()

}



var previewSales = () => {
    var existingCustomers = localStorage.getItem("Customers")
    existingCustomers = JSON.parse(existingCustomers)

    var existingSales = localStorage.getItem("Sales")
    existingSales = JSON.parse(existingSales)


    // display select items 
    for (let i = 0; i < existingCustomers.length; i++) {
        customerSelect.innerHTML += '<option> ' + existingCustomers[i].newName + ' </option>'
    }


    // LOOP
    for (let i = 0; i < existingSales.length; i++) {
        var ampm = ""
        if (existingSales[i].hour > 12) {
            ampm = "PM"
        } else {
            ampm = "AM"
        }

        salesTable.innerHTML += '<tr> <td>' + existingSales[i].Name + '</td><td>'
            + existingSales[i].prodduct + '</td><td  class=prodCost >'
            + existingSales[i].ammount + ' FCFA</td> <td class=debtdata>'
            + existingSales[i].debtLeft + ' FCFA</td>  <td class=baldata> ' + existingSales[i].Balance + ' FCFA </td> <td> '
            + existingSales[i].day + '-' + '0' + existingSales[i].month + '-'
            + existingSales[i].year + '</td> <td> ' + existingSales[i].hour + ':'
            + existingSales[i].min + ' ' + ampm + ' </td>  <td> <button  onclick="deleteSales(' + i + ')" class="deleteBtn btn-sm btn btn-danger" >Delete</button> </td> </tr>'

    }

    document.getElementById("salesCount").innerHTML = existingSales.length

}


// SALES HISTORY 
var salesHistory = localStorage.getItem("Sales History")

if (salesHistory == null) {

    localStorage.setItem("Sales History", JSON.stringify([]))
}



function deleteSales(i) {
    var salesHistory = localStorage.getItem("Sales History")
    salesHistory = JSON.parse(salesHistory)


    var existingSales = localStorage.getItem("Sales")
    existingSales = JSON.parse(existingSales)

    var mappedSales = existingSales.map(existingSales => ({

        Name: existingSales.Name,
        prodduct: existingSales.prodduct,
        ammount: existingSales.ammount,
        debtLeft: existingSales.debtLeft,
        Balance: existingSales.Balance,
        day: existingSales.day,
        month: existingSales.month,
        year: existingSales.year,
        hour: existingSales.hour,
        min: existingSales.min


    }))



    var deletedSales = mappedSales.splice(i, 1)
    localStorage.setItem("Sales", JSON.stringify(mappedSales))


    salesHistory.push(deletedSales)
    localStorage.setItem("Sales History", JSON.stringify(salesHistory))

    location.reload()
}


function deleteAllSales() {
    localStorage.removeItem("Sales")
    location.reload()
}