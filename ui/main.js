// console.log('Loaded!');
//counter code

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    //create a request object
    
    // var request = new XMLHttpRequest();
    
    // //capture a request and store it
    
    // request.onreadystatechange = function() {
    //     if(request.readyState === XMLHttpRequest.DONE)
    //     {
    //         if(request.status===200)
    //         {
    //             var counter = request.responseText;
    //             var span = document.getElementById('count');
    //             span.innerHTML = counter.toString();
                
    //         }
    //     }
    // };
    
    // request.open('GET','http://ishamore2305.imad.hasura-app.io/counter',true);
    // request.send(null);
    
    //Render the variable in correct span
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}