var locations=["Ottawa","Toronto","Vancouver","Montreal"];

function mapRedirect(id){
   for (var i=0;i<locations.length;i++){
       if (id==locations[i]){
           var locNumber = i;
       }
   }
   switch (locNumber){
       case (0):
           window.location.href='https://goo.gl/maps/aYWK89gNmzQMsZe3A'
           break;
       
       case (1):
           window.location.href='https://goo.gl/maps/wnxjmYDpN3d8ggrY8'
           break;
       
      case (2):
          window.location.href='https://goo.gl/maps/Nek9gW7NTT4A5uBr6'
          break;
      case (3):
          window.location.href='https://goo.gl/maps/yQZKbGs2iVH6tyX9A'
          break;
   }
}