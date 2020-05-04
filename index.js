
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
recognition.interimResults=true;

var p=document.createElement('p')
var sometext=document.querySelector(".sometext")
sometext.appendChild(p)

var tts=window.speechSynthesis;
var tospeak;
recognition.addEventListener("result",function(e)
{
     
    const transcript=Array.from(e.results).map(result=> result[0]).map (result=>result.transcript).join('')
    p.textContent=transcript;
    if(e.results[0].isFinal)
    {
        var br=document.createElement('br')
        p=document.createElement('p')
        sometext.appendChild(br)
        sometext.appendChild(p)
    }
    if(transcript.includes('who are you'))
    {
        if(e.results[0].isFinal){
        p.textContent=("I am Mr Moiz Assistant")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
        
        
    
    }

    if(transcript.includes('hello'))
    {
        if(e.results[0].isFinal){
        p.textContent=("Hello how are You")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
        
        
    
    }
    if(transcript.includes('I am doing good'))
    {
        if(e.results[0].isFinal){
        p.textContent=("thats great")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
        
        
    
    }
    if(transcript.includes('ok shut up'))
    {
        if(e.results[0].isFinal){
        p.textContent=("i think you gone mad")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
        
        
    
    }



   

    if(transcript.includes('who is your boss'))
    {
        if(e.results[0].isFinal){
        p.textContent=("Mr Moiz our CEO")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
        
        
    
    }
    if(transcript.includes('how you doing'))
    {
        if(e.results[0].isFinal){
        p.textContent=("Doing Good what about You")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
    }
    if(transcript.includes('would you please tell me the time'))
    {
        if(e.results[0].isFinal){
        var d=new Date(); 
        p.textContent=(d.getHours()+":"+d.getMinutes())
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
    }
    if(transcript.includes('would you please tell me the date'))
    {
        if(e.results[0].isFinal){
        var d=new Date(); 
        
        p.textContent=(d.getDate())
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
    }
    if(transcript.includes('sorry'))
    {
        if(e.results[0].isFinal){
        var d=new Date(); 
        
        p.textContent=("no problem")
        tospeak=new SpeechSynthesisUtterance(p.textContent)
        tts.speak(tospeak);
        }
    
    }

    // else{
    //     if(e.results[0].isFinal){
    //     tospeak=new SpeechSynthesisUtterance("i dont know")
    //     tts.speak(tospeak);
    //     }
    // }
   
})
recognition.addEventListener("end",recognition.start)
{
   
}

var btn=document.getElementById("btn")
btn.addEventListener("click",function(e)
{
    recognition.start();
})


