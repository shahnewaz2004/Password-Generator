"use strict";

$(document).ready(function(){  

     $('button').click(function(){

          let password = '';
          let uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          let lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
          let numbers = '1234567890';
          let symbols = '!@#%^&*()_+<>?/|\";:';

          let p_length = $("#p_length");

         $('#u_letters').prop('checked') ? password += uppercaseletters : '';
         $('#l_letters').prop('checked') ? password += lowercaseletters : '';
         $('#number').prop('checked') ? password += numbers : '';
         $('#symbol').prop('checked') ? password += symbols : '';

          if(p_length.val() !== '' && p_length.val() > 0){
               p_length = +p_length.val();
               let pass = "";
               
               for(let c = 0; c < p_length; c++){
                    pass += password.charAt(Math.floor(Math.random() * password.length))
               }

               $('.result input').val(pass)
           }else{
                alert("Please input the password length")
           }
          
          
     })

     $('.result i').click(function(){
         if($('.result input').val() !== ""){
              $(".result input ").select();
              document.execCommand('copy')
              swal("Copied", "", "success");
         }
     })
})

 