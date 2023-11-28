const songItems=[{
    songName:'Mere ghar ram aaye hain',FilePath:'1.mp3',coverPath:'ram aaye hain.jpg',duration:"3:54"},
    {songName:'Behti Hawa Sa Tha Woh',FilePath:'2.mp3',coverPath:'behti hawa.jpg',duration:"5:01"},
    {songName:'Ghar More Pardesiya',FilePath:'3.mp3',coverPath:'ghar more pardesiya.jpg',duration:"0:28"},
    {songName:'Give Me Some Sunshine',FilePath:'4.mp3',coverPath:'give me some sunshine.jpg',duration:"4:07"},
    {songName:'Jaane Kahan Se',FilePath:'5.mp3',coverPath:'jane kaha se.jpg',duration:"4:37"},
    {songName:'Raabta',FilePath:'6.mp3',coverPath:'raabta.jpg',duration:"4:03"},
    {songName:'Ram siya ram',FilePath:'7.mp3',coverPath:'ram siya.jpg',duration:"3:50"}
]
let songTitle=document.getElementById("songTitle");   
let songs=Array.from(document.getElementsByClassName("songItem"));
songs.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songItems[i].coverPath;
    element.getElementsByClassName("title")[0].innerText=songItems[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText=songItems[i].duration;


})
let songIndex=1;
let audioElement=new Audio('1.mp3')
const gif=document.getElementById("gif");
const progress=document.getElementById("myProgress")
let playing=document.getElementById("playing");
playing.addEventListener("click",()=>{
    let curr;
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        let c=songIndex;
        curr=document.getElementById(c);
        console.log(curr)
        curr.classList.remove("fa-circle-play");
        curr.classList.add("fa-circle-pause");

        playing.classList.remove("fa-circle-play");
        playing.classList.add("fa-circle-pause");
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        let c=songIndex;
        curr=document.getElementById(c);
        //console.log(curr);
        curr.classList.remove("fa-circle-pause");
        curr.classList.add("fa-circle-play");
        playing.classList.remove("fa-circle-pause");
        playing.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }

})

audioElement.addEventListener("timeupdate",()=>{
    let progressPer=parseInt((audioElement.currentTime/audioElement.duration)*100);
   //console.log(progress)
   progress.value=progressPer;
   
})

progress.addEventListener("change",()=>{
    audioElement.currentTime=progress.value*audioElement.duration/100
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("playButton")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
       
    })

}
Array.from(document.getElementsByClassName("playButton")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        if(audioElement.paused||audioElement.currentTime<=0)
        {
            console.log(e.target);
            makeAllPlay();
            songIndex=parseInt(e.target.id);
            audioElement.src=`${songIndex}.mp3`;
            songTitle.innerText=songItems[songIndex-1].songName;
            gif.style.opacity=1;
            audioElement.play();
            audioElement.currentTime=0;
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            playing.classList.remove("fa-circle-play");
            playing.classList.add("fa-circle-pause"); 

        }
        else{
            audioElement.pause();
            let c=songIndex;
            let curr=document.getElementById(c);
            console.log(curr);
            curr.classList.remove("fa-circle-pause");
            curr.classList.add("fa-circle-play");
            playing.classList.remove("fa-circle-pause");
            playing.classList.add("fa-circle-play"); 
            gif.style.opacity=0;

        }  
    })
})
document.getElementById("prev").addEventListener("click",()=>{
    if(songIndex==1){
        songIndex=1;
    }  
    else{
        songIndex-=1;
    } 
    audioElement.src=`${songIndex}.mp3`;
    songTitle.innerText=songItems[songIndex-1].songName;
    gif.style.opacity=1;
    audioElement.play();
    audioElement.currentTime=0;
  
    let previ=document.getElementById(songIndex);
    console.log(previ)
    let v=songIndex+1;
    let curr=document.getElementById(v);
    
    curr.classList.remove("fa-circle-pause");
    curr.classList.add("fa-circle-play");  

    previ.classList.remove("fa-circle-play");
    previ.classList.add("fa-circle-pause");  


    playing.classList.remove("fa-circle-play");
    playing.classList.add("fa-circle-pause");  
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex==7){
        songIndex=1;
    }    
    else{
        songIndex+=1;
        
    }
    audioElement.src=`${songIndex}.mp3`;
    songTitle.innerText=songItems[songIndex-1].songName;
    gif.style.opacity=1;

    audioElement.play();
    audioElement.currentTime=0;
    let rem =document.getElementById(songIndex);
    let remprev;
    if(songIndex>1){
        const next=songIndex-1;
        remprev=document.getElementById(next);
        //console.log(remprev)
    }
    else{
        remprev=document.getElementById("7");

    }
    remprev.classList.remove("fa-circle-pause");
    remprev.classList.add("fa-circle-play");

    rem.classList.remove("fa-circle-play");
    rem.classList.add("fa-circle-pause");

    playing.classList.remove("fa-circle-play");
    playing.classList.add("fa-circle-pause"); 

    //console.log(rem)
})


