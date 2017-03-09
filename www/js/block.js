var Handlebars = require("handlebars");
var textbox_block = require("./blocks/textbox_block.js")

module.exports = {

  generate:function(block_data){

    return generateBlock(block_data);

  },
  remove:function(id){

    removeBlock(id);

  },
  edit:function(id){

    editBlock(id);

  }


}

function generateBlock(block_data){

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

  var blockButtons = generateBlockButtons(block_data);

  blockHTML = '<div class="block" data-blockid="'+block_data.id+'">'+

              '<div class="block_buttons_container" data-blockid="'+block_data.id+'">'+blockButtons+'</div>'+
              blockHTML+

              '</div>';

  var editing = "";

  if(block_data.editing){
    editing = "editing";
  }

  return "<div class='block_container "+editing+"' data-blockid='"+block_data.id+"'>"+blockHTML+"</div>";

}

function removeBlock(id){

  app.removeBlock(id);

}

function generateBlockButtons(block_data){

  var blockButtonsHTML = "";

  if(block_data.editing){
    blockButtonsHTML+= "<button class='block_button block_edit_done' data-blockid='"+block_data.id+"'>Done</button>";
    blockButtonsHTML+= "<button class='block_button block_edit_cancle' data-blockid='"+block_data.id+"'>Cancle</button>";
  }else{
    blockButtonsHTML+= "<button class='block_button block_edit' data-blockid='"+block_data.id+"'>Edit</button>";
    blockButtonsHTML+= "<button class='block_button block_move' data-blockid='"+block_data.id+"'>Move</button>";
  }

  return '<div class="block_buttons" data-blockid="'+block_data.id+'">'+blockButtonsHTML+"</div>";

}

function editBlock(id){

  state.setEditModeOnBlockWithID(id, true);
  var block_data = state.getBlockByID(id);
  var editableBlockHTML = generateBlock(block_data);
  $(".block_container[data-blockid='"+id+"']").html(editableBlockHTML);
  $(".block_container[data-blockid='"+id+"']").addClass("editing");

}

function doneEditBlock(id){

  state.setEditModeOnBlockWithID(id, false);
  var block_data = state.getBlockByID(id);
  var BlockHTML = generateBlock(block_data);
  $(".block_container[data-blockid='"+id+"']").html(BlockHTML);
  $(".block_container[data-blockid='"+id+"']").removeClass("editing");


}
