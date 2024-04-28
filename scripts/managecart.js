window.onload = init;


function init(){
    var Today = new Date(); // variable declaration 
    document.getElementById('date').value=Today.getDate()+"/"+ (Today.getMonth()+1)+"/"+Today.getFullYear();
    document.getElementById('customerName').focus();

    document.forms[0].onsubmit = function() {
        if(this.checkValidity()){
            if(document.getElementById('totalAmount').value > 0){
                if(confirm('Are you sure you would like to submit the book order ?') == 1){  //Mean user press ok button proceed next
                    var name = document.getElementById('customerName').value;
                    alert( name + ',Your order has been successfully submitted.You may receive your order items within 10 days.');
                    window.print();

 //Store the data for retrieve later.
localStorage.setItem("custName", name);
var totalamount=parseFloat(document.getElementById
    ('totalAmount').value);
 localStorage.setItem('totalPrice',totalamount);
 document.book.submit();
 location.href="successcart.html"
    return true;
                }
            }
            else{
                alert('Total Amount is invalid');
                return false;
            }
        }
    }




}