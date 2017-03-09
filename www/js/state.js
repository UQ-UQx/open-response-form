var state = {
"created":_.now()
};

module.exports = {
  getDefaultState:function()
  {  // --------- getDefaultState start ---------


    state["blocks"] = [];
    var defaultBlock = {

      "id": "default_block",
      "name": "Default Block",
      "question": "Question <i>html</i>",
      "input": {
        "type":"textbox",
        "height":300,
        "options":{
          "instructions":"put instructions <b>here</b>",
          "feedback":{
            "when":"submitted",
            "success_content":"Well done!",
            "fail_content":"Oh no!"
          }
        },
        "submit_rule":"attempt",
          /**
              attempt -> no need to meet word count
              partial -> reach atleast min word count
              complete -> reach target word count or max word count + - threshold
          **/
        "word_count":{
          "min":10,
          "max":30,
          "threshold":2,
          "target":20
        }
      },
      "editing": false,
      "position": 1

    };

    var defaultBlock_two = {

      "id": "default_block_two",
      "name": "Default Block Two",
      "question": "Question 2 <i>html</i>",
      "input": {
        "type":"textbox",
        "height":300,
        "options":{
          "instructions":"put instructions <b>here</b>",
          "feedback":{
            "when":"submitted",
            "success_content":"Well done!",
            "fail_content":"Oh no!"
          }
        },
        "submit_rule":"attempt",
          /**
              attempt -> no need to meet word count
              partial -> reach atleast min word count
              complete -> reach target word count or max word count + - threshold
          **/
        "word_count":{
          "min":10,
          "max":30,
          "threshold":2,
          "target":20
        }
      },
      "editing": true,
      "position": 1

    };

    state["blocks"].push(defaultBlock);
    state["blocks"].push(defaultBlock_two);

    return state;

  }, // --------- getDefaultState end ---------
  setState:function(args)
  { // --------- setState start ---------


    state = args.state;


  }, // --------- setState start ---------
  getState:function()
  { // --------- getState start ---------

    return state;

  }, // --------- getState start ---------
  getFromStateWithKey:function(key)
  { // --------- getState start ---------

    return state[key];

  }, // --------- getState start ---------

}
