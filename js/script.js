//UI

const getclickbtn = document.querySelector('.click-btns');
const getprogressbar = document.querySelector('.progress-bar');
const seturl = "https://youtube.com";


getclickbtn.addEventListener('click',function(){
        // console.log("I am still working");

        let setwidth = 0;

       let clearitv =  setInterval(progressinc,200);


        function progressinc(){

            if(setwidth >= 100){

                clearInterval(clearitv);

                //redirect

                window.location.href = seturl;

            }else{

                setwidth++;

                getprogressbar.style.width = `${setwidth}%`;
                getprogressbar.setAttribute("data-inc", `${setwidth}%`);
                getclickbtn.setAttribute('disabled',true);
                
            }

            // console.log(setwidth);

        }

        // progressinc();


})

















