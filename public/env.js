console.log("Hello World");

$(document).ready(function(){
    console.log("Document Ready");
    $('#calculateBtn').click(function(){
        var number1 = $('#num_1').val();
        var number2 = $('#num_2').val();
        var numbers = {
            num1:number1,
            num2:number2
        }
        $.get("/adder",numbers ,function(data){
            console.log('Data has returned:'+ data);
            $('#result').val(data);
        });
    })
})