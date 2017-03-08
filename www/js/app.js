var block = require("./block.js");
var Handlebars = require("handlebars");
//var interaction = require("./interaction.js");
var input_options = [

  "Slider",
  "Text Box",
  "Text Line",
  "Multichoice"


];
module.exports = {

  init:function(options){

    generateExistingBlocks(options);


  }



}


function generateExistingBlocks(options){


  console.log(state.getFromStateWithKey("blocks"));

  var currentBlocks = state.getFromStateWithKey("blocks");

  Handlebars.registerHelper("generateBlock", function(block_data) {

      return block.generate(block_data);

  });

  var source = "<div class='blocks_container'>"+

                '<ul class="blocks_list">'+
                '{{#each .}}'+
                  '<li class="blocks">{{{generateBlock .}}}</li>'+
                '{{/each}}'+
                '</ul>'+

               "</div>";

  var template = Handlebars.compile(source);

  var result = template(currentBlocks);

  $("#app_container").html(result);

//  interaction.init();

}
