console.log("Welcome to Angel VibeZ");

//Initialize the variables
let audioElement = new Audio('C:/Users/pc/Downloads/Butter.mp3');
let masterPlay = document.getElementById('masterPlay');
let playbar = document.getElementById('playbar');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [

        {songName: "Butter - BTS",filePath: "C:/Users/pc/Downloads/1.mp3", coverPath: "C:/Users/pc/Downloads/butter.png"},
        {songName: "Radha Rani Lage - Simple Kharel",filePath: "C:/Users/pc/Downloads/2.mp3", coverPath: "C:/Users/pc/Downloads/Radha_Rani.jpg"},
        {songName: "Hare Krishna Rama - Jubin Nautiyal",filePath: "C:/Users/pc/Downloads/3.mp3", coverPath: "C:/Users/pc/Downloads/Hare_Krishna.jpeg"},
        {songName: "Dynamite - BTS",filePath: "C:/Users/pc/Downloads/4.mp3", coverPath: "C:/Users/pc/Downloads/dynamite.webp"},
        {songName: "On & On - Stephen Bishop ",filePath: "C:/Users/pc/Downloads/5.mp3", coverPath: "C:/Users/pc/Downloads/On&On.jpeg"},
        {songName: "Meri Maa - Jubin Nautiyal",filePath: "C:/Users/pc/Downloads/6.mp3", coverPath: "C:/Users/pc/Downloads/Meri_Maa.jpeg"},
        {songName: "Sakhiyaan - Maninder Buttar",filePath: "C:/Users/pc/Downloads/7.mp3", coverPath: "C:/Users/pc/Downloads/Sakhiyaan.jpg"},
        {songName: "Mere Baba - Jubin Nautiyal",filePath: "C:/Users/pc/Downloads/8.mp3", coverPath: "C:/Users/pc/Downloads/Mere_Baba.jpg"},
]
songItems.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src = songs[1].coverPath;
    element.getElementsByClassName("songName")[0].InnerText = songs[1].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
        else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
}
    )
//Listen to  Events
audioElement.addEventListener('timeupdate',()=> {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    playbar.value = progress;
})

playbar.addEventListener('change',()=> {
    audioElement.currentTime = playbar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
element.addEventListener('click',(e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `C:/Users/pc/Downloads/${index}.mp3`;
    masterSongName.innerText = songs[index-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('next').addEventListener('click', ()=> {
    if(index>8)
    {
        index = 1;
    }
    else{
        index += 1;
    }
    audioElement.src = `C:/Users/pc/Downloads/${index}.mp3`;
    masterSongName.innerText = songs[index-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(index<=1)
    {
        index = 1;
    }
    else{
        index -= 1;
    }
    audioElement.src = `C:/Users/pc/Downloads/${index}.mp3`;
    masterSongName.innerText = songs[index-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

