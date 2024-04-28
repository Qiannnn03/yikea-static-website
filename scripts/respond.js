
var messages = [],  userInput = "",   botReply = "",  botName="LiveChat";

function getfocus(){
  botReply="What Question You Want To Ask?<br />1.How long do delivery times take?<br />2.What payment methods do you accept?<br />3.Is there an Instalment Payment Plan (IPP) option if I shop online?<br />4.What is the YI-KEA catalogue?";
  messages.push("<b>" + botName + ":</b> " + botReply);
  for (var i = 1; i < 8; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
  }

}



function botRespond() {
  botReply = "What Question You Want To Ask?<br />1.How long do delivery times take?<br />2.What payment methods do you accept?<br />3.Is there an Instalment Payment Plan (IPP) option if I shop online?<br />4.What is the YI-KEA catalogue?"; //the default message

  if (userInput == 1) {
    botReply = "Usually we will ship out on 2-3days on working day after the payment successful."
  }

  if (userInput == 2) {
    botReply = "You can pay with Visa and Mastercard and debit cards, and FPX."
  }
  if (userInput == 3) {
    botReply = "We dont offer IPP Instalment plan sorry for the inconvience."
  }
  if (userInput == 4) {
    botReply = "This year's IKEA catalogue was produced in 38 editions, in 17 languages for 28 countries. The catalogue offers more than just a glimpse at the diverse IKEA product range. You'll discover new affordable solutions and creative approaches to help inspire home furnishing ideas for better living."
  }
}

function output() {

  if (document.getElementById("chat").value != "") {
    userInput = document.getElementById("chat").value;
    document.getElementById("chat").value = "";
    var name="You";
    messages.push("<b>" + name + ":</b> " + userInput);
    botRespond();
    messages.push("<b>" + botName + ":</b> " + botReply);    
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}



document.onkeypress = enter;
function enter(e) {
  var e = (e.keyCode);
  if (e == 13 || e == 3) {
    output();
  }
}