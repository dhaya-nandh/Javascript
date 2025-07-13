const downloadbtn= document.querySelector(".download-btn");
const fileLink="https://ncert.nic.in/textbook/pdf/lecs1dd.zip";
const initTimer=()=>{
    let timer=downloadbtn.dataset.timer;
    downloadbtn.classList.add("timer");
    downloadbtn.innerHTML=`Your file is download in <b>${timer}</b> seconds `;
const initCounter=setInterval(()=>{
    if(timer>0)
    {
        timer--;
        return downloadbtn.innerHTML=`Your file is download in <b>${timer}</b> seconds `;
        
    }
    clearInterval(initCounter);
    downloadbtn.innerHTML="Your file is downloding..."
    location.href=fileLink;
setTimeout(()=>{
    downloadbtn.classList.replace("timer","disable-timer");
    downloadbtn.innerHTML=` <span class="icon"><i class="fa-solid fa-download" style="color: #fff;"></i></span>
   <span class="text">Download again</span>`
},3000)
},1000)
}
downloadbtn.addEventListener("click",initTimer);