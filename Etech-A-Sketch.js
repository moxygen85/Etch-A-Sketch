var container = []
var box = []
var i,j,r,g,b;
var filter = [];
var red, blue, green;
var gridSelection = 16

for(i=0;i<16;i++){
    for(j=0;j<16;j++){
    container[i] = document.querySelector(`#container-${i}`); 
    container[i].addEventListener ("mouseover", turnBlack, false);  
    box[j+(i*16)] = document.createElement('div');
    box[j+(i*16)].setAttribute ("id",`box-${[j+(i*16)]}`);
    box[j+(i*16)].setAttribute ("class",`squares`); 
    box[j+(i*16)].style.flex = 1;
    box[j+(i*16)].style.width = "40px";
    box[j+(i*16)].style.height = "40px";
    box[j+(i*16)].style.borderWidth = "0.5px";
    box[j+(i*16)].style.borderStyle ="dotted";
    container[i].appendChild(box[j+(i*16)]);
    }
 
}

 

function turnBlack(e) {
    if (e.target !==e.currentTarget) {
        var globalnum = /[0-9]+/g
        var newred, newblue,newgreen,bgcolornum
        var mousedOverItem = e.target;
        const mouseCS = window.getComputedStyle(mousedOverItem);
        
        if (mousedOverItem.style.backgroundColor ==""){
             r = Math.floor(Math.random() * 255);
             g = Math.floor(Math.random() * 255);
             b = Math.floor(Math.random() * 255);
             mousedOverItem.style.backgroundColor ='rgb(' + [r,g,b].join(',') + ')'; 
             console.log(mouseCS.backgroundColor)  

           
             bgcolornum = mouseCS.backgroundColor.match(globalnum)
             red = Math.round(parseInt(bgcolornum[0]))
             green = Math.round(parseInt(bgcolornum[1]))
             blue = Math.round(parseInt(bgcolornum[2]))
         } 
        else if( mousedOverItem.style.backgroundColor !=="rgb(0,0,0)"){         
            bgcolornum = mouseCS.backgroundColor.match(globalnum)
            red = Math.round(parseInt(bgcolornum[0]))
            green = Math.round(parseInt(bgcolornum[1]))
            blue = Math.round(parseInt(bgcolornum[2]))
           

            red*=.68
            green*=.68
            blue*=.68
            newred = Math.round(red)
            newgreen = Math.round(green)
            newblue = Math.round(blue)
            
          console.log(newred+ " "+newgreen+ " "+newblue)
          mousedOverItem.style.backgroundColor ='rgb(' + [newred,newgreen,newblue].join(',') + ')';

          red = Math.round(parseInt(bgcolornum[0]))
          green = Math.round(parseInt(bgcolornum[1]))
          blue = Math.round(parseInt(bgcolornum[2]))
        }
    }
    e.stopPropagation();
}

    
resetButton.addEventListener ('click',function(){   
    for (i=0;i<gridSelection;i++){
       for(j=0;j<gridSelection;j++){
            container[i].removeChild(box[j+(i*gridSelection)])
            
        }
            document.getElementById(`container-${[i]}`).remove();             
    }
   
    do{        
        gridSelection = prompt("Please Enter the grid size length");
    }while (isNaN(gridSelection) == true)

    for (i=0;i < gridSelection; i++){
      container[i] = document.createElement('div');
      container[i].setAttribute ("id",`container-${[i]}`)
      container[i].style.display = "flex";
      container[i].addEventListener ("mouseover", turnBlack, false); 
      document.body.appendChild(container[i]);
        for (j=0;j< gridSelection;j++){           
           box[j+(i*gridSelection)] = document.createElement('div');
           box[j+(i*gridSelection)].setAttribute ("id",`box-${[j+(i*gridSelection)]}`);
           box[j+(i*gridSelection)].setAttribute ("class",`squares`); 
           box[j+(i*gridSelection)].style.flex = 1;  
           box[j+(i*gridSelection)].style.width = "40px"
           box[j+(i*gridSelection)].style.height = "40px"       
           box[j+(i*gridSelection)].style.borderWidth = "0.5px";
           box[j+(i*gridSelection)].style.borderStyle ="dotted";
           container[i].appendChild(box[j+(i*gridSelection)]);
          }
    }
})   
    




