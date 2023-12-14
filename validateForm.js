document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('invoiceForm');
    form.addEventListener('submit', function (event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  });
  
  function validateForm() {
    let isValid = true;
  
    // Validate Client Name
    const clientName = document.getElementById('clientName');
    if (!clientName.value.trim()) {
      isValid = false;
      alert('Client Name is required.');
    }
  
    // Validate Itemized List
    const itemDescriptions = document.querySelectorAll('.item-description');
    const itemCosts = document.querySelectorAll('.item-cost');
  
    for (let i = 0; i < itemDescriptions.length; i++) {
      if (!itemDescriptions[i].value.trim() || isNaN(parseFloat(itemCosts[i].value))) {
        isValid = false;
        alert('Itemized List: All fields are required and Item Cost must be a valid number.');
        break;
      }
    }
  
    // Validate Totals
    // const subtotal = document.getElementById('subtotal');
    // const tax = document.getElementById('tax');
    // const grandTotal = document.getElementById('grandTotal');
  
    // if (!subtotal.value.trim() || isNaN(parseFloat(subtotal.value)) || !tax.value.trim() || isNaN(parseFloat(tax.value)) || !grandTotal.value.trim() || isNaN(parseFloat(grandTotal.value))) {
    //   isValid = false;
    //   alert('Totals: All fields are required and must be valid numbers.');
    // }
  
    // Validate Payment Information
    // const dueDate = document.getElementById('dueDate');
    // if (!dueDate.value.trim()) {
    //   isValid = false;
    //   alert('Due Date is required.');
    // }
  
    // Validate Additional Notes
    // const additionalNotes = document.getElementById('additionalNotes');
    // if (!additionalNotes.value.trim()) {
    //   isValid = false;
    //   alert('Additional Notes are required.');
    // }
  
    return isValid;
  }
  