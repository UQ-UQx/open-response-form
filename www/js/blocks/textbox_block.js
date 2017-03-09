module.exports = {

  generate:function(block_data){


    var blockHTML = "";

    if(block_data.editing){

      blockHTML = generateBlockEditView(block_data);

    }else{

      blockHTML = generateBlockInputView(block_data);

    }

    

    return blockHTML;


  }

}

function generateBlockInputView(block_data){

  var blockInputViewHTML = "TextBlock for"+block_data.name+" where editing should be false : "+block_data.editing;




  return blockInputViewHTML;


}

function generateBlockEditView(block_data){

  var blockInputViewHTML = "TextBlock for"+block_data.name+" where editing should be true : "+block_data.editing;



  return blockInputViewHTML;

}
