document.addEventListener("DOMContentLoaded", function() {
    const Form = document.getElementById("Form");
    const expenseList = document.getElementById("expenseList");
    const expenseTitleInput = document.getElementById("expenseTitle");
    const expenseAmountInput = document.getElementById("expenseAmount");
    const totalElement = document.createElement("div");
  
    let expenses = [];
  
    Form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const title = expenseTitleInput.value;
      const amount = parseFloat(expenseAmountInput.value);
  
      if (title && amount) {
        const expense = {
          title,
          amount
        };
  
        expenses.push(expense);
  
        expenseTitleInput.value = "";
        expenseAmountInput.value = "";
  
        renderExpenses();
        calculateTotal();
      }
    });
  
    function renderExpenses() {
      expenseList.innerHTML = "";
  
      expenses.forEach(function(expense) {
        const li = document.createElement("li");
        li.innerHTML = `${expense.title}: Rs ${expense.amount.toFixed(2)}`;
  
        expenseList.appendChild(li);
      });
    }
  
    function calculateTotal() {
      const total = expenses.reduce(function(acc, expense) {
        return acc + expense.amount;
      }, 0);
  
      totalElement.textContent = `Total: Rs ${total.toFixed(2)}`;
      expenseList.appendChild(totalElement);
    }
  });
  