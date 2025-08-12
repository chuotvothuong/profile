// index.js rút gọn cơ bản, giữ nguyên hiệu ứng & layout
$(function(){
  CheckFps();
  Alerts();
  MusicPlay();
  ShowToast();
  __GetIP();
  __GetInfo();
});

// FPS counter
let fps=document.getElementById("fps"), startTime=Date.now(), frame=0;
function CheckFps(){
  let time=Date.now(); frame++;
  if(time-startTime>1000){
    fps.innerHTML=(frame/((time-startTime)/1000)).toFixed(1);
    startTime=time; frame=0;
  }
  requestAnimationFrame(CheckFps);
}

// Typed intro
new Typed(".GioiThieu",{
  strings:["","Hey brother, I'm a Designer.","I like website design =]] "],
  typeSpeed:95,backSpeed:75,loop:true
});

// Music
const MusicList=[
  "//thanhdieu.com/files/Em-Nào-Có-Tội.mp3",
  "//thanhdieu.com/files/Anh-Đã-Quen-Với-Cô-Đơn.mp3",
  "//thanhdieu.com/files/Về-Bên-Anh.mp3"
];
let t=parseInt(localStorage.getItem('td'))||Math.floor(Math.random()*MusicList.length);
const audio=new Audio(MusicList[t]);
function MusicPlay(){audio.play();}
document.addEventListener('click',MusicPlay);
audio.addEventListener("ended",()=>{
  t=(t+1)%MusicList.length; localStorage.setItem('td',t);
  audio.src=MusicList[t]; audio.play();
});

// Loader
let spin=document.querySelector('.LoaderCover');
window.addEventListener('load',()=>{
  spin.classList.add('HideLoader');
  setTimeout(()=>spin.remove(),5000);
});

// Toast
function ShowToast(){
  let x=document.getElementById("Toast");
  x.className="show";
  setTimeout(()=>x.className=x.className.replace("show",""),3000);
}

// Social links
$(document).ready(()=>{
  const links={
    Facebook:'https://www.facebook.com/100035052735014',
    Youtube:'https://www.youtube.com/channel/UCiSP9FWliPIwG-w59dJdilQ',
    Discord:'https://dsc.bio/WusThanhDieu',
    Instagram:'https://instagram.com/vuongsondieu2k2/'
  };
  $.each(links,(id,url)=>$('#'+id).click(()=>window.open(url,'_blank')));
});

// Alert
function Alerts(){
  Swal.fire({
    title:'Notification !',
    text:'=>> Welcome back to the homepage 🐬 <<=',
    showConfirmButton:false
  });
}

// Skill animation
$('.skill-per').each(function(){
  let $this=$(this), per=$this.attr('per');
  $this.css("width",per+'%');
  $({val:0}).animate({val:per},{
    duration:12000,
    step:function(){$this.attr('per',Math.floor(this.val)+'%');},
    complete:function(){$this.attr('per',Math.floor(this.val)+'%');}
  });
});
