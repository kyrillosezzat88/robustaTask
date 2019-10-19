// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!

  /*********************************Variables from dom**************************/
  // Get Value of Height input
  let height = document.getElementById('inputHeight').value,
  //get value of width input
  width = document.getElementById('inputWidth').value,
  //Select Table 
  table = document.getElementById('pixelCanvas');

  /**************************Height Calculation******************************/
    //Get Number of Rows to Start Loop From it and not re
    let count  = table.children.length + 1; // plus 1 bec there is no row yet in table and start loop from 1 not zero to make number of rows equal value in Height input
    for(let i = count; i <= height; i++){ // why i equal number of tr not 1 --> to make sure loop will start from tr counts to avoide repeat row when click on submit again 
      //Create New Element in dom tr
      let  tr = document.createElement('tr'),
      //create new element in dom td
      td = document.createElement('td');
      //make table append tr
      table.appendChild(tr);
      //make tr append td
      tr.appendChild(td);
    }

/**********************************Clear Height Calculation ************************/
    //check if input value of heigh less than num of rows (num of created rows before)
    if(table.children.length > height){
      //then create loop to remove the incresed rows depend value of height
      for(let i = table.children.length ; i > height; i--){
        table.deleteRow(i - 1);
      }
    }

    /******************************width Calculation ************************/
  // Select Tr after Created before in Height 
let tr = table.getElementsByTagName('tr');
  for(let i = 0 ; i < tr.length; i++ ){
    let counter = tr[i].childElementCount + 1;
    for(let j = counter; j <= width; j++ ){
      tr[i].insertCell( j - 1);
    }
  }
  /*********************************Clear Width Calculation**************************/
    //define rows first
    let cell = table.getElementsByTagName('tr');
    //First loop to select rows
    for(let i=0; i < cell.length; i++){
      //calculate number of td inside each row
      let count = cell[i].childElementCount;
      //second loop to remove the incresed td depend on value of width
      for(let j = count ; j > width; j--){
        cell[i].deleteCell(j - 1);
      }
    }

    /*******************************Color Cell When click on it********************************** */
    //Select Cell 
    let td = document.getElementsByTagName('td'),
    //Select colorPicker
    color = document.getElementById('colorPicker');
    //loop for all cells
    for(let i=0; i < td.length; i++){
      //add Click Event to every Cell
      td[i].addEventListener('click' , function(){
        //Color Cell When click on it (take color from colorPicker)
        this.style.backgroundColor = `${color.value}`;
      });
    }
}

/********************** Run makeGrid Function when click on submit**************/
//Select Submit input 
let submit = document.querySelector("input[type='submit']");
//add click event on it
submit.addEventListener('click' , function(e){
  //to Prevent Defult action (Reload page)
  e.preventDefault();
  //Call makeGrid Function
  makeGrid();
});
/****************************************The End :) *****************************/