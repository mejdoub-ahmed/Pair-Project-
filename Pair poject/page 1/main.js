

 var arrFields=[ {name :"Olympysky Club" , place:"tunis" , reserved:['2022-10-14', '2022-10-19' ] ,rates:[5,8] } ,  {name: "Lake Club" , place: "tunis"  ,reserved:['2022-10-17', '2022-10-21' ],  rates:[3,7] }  ,
                { name:"Ben Arous club",place:"Ben Arous", reserved:['2022-10-15', '2022-10-16' ] ,rates:[6,9] } , {name: "Fan Foot Club" ,place : "Ben Arous" ,reserved:['2022-10-17', '2022-10-21' ], rates:[3,7]} , 
                {name:"Club Des Princes",place: "Ariana",reserved:['2022-10-14', '2022-10-19' ],rates:[6,2]} ,      {name:"l'Olympico Club",place : "Ben Arous" ,reserved:['2022-10-17', '2022-10-21' ], rates:[5,7]}  ]
 
var users= {name:"ahmed", password:"ahmed" }



var selected_place =""
    $("select.list_of_place").on( "change" ,function(){
        selected_place = $(this).children("option:selected").val();
        console.log(selected_place )
    })


// var selected_date1 = document.getElementById("date_staduim1").value
// var selected_date2 = document.getElementById("date_staduim2").value

   

   $("#button_research").on("click" , function () { 

     if(selected_place ==  "Tunis"  ) {
        location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/Page%20of%20staduim%20Tunis.html"}
      else if (selected_place == "Ariana"){ location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/Page%20of%20staduim%20ariana%20(2).html"}
        
      else if (selected_place == "Ben Arous"){location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/Page%20of%20staduim%20ben%20arous.html"}
      })



            $("#button_accueil").on("click" , function () { 
                location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/site%20web%20staduim.html"})
            
                $("#buttton_reserve").on("click" , function () { 
                    location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/site%20web%20staduim.html"})
            
            
            
                    $("#button_how").on("click" , function () { 
                        location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/site%20web%20staduim.html"})
            
            
                        $("#button_why").on("click" , function () { 
                            location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/site%20web%20staduim.html"})
            
                            $("#button_contact").on("click" , function () { 
                                location.href="  https://jetprints.biz/wp/wp-content/uploads/2016/08/Loading-1-300x129.png"})
    
                          
                                $("#input_staduim1").on("change",function(){ var note=document.getElementById("input_staduim1").value

                                    $("#note1").html("note:"+note+"/10")
                                 console.log(note) 
                                })
                 
                                $("#input_staduim2").on("change",function(){ var note=document.getElementById("input_staduim2").value
                                $("#note2").html("Note:"+note+"/10")
                             console.log(note) 
                            })




                                var name =""
                             $("#list_of_user").on("change",function(){
                                 name=$("#list_of_user").val()
                                       console.log(name)
                            })

                            var password =""
                            $("#list_of_password").on("change",function(){
                                password=$("#list_of_password").val()
                                      console.log(password)
                           })

                       
                                $("#button_log_in").on("click",function(){
                                        
                                    if( name === users.name && password===users.password){
                                        location.href="file:///C:/Users/ahmed/OneDrive/Bureau/Pair%20poject/page%201/site%20web%20staduim.html"}
                                            else{ alert("access denied")}
                                    })


                                $("#button_reserve1").on("click",function(){
                                        var test=true;                   
                                        var selected_date1 = document.getElementById("date_staduim1").value
                                    for ( var i=0; i<arrFields[0].reserved.length ; i++  ){
                                        if(arrFields[0].reserved[i]=== selected_date1   ) {
                                            test=false
                                            alert("it's alerdy reserved  " )
                                        }}
                                        if(test){
                                            arrFields[0].reserved.push(selected_date1)
                                        alert ("successful operation")}

                                })




                                $("#button_reserve2").on("click",function(){
                                    var test=true;                   
                                    var selected_date2 = document.getElementById("date_staduim2").value
                                for ( var i=0; i<arrFields[1].reserved.length ; i++  ){
                                    if(arrFields[1].reserved[i]=== selected_date2   ) {
                                        test=false
                                        alert("it's alerdy reserved " )
                                    }}
                                    if(test){
                                        arrFields[1].reserved.push(selected_date2)
                                    alert ("successful operation")}

                            })