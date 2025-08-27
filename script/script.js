

// usecase function 

function getElement(id){
  const element = document.getElementById(id);
  return element;
}

///////


// function 1 hert counter

const hertBtn = document.getElementsByClassName("fa-heart");

for(let hert of hertBtn){
  hert.addEventListener('click' , function(){

    const hertCounter = getElement("hert-counter");

    hertCounter.innerText++

  })
}


// function 2 call button 

const callBtn = document.getElementsByClassName("call-btn");

for(const callButton of callBtn){
  callButton.addEventListener('click' , function(){
    
    const cardName = callButton.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
    const cardId = callButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    const coin = getElement("coin").innerText;

    let removeCoin = Number(coin) - 20;

    if(removeCoin < 0){
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
      return;
    }

    getElement("coin").innerText = removeCoin
    
    alert(`📞 Calling ${cardName} Service ${cardId}...`)


    /////////////////// history section /////////

    
 const cardMainName = callButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

const data = new Date().toLocaleTimeString();

const container = document.getElementById("history-main-container");

const div = document.createElement("div");
div.className = "bg-[#f5fff6] flex justify-between items-center h-[86px] mt-[16px] rounded-[8px] p-[16px]";
div.innerHTML = `
  <div>
    <h1>${cardMainName}</h1>
    <h1 class="text-gray-500">999</h1>
  </div>
  <h1>${data}</h1>
`;

container.appendChild(div);
  })
}

document.getElementById("clear-history").addEventListener('click' , function(){
  document.getElementById("history-main-container").innerText = '';
})


// copy clipbord section 

// const text = "124434";

//   document.getElementById("copyBtn").addEventListener("click", () => {
//     navigator.clipboard.writeText(text);
//   });

  const copyBtn = document.getElementsByClassName("copy-btn");

  for(const copyButton of  copyBtn){

    copyButton.addEventListener('click' , function(){

       const cardId = copyButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

       alert(`নাম্বার কপি হয়েছে: ${cardId}`)
       
       navigator.clipboard.writeText(cardId);

       const copyCounter = getElement("copy-counter");
       copyCounter.innerText++
    })
  }