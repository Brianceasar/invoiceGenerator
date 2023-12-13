function addClientField() {
    // Create input fields dynamically
    const clientInfoSection = document.getElementById('clientInfoSection');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Client Name';

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
    const taxRate = 0.1; // Adjust the tax rate as needed
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
      <p>Subtotal: $${subtotal.toFixed(2)}</p>
      <p>Tax (10%): $${tax.toFixed(2)}</p>
      <p>Grand Total: $${grandTotal.toFixed(2)}</p>
    `;
  }