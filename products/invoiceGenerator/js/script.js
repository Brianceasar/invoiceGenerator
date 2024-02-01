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

//adds a row in the product table
  $("#btn-add-row").click(function(){
    var row="<tr> <td><input type='text' required name='pname[]' class='form-control'></td> <td><input type='text' required name='price[]' class='form-control price'></td> <td><input type='text' required name='qty[]' class='form-control qty'></td> <td><input type='text' required name='total[]' class='form-control total'></td> <td><input type='button' value='x' class='btn btn-danger btn-sm btn-row-remove'> </td> </tr>";
    $("#product_tbody").append(row);
  });

//removes a row in the product table
  $("body").on("click",".btn-row-remove",function(){
    if(confirm("Are You Sure?")){
      $(this).closest("tr").remove();
      grand_total();
    }
  });

  //Calculates price and quantity
  $("body").on("keyup",".price",function(){
    var price=Number($(this).val());
    var qty=Number($(this).closest("tr").find(".qty").val());
    $(this).closest("tr").find(".total").val(price*qty);
    grand_total();
  });
  
  $("body").on("keyup",".qty",function(){
    var qty=Number($(this).val());
    var price=Number($(this).closest("tr").find(".price").val());
    $(this).closest("tr").find(".total").val(price*qty);
    grand_total();
  });      

  function grand_total(){
    var tot=0;
    $(".total").each(function(){
      tot+=Number($(this).val());
    });
    $("#grand_total").val(tot);
  };


  // $(document).ready(function(){
  //   $("#date").datepicker({
  //     dateFormat:"dd-MM-yyyy"
  //   });
  // });