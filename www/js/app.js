var block = require("./block.js");
var Handlebars = require("handlebars");
var interaction = require("./interaction.js");
var input_options = [

  "Slider",
  "Text Box",
  "Text Line",
  "Multichoice"


];
module.exports = {

  init:function(){

    generateExistingBlocks();


  },
  addBlock:function(){



  },
  removeBlock:function(){


    
  }



}


function generateExistingBlocks(){

  var currentBlocks = state.getFromStateWithKey("blocks");

  Handlebars.registerHelper("generateBlock", function(block_data) {

      return block.generate(block_data);

  });

  var source = "<div class='blocks_container'>"+

                '<ul class="blocks_list">'+
                '{{#each .}}'+
                  '<li class="blocks_item">{{{generateBlock .}}}</li>'+
                '{{/each}}'+
                '</ul>'+

               "</div><button class='add_block'>Add Block</button>";

  var template = Handlebars.compile(source);

  var result = template(currentBlocks);

  $("#app_container").html(result);

  interaction.watchApp();

}
