// CIRCLE CATEGORY
Blockly.Blocks['draw_circle'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("Draw Circle");
    this.appendValueInput("radius")
    .setCheck(null)
    .appendField("Radius");
    this.appendValueInput("x")
    .setCheck(null)
    .appendField("X axis");
    this.appendValueInput("y")
    .setCheck(null)
    .appendField("Y axis");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
}
};
    
//Generated stub
    
Blockly.JavaScript['draw_circle'] = function(block) {
    var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

// TRIANGLE CATEGORY
Blockly.Blocks['triangle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Triangle");
        this.appendValueInput("Base")
            .setCheck(null)
            .appendField("Base");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("side1");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("side2");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

      
Blockly.JavaScript['triangle'] = function(block) {
    var value_base = Blockly.JavaScript.valueToCode(block, 'Base', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

// STATEMNENT CATEGORY
Blockly.Blocks['statement'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Some task")
          .appendField(new Blockly.FieldTextInput("20"), "NAME")
          .appendField(new Blockly.FieldAngle(30), "NAME")
          .appendField(new Blockly.FieldDropdown([["first","first"], ["first","first"], ["first","OPTIONNAME"]]), "NAME");
      this.appendValueInput("Base")
          .setCheck(null)
          .appendField("if")
          .appendField(new Blockly.FieldVariable("x"), "var")
          .appendField("then")
          .appendField(new Blockly.FieldVariable("x"), "var");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("else")
          .appendField(new Blockly.FieldVariable("return"), "NAME");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  Blockly.JavaScript['statement'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var angle_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var variable_var = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var variable_var = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var value_base = Blockly.JavaScript.valueToCode(block, 'Base', Blockly.JavaScript.ORDER_ATOMIC);
    var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


// TYPE CATEGORY
Blockly.Blocks['type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(["String", "Array"])
          .appendField("length of");
      this.setOutput(true, "Number");
      this.setColour(75);
   this.setTooltip("");
   this.setHelpUrl("");
}
}

Blockly.JavaScript['type'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};



  


