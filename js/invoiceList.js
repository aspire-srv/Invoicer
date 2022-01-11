



document.getElementById("price").addEventListener("change", function(){
  document.getElementById("total").value = document.getElementById("price").value * parseFloat(document.getElementById("Qty").value)
})


// Display Invoice details on click

function displaySingle(item) {
  console.log(item);

  document.querySelector(".row").style.display = "none";
  document.querySelector(".invoice-details").style.display = "none";
  // document.querySelector(".side-navbar").style.display = "none";

  var singleInvoice = `
    <div class="container mainpaid-section m-5 ps-5 w-75 mx-auto">
        <div class="go-back d-flex align-items-center " id="icon-back ">
        <a class="text-decoration-none" href="https://aspire-srv.github.io/Invoicer/"><i class="fas fa-chevron-left" id="icon-back"></i><span>Go Back</span></a> 
        </div>
        <div class="section-status p-5">
            <div class="d-flex justify-content-between status-ending">
                <div class="status-check d-flex">
                    <p>Status</p>
                    <ul>
                        <li>Pending</li>
                    </ul>
                </div>
                <div class="edit-delete">
                    <button type="button" class="btn" id="edit-btn"> Edit</button>
                    <button type="button" class="btn btn-danger" name="delete" class="delete" id="${item.ID}">Delete</button>
                </div>
            </div>
        </div>

        <!--Main Bill section-->

        <div class="container d-flex justify-content-between mt-5  p-5 section-billing flex-column sender-section">
            <div class="invoice-first d-flex justify-content-between">
                <div class="invoice-major">
                    <h6 class=""><span class="hash">#</span>${item.ID}</h6><pre>
                    <p>${item.description}</p>
                </div>
                <div class="paid-address">
                    <p>${item.clientAddress.streetAddress}</p>
                    <p>${item.clientAddress.city}</p>
                    <p>${item.clientAddress.postCode}</p>
                    <p>${item.clientAddress.country}</p>
                </div>
            </div>
            <div class="invoice-description d-flex justify-content-between">
                <div class="invoice-date">
                    <p>Payment Date</p>
                    <span>${item.invoiceDate}</span>
                </div>
                <div class="bill-to">
                    <p>Bill To</p>
                    <h6><strong>${item.clientName}</strong></h6>
                    <p>${item.senderAddress.postCode}<br>${item.senderAddress.city}<br>${item.senderAddress.country}</p>
                </div>
                <div class="sent-to">   
                    <p>Sent to</p>
                    <strong>${item.clientEmail}</strong>
                </div>
            </div>
            <div class="other-invoicedescription">
                <div class="payment-due">
                    <p>Payment Due</p>
                    <span class="color-dark">${item.paymentTerms}</span>
                </div>
            </div>
            <div class="item-description mt-5 p-5">
                <div class="description-main d-flex justify-content-between">
                    <p>Item name</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
                <div class="item-quantity d-flex justify-content-between">
                    <p>${item.itemDetails[0].name}</p>
                    <p>${item.itemDetails[0].quantity}</p>
                    <p>${item.itemDetails[0].price}</p>
                    <p><strong>${item.itemDetails[0].total}</strong></p>
                </div>
            </div>
            <div class="footer-bill">
                <div class="total-bill d-flex justify-content-between bg-dark">
                    <p>Amount Due</p>
                    <h2>${item.itemDetails[0].total}</h2>
                </div>
            </div>
        </div>  
    </div>`;

  document.querySelector(".single").innerHTML = singleInvoice;
}




function displayInvoice(item) {
  console.log(item);
  document.querySelector(".empty").style.display = "none";
  var invoiceList = ` <div  id="${item.ID}" class="row w-75 mx-auto list">
        <div class="col-6 date">
            <p  class="id fs-5">#${item.ID}</p>
            <p>${item.invoiceDate}</p>
            <p" class="id fs-5">$${item.itemDetails[0].total}</p>
        </div>
        <div id="${item.ID}" class="col-6 align-items-center name">
            <p id="${item.ID}">${item.clientName}</p>
            <p id="${item.ID}" class="btn btn-outline-warning"><i class="fas fa-circle "></i> Unpaid</p>
        </div>`;

  document.querySelector(".invoice-details").innerHTML += invoiceList;
}

let itemsArray = window.localStorage.getItem("items")
  ? JSON.parse(window.localStorage.getItem("items"))
  : [];

window.localStorage.setItem("items", JSON.stringify(itemsArray));

invoiceData = {};

itemsArray.forEach((item) => {
  displayInvoice(item);
});

const getData = async () => {
  console.log("im here");
  clientDetails = {
    streetAddress: document.getElementById("billerStreetAddress").value,
    city: document.getElementById("billerCity").value,
    postCode: document.getElementById("billerPostalCode").value,
    country: document.getElementById("billerPostCountry").value,
  };

  invoiceData.clientAddress = clientDetails;
  invoiceData.ID = Math.random().toString(36).slice(2);
  // console.log(Math.random().toString(36));
  invoiceData.clientEmail = document.getElementById("clientEmail").value;
  invoiceData.clientName = document.getElementById("clientName").value;
  invoiceData.invoiceDate = document.getElementById("invoiceDate").value;
  invoiceData.description = document.getElementById("description").value;

  senderDetails = {
    streetAddress: document.getElementById("clientStreetAddress").value,
    city: document.getElementById("clientCity").value,
    postCode: document.getElementById("clientPostCode").value,
    country: document.getElementById("clientCountry").value,
  };
  var itemDetails = [
    {
      name: document.getElementById("itemName").value,
      quantity: document.getElementById("Qty").value,
      price: document.getElementById("price").value,
      total: document.getElementById("total").value,
    },
  ];
  invoiceData.itemDetails = itemDetails;
  invoiceData.senderAddress = senderDetails;
  invoiceData.paymentTerms = document.getElementById("dropdown").value;

  // invoiceData.status = "unpaid";
  // invoiceData.total = parseFloat(document.getElementById("Qty").value) * parseFloat(document.getElementById("price").value);

  console.log(invoiceData);

  return;
};

const handleSave = async (e) => {
  console.log("I'm Here");

  await getData();

  itemsArray.push(invoiceData);

  localStorage.setItem("items", JSON.stringify(itemsArray));
  window.location.reload(true);
};

var numOfInvoices = document.querySelectorAll(".list").length;
console.log(numOfInvoices);

document.querySelector(
  ".no-invc"
).innerHTML = `You have a total of ${numOfInvoices} invoices.`;

for (var i = 0; i < numOfInvoices; i++) {
  document.querySelectorAll(".list")[i].addEventListener("click", function (e) {
    // var newArray = [];
    console.log(e.target.id);

    for (var j = 0; j < itemsArray.length; j++) {
      if (itemsArray[j].ID === e.target.id) {
        displaySingle(itemsArray[j]);
      }
    }
  });
}

// document.body.addEventListener("click", function(e){
//     console.log(e.target.id);
// })

// var numOfDelete = document.querySelector(".delete");
// console.log(numOfDelete);

// for(var i=0; i<=numOfInvoices; i++){
document.body.addEventListener("click", function (e) {
  var newArray = [];
  console.log(e.target.name);
  if (e.target.name == "delete") {
    for (var j = 0; j < itemsArray.length; j++) {
      if (itemsArray[j].ID !== e.target.id) {
        newArray.push(itemsArray[j]);
      }
    }
    window.localStorage.setItem("items", JSON.stringify(newArray));
    itemsArray = newArray;
    window.location.reload(true);
  }
});


