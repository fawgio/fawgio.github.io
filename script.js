x = 0;
setInterval(()=>{
   $("#page").css("background-image", "linear-gradient("+(x++)+"deg, rgba(2,0,36,1) 0%, rgba(202,1,128,1) 50%)");
},
            25);