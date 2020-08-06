// for (let i=0 ,j=10 ; i<10, j>0 ; i++ , j--  ){
//     console.log(i,j);
// };


// let run=true;
// var step=0;
// do { 
//     if (step>10){
//         run=!run;
//     }
//     console.log(step++);
// } while(run);
// step=0;
// while(step<10) {
//     step++;
//     console.log(step);
// }

// console.log(step);

// step=step<10; 
// console.log(step);
// switch(step){
//     case true : console.log("kais"); break;
//     case false: console.log("madani"); break;
// }


function tri (tab) {
    var j=tab.length;
    var aux;
    do { 
        permut=false;

            for(let i=0; i<j-1; i++ ) {
                if(tab[i]>tab[i+1]) {
                    aux=tab[i];
                    tab[i]=tab[i+1];
                    tab[i+1]=aux;
                    permut=true;
            }
            
        }
        
        j--;
    } while((j>1) || (permut));
}

let tab=[];
let mat=[[[1,0,5],[2,5,8,7],[3,8,9,6,1]],[[2,7,8,5,8,8],[4,7,8,2,4],[5,3,2,9,6,7]],[[3,8,1,4,6,3],[4,7,8,6],[5,2,4,7],[6,9,8,5]]] ;
let m=0;
for( let i=0; i <mat.length ;i++){
    for(let j=0; j<mat[i].length ; j++){
       for(let f=0; f<mat[i][j].length; f++){
        tab[m]=mat[i][j][f];
       m++;
       }
    }
};
tri(tab);
m=0;
for( let i=0; i <mat.length ;i++){
    for(let j=0; j<mat[i].length ; j++){
       for(let f=0; f<mat[i][j].length; f++){
        mat[i][j][f]=tab[m];
       m++;
       }
    }
};
console.log(mat);

