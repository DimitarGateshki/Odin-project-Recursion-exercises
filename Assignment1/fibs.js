function fibs(n){
    let output=[];
    let pivot1=0;
    let pivot2=1;

    for (let i = 0; i < n; i++) {
        if(i<1){
        output.push(pivot1);
        output.push(pivot2);     
    } else if(i>=2){
        pivot1=output[i-1];
        pivot2=output[i-2];
        output.push(pivot1+pivot2);
    }
    }

    console.log(output);
}

fibs(8);


function fibRecursion(n, a=[0,1]){
    if(a.length>=n) return a;
    return fibRecursion(n,[...a,a[a.length-2]+a[a.length-1]]);
}

console.log(fibRecursion(8));