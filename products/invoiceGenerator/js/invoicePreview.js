// invoice-preview.js
document.addEventListener('DOMContentLoaded', function () {
    // Get references to form fields
    const clientNameInput = document.getElementById('clientName');
    const itemDescriptionInputs = document.querySelectorAll('.item-description');
    const itemCostInputs = document.querySelectorAll('.item-cost');
    const dueDateInput = document.getElementById('dueDate');
    const paymentMethodInput = document.getElementById('paymentMethod');
    const additionalNotesInput = document.getElementById('additionalNotes');
  
    // Get reference to the preview container
    const previewContainer = document.getElementById('invoicePreview');
  
    // Add event listeners to form fields
    clientNameInput.addEventListener('input', updatePreview);
    itemDescriptionInputs.forEach(input => input.addEventListener('input', updatePreview));
    itemCostInputs.forEach(input => input.addEventListener('input', updatePreview));
    dueDateInput.addEventListener('input', updatePreview);
    paymentMethodInput.addEventListener('input', updatePreview);
    additionalNotesInput.addEventListener('input', updatePreview);
  
    // Function to update the preview
    function updatePreview() {
      // Get values from form fields
      const clientName = clientNameInput.value;
      const itemDescriptions = Array.from(itemDescriptionInputs).map(input => input.value);
      const itemCosts = Array.from(itemCostInputs).map(input => parseFloat(input.value) || 0);
      const dueDate = dueDateInput.value;
      const paymentMethod = paymentMethodInput.value;
      const additionalNotes = additionalNotesInput.value;
  
      // Calculate totals
      const subtotal = itemCosts.reduce((sum, cost) => sum + cost, 0).toFixed(2);
      const tax = (subtotal * 0.1).toFixed(2); // Assuming 10% tax, adjust as needed
      const grandTotal = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  
      // Make an AJAX request to submit_invoice.php
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'submit_invoice.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
      // Prepare the form data
      const formData = new FormData(document.getElementById('invoiceForm'));
  
      // Set up the callback
      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          // Update the preview with the calculated totals
          updatePreviewContent(response);
        } else {
          console.error('Error:', xhr.statusText);
        }
      };
  
      // Send the request
      xhr.send(new URLSearchParams(formData));
    }
  
    // Function to update the preview content
    function updatePreviewContent(data) {
      // Update the preview container with the calculated totals
      previewContainer.innerHTML = `
        <h2>Invoice Preview</h2>
        <p>Client Name: ${clientName}</p>
        <!-- ... (other content) -->
        <p>Subtotal: $${data.subtotal}</p>
        <p>Tax: $${data.tax}</p>
        <p>Grand Total: $${data.grandTotal}</p>
        <!-- ... (other content) -->
      `;
    }
  });
  