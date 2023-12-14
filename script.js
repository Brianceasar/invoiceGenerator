function addItemField() {
    const itemizedList = document.getElementById('itemizedListSection');
    const newItemRow = document.createElement('div');
    newItemRow.classList.add('item-row');
    newItemRow.innerHTML = `
      <label for="itemDescription">Item Description:</label>
      <input type="text" class="item-description" name="itemDescription[]" required>
  
      <label for="itemCost">Item Cost:</label>
      <input type="text" class="item-cost" name="itemCost[]" required>
    `;
    itemizedList.appendChild(newItemRow);
  }