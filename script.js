function addClientField() {
    // Create input fields dynamically
    const clientInfoSection = document.getElementById('clientInfoSection');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Client Name';
    inputField.required = 'Client Name';

    // Append the input field to the client info section
    clientInfoSection.appendChild(inputField);
  }

  function addItemField() {
    const itemizedListSection = document.getElementById('itemizedListSection');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Item Description';

    // Append the input field to the itemized list section
    itemizedListSection.appendChild(inputField);
  }

  function addTotalField() {
    const totalsSection = document.getElementById('totalsSection');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Subtotal';

    // Append the input field to the totals section
    totalsSection.appendChild(inputField);
  }

  function addPaymentField() {
    const paymentInfoSection = document.getElementById('paymentInfoSection');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Payment Method';

    // Append the input field to the payment info section
    paymentInfoSection.appendChild(inputField);
  }

  function addNoteField() {
    const additionalNotesSection = document.getElementById('additionalNotesSection');
    const inputField = document.createElement('textarea');
    inputField.placeholder = 'Add your note here';

    // Append the input field to the additional notes section
    additionalNotesSection.appendChild(inputField);
  }

  // Function to calculate subtotal
  function calculateSubtotal() {
    const itemizedListSection = document.getElementById('itemizedListSection');
    const itemFields = itemizedListSection.querySelectorAll('input[type="text"]');
    
    let subtotal = 0;

    // Iterate through each item field and calculate subtotal
    itemFields.forEach((itemField) => {
      const itemCost = parseFloat(itemField.value) || 0;
      subtotal += itemCost;
    });

    return subtotal;
  }

  // Function to calculate total with tax
  function calculateTotal() {
    const subtotal = calculateSubtotal();
    const taxRate = 0.05; 
    const tax = subtotal * taxRate;
    const grandTotal = subtotal + tax;

    return { subtotal, tax, grandTotal };
  }

  // Function to update totals on the UI
  function updateTotals() {
    const totalsSection = document.getElementById('totalsSection');
    const { subtotal, tax, grandTotal } = calculateTotal();

    // Update or create elements to display totals
    totalsSection.innerHTML = `
      <p>Subtotal: Tsh${subtotal.toFixed(2)}</p>
      <p>Tax (5%): Tsh${tax.toFixed(2)}</p>
      <p>Grand Total: Tsh${grandTotal.toFixed(2)}</p>
    `;
  }

  // Function to validate required fields
  function validateRequiredFields() {
    const requiredFields = document.querySelectorAll('[data-required]');
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        alert(`Please fill out the ${field.dataset.required} field.`);
      }
    });

    return isValid;
  }

  // Function to validate numeric input fields
  function validateNumericFields() {
    const numericFields = document.querySelectorAll('[data-numeric]');
    let isValid = true;

    numericFields.forEach((field) => {
      const fieldValue = field.value.trim();
      if (fieldValue && !/^\d+(\.\d{1,2})?$/.test(fieldValue)) {
        isValid = false;
        alert(`Please enter a valid number for ${field.dataset.numeric}.`);
      }
    });

    return isValid;
  }

  // Function to validate the entire form
  function validateForm() {
    return validateRequiredFields() && validateNumericFields();
  }

  // Function to submit the form
  function submitForm() {
    if (validateForm()) {
      // If the form is valid, you can proceed with submitting data to the backend
      // You might want to use AJAX or form submission, depending on your setup
      // For now, let's just display a success message
      alert('Invoice submitted successfully!');
    }
  }