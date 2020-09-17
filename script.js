AOS.init();


function expense(){
    var cbalance = document.getElementById("cbalance");
    var income = document.getElementById("income");
    var expense = document.getElementById("expense");
    var input = document.getElementById("input").value;


    if(input == "")
    {
        alert("Please ! Enter Your Salaray or Expense.");
    }


    else if(input > 0) {
          total_amount = parseInt(cbalance.innerHTML); 
          closing_balance = total_amount + parseInt(input);
        cbalance.innerHTML = closing_balance + " .00 $" ;
        income.innerHTML = closing_balance + " .00 $";
        document.getElementById("input").value.reset();
    }



    else if(input<0)
    {
    
     cbalance = parseInt(cbalance.innerHTML);
      exp_balance = parseInt(expense.innerHTML)
     total_amount = cbalance + parseInt(input);
     document.getElementById("expense").innerHTML = (exp_balance - input)+ " .00 $";
     document.getElementById("cbalance").innerHTML = total_amount + " .00 $"
    }

    
}
