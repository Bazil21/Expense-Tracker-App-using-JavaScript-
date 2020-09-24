AOS.init();




function expense(){
    var cbalance = document.getElementById("cbalance");
    var income = document.getElementById("income");
    var expense = document.getElementById("expense");
    var input = document.getElementById("input").value;
    var description = document.getElementById("descrip").value;

    var transaction_record = document.getElementById("transaction_record")
    var record = document.createElement("div");
    record.setAttribute("id","history");
    var history = document.createTextNode(description  + "  ---------  " + input + "   $   ");
    record.appendChild(history);
    transaction_record.appendChild(record);

    record.addEventListener('click',function(){this.remove(history);})


    if(input == "" )
    {
        alert("Please ! Enter Your Salaray or Expense.");
        record.remove(record);
    }


    else if(input > 0) {
          total_amount = parseInt(cbalance.innerHTML); 
          closing_balance = total_amount + parseInt(input);
        cbalance.innerHTML = closing_balance + " .00 $" ;
        income.innerHTML = closing_balance + " .00 $";
        document.getElementById("input").value;
        document.createElement("h2");

    }



    else if(input<0)
    {
    
     cbalance = parseInt(cbalance.innerHTML);
      exp_balance = parseInt(expense.innerHTML)
     total_amount = cbalance + parseInt(input);
     document.getElementById("expense").innerHTML = (exp_balance - input)+ " .00 $";
     document.getElementById("cbalance").innerHTML = total_amount + " .00 $"
    }

    document.getElementById("input").value = '';
    document.getElementById("descrip").value = '';

    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}
