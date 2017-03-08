var Handlebars = require("handlebars");
var textbox_block = require("./blocks/textbox_block.js")

module.exports = {

  generate:function(block_data){

    var blockHTML = "";
    switch (block_data.input.type) {
      case 'textbox':

        blockHTML = textbox_block.generate(block_data);
        console.log(blockHTML);

        break;
      case 'textline':

        blockHTML = textbox_block.generate(block_data);

        break;
      default:
    }

    return blockHTML;

  },
  remove:function(){


  },
  edit:function(){



  }

}
