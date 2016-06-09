<?php require_once('inc/header.php'); 


    // Assign default values for all possible LTI Variables
    $lti_variable_A = "Variable A default";
    $lti_variable_B = "Variable B default";
    // LTI variables can pass numbers, however they will be passed through as strings
    $lti_variable_C = "3100";
    // LTI variables can pass comma separated values, however they will be passed through as strings
    $lti_variable_D = "Speed, velocity, distace";




    // LTI Variables are now attached to $ltivars object, 
    // IMPORTANT: ensure that all possible LTI variables are assinged a default value above 
    $ltivars = $lti->calldata();

    // Check to see if the lti has provided values for the possible variables, 
    // if yes then assign the new value to the variables.
    if(isset($ltivars{'custom_lti_variable_A'})){
        $lti_variable_A = $ltivars{'custom_lti_variable_A'};
    }

    if(isset($ltivars{'custom_lti_variable_B'})){
        $lti_variable_B = $ltivars{'custom_lti_variable_B'};
    }

    if(isset($ltivars{'custom_lti_variable_C'})){
        $lti_variable_C = $ltivars{'custom_lti_variable_C'};
    }

    if(isset($ltivars{'custom_lti_variable_D'})){
        $lti_variable_D = $ltivars{'custom_lti_variable_D'};
    }


?>
</head>
<body>
<script type="text/javascript">
// only use this section for passing LTI vars to the global scope.
// All Javascript coding should be done withing the www/js/ folder, with app.js being your main controller

    $_VARIABLE_A = "<?php echo $lti_variable_A ?>";
    $_VARIABLE_B = "<?php echo $lti_variable_B ?>";
    // Variables that are numbers, can be converted to their proper types at this level 
    $_VARIABLE_C = parseInt("<?php echo $lti_variable_C ?>");
    // Variables that are lists, can be converted to an object of items at this level 
    $_VARIABLE_D = JSON.parse('<?php echo json_encode($lti_variable_D); ?>');

    // check your console to see if the values are printed correctly with their appropriate types 
    console.log("LTI variables: ", $_VARIABLE_A, $_VARIABLE_B, $_VARIABLE_C, $_VARIABLE_D);


</script>
<div class="content">

    <h1>Welcome to the LTI base module</h1>

    <p>This is an LTI boiler plate built on PHP</p>
    <p>You will find that this version now includes the usage of NPM packages, e.g. Browserify, Jquery, Bootstrap ... etc.</p>
    <p>If you need any other external libraries, check to see if it exists on the NPM registry and is being maintained</p>


    
    <dl>
      <dt>LTI Call Data</dt><dd><pre><?php print_r($lti->calldata());?></pre></dd>
    </dl>

</div>
<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
