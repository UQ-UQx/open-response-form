module.exports = {

  generate:function(block_data){

    return generateBlock(block_data);
  }

}

function generateBlock(block_data){

  return "TextBlock for"+block_data.name;


}
