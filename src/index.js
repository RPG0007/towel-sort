
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let tosort = []
    if (Array.isArray(matrix) && matrix.length >0){
     tosort = matrix.reduce((acc, cur, i) =>{
      if (i%2==1 && i!=0){
       acc.push(...cur.sort((a,b)=>b-a))}
       else{
        acc.push(...cur) 
       }
       return acc
     })
     return tosort
    }
    else
    {
        return []
    }
      
 }
