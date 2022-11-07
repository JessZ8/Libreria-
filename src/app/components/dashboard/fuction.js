$(document).ready(function(){
    $("#myform").submit(function(){
        var search = $("#books").val();
        if(search ==''){
            alert("please enter something in the field first");
        }else{
            var url='';
            var img = '';
            var title ='';
            var author ='';

            $.get('https://www.googleapis.com/books/v1/volumes?q='+ search,function(response){
                console.log(response);
            })
        };
    })
    return false;
})

