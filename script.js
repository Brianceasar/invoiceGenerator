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