module.exports = {

  init:function(){

    initWatch();

  },
  watchApp:function(){

    watchApp();

  }



}


function initWatch(){




}

function watchApp(){

  $(".add_block").off("click.add_block");
  $("#app_container").on('click.add_block', 'button.add_block', function() {
    console.log("what!");
  });


}
