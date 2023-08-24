
                
document.getElementById('submitBtn').addEventListener('click',function(){

    let finput = document.getElementById('finput').value;
    let sinput = document.getElementById('sinput').value;
    let foutput = document.getElementById('foutput');
    let soutput = document.getElementById('soutput');
    let result = document.getElementById('result');

    
    let input = finput;
    
    foutput.innerHTML = `${finput}`
   
    
    let output = input.split(',');

    
    const array = output;
    console.log(array);

    let left = 0; 
    let right = array.length-1;

    const user = sinput;

    soutput.innerHTML = `Search Number ${user}.`

     while(left<=right){

        let mid=Math.floor((left+right)/2);
        if(array[mid]==user){
            // document.write(`${user} Found at index ${mid}`);
            // console.log(`${user} Found at index ${mid}`);
            result.innerHTML = `${user} Found at index ${mid}`;
            break;
        }
        else if(array[mid]>user){
            right=mid-1;
        }
        else {
            left=mid+1;
        }

    }
    if(left>right){
        // console.log("Number Not Found");
        result.innerHTML = `Number Not Found`
    }
   

})

