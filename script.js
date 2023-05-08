const textarea = document.querySelector("textarea");
const button =  document.querySelector("button");
let spk = true;

function goF()
{

  
const tt = textarea.value;
   const synth = window.speechSynthesis;

  

if(!synth.speaking && tt)
{
  
  const utterance = new SpeechSynthesisUtterance(tt);
  synth.speak(utterance);
}
  
if(tt.length>20){
  if(synth.speaking && spk)
  {
    button.innerText="pause";
    synth.resume(); 
    spk=false;
  }
  else
  {
    button.innerText="resume";
    synth.pause();
    spk = true;
  }
  }

  else
{
  spk = false;
    button.innerText = "Speaking";
}



setInterval(() => {
    if (!synth.speaking && !spk) {
      spk = true;
      button.innerText = "Convert to Speech";
    }
  });
  

  
}



button.onclick = goF;