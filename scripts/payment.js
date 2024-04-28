window.onload = submitbtn();


function submitbtn(){
    document.forms[0].onsubmit = function submitbtn() {
        if(this.checkValidity()){
                if(confirm('Are You Sure want to continue payment?') == 1){ 
                    alert('Payment Successful !');
                    window.location.href="HomePage.html"; // to home page
                    return true;
                }
                else{
                    alert('Payment Unsuccessful');
                    return false;
                }
        }
    }
}

window.onload = cancelbtn();

// cancel button
//q how the code perform?
//a when user click cancel button, it will pop up a confirm box to ask user to confirm cancel or not
//if user click ok, it will alert cancel payment successful and redirect to cart page
//if user click cancel, it will alert cancel payment unsuccessful and redirect to payment page

//help me write a code to redirect to cart page
function redirect(){
    window.location.href="Cart.html" // to Add to cart
}

function cancelbtn(){
    if(confirm('Are You Sure want to cancel the payment?') == 1){ 
        alert('Cancel Payment Successful !');
        window.location.href="Cart.html" // to Add to cart
        return true;
    }
    else{
        alert('Cancel Payment Unsuccessful');
        window.location.href="Payment.html"
        return false;
    }

}