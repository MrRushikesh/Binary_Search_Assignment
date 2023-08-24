
document.getElementById('submitBtn').addEventListener("click",function(){

    let isValid = true;

   
    let fname = document.getElementById('fname').value;
    let mname = document.getElementById('mname').value;
    let lname = document.getElementById('lname').value;

    let fnameError = document.getElementById('fnameError');
    let mnameError = document.getElementById('mnameError');
    let lnameError = document.getElementById('lnameError');


    if(fname.trim() == ''){
        fnameError.innerHTML = `This is required.`
        fnameError.classList.add('error');
        isValid =false;
    }else{
        fnameError.innerHTML = `Successfully inserted.`;
        fnameError.classList.add('success');
 
    }

    if(mname.trim() == ''){
        mnameError.innerHTML = `This is required.`
        mnameError.classList.add('error');
        isValid = false;
    }else{
        mnameError.innerHTML = `Successfully inserted.`;
        mnameError.classList.add('success');

       
    }

    if(lname.trim() == ''){
        lnameError.innerHTML = `This is required.`;
        lnameError.classList.add('error');
        isValid = false;
    }else{
        lnameError.innerHTML = `Successfully inserted.`;
        lnameError.classList.add('success');
   
    }


    if(!(isValid)){
        alert(`Error...Enter Your Details First`)
    }else{
        
        alert(`Hello ${fname} ${mname} ${lname}.`)
    }
    
})





// Practice Code -: 


// document.getElementById('userInfoForm').addEventListener("click",function(){
//     let isValid = true;

//     let firstName = document.getElementById('fname').value;
//     let middleName = document.getElementById('mname').value;
//     let lastName = document.getElementById('lname').value;


//     let fnameError = document.getElementById('fnameError');
//     let mnameError = document.getElementById('snameError');
//     let lnameError = document.getElementById('lnameError');


//     fnameError.textContent = '';
//     mnameError.textContent = '';
//     lnameError.textContent = '';


//     if(firstName.trim() ===''){
//         fnameError.textContent = "This is Required";
//         isValid = false;
//     }

    
//     if(middleName.trim() ===''){
//         mnameError.textContent = "This is Required";
//         isValid = false;
//     }

    
//     if(lastName.trim() ===''){
//         lnameError.textContent = "This is Required";
//         isValid = false;
//     }

                
//     if(!(isValid)){
//         event.preventDefault();
//     }else{
//         alert(`Hello ${firstName} ${middleName} ${lastName}`);
//     }

    
// })
