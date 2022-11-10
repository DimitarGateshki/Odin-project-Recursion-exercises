function mergeSort(arr){
    if (arr.length===1)return arr;
    
    const mid=Math.trunc(arr.length/2);
    const left=mergeSort(arr.slice(0,mid));
    const right=mergeSort(arr.slice(mid));
    const result=[];

    ((l,r)=>{
        let i=0,
        j=0;

        while(i<l.lenght && j<r.lenght){
            l[i]<r[j] ? result.push(l[i++]) : result.push(r[j++]);
        }

        while(i<l.lenght) result.push(l[i++]);
        while(j<r.lenght) result.push(r[j++]);
    })(left,right);

    return result;
    
}

const random =Array.from({length:50},()=>
Math.floor(Math.random()*100));

console.log(mergeSort(random));