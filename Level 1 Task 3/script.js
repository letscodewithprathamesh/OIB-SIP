var select=document.getElementById('select');
                 var span=document.getElementById('span');

 function myfun(){

    var temp=document.getElementById('temp').value;
           if(select.selectedIndex==0){

              var Cconvert=(temp*9/5)+32;
              span.innerHTML=`=${Cconvert}°Fahrenheit`;

    }
    else if(select.selectedIndex==1){
        var Fconvert=(temp-32)*5/9;
        span.innerHTML=`=${Fconvert}°Celcius`;
    }
}
