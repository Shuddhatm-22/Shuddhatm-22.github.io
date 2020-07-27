let themeDots=document.getElementsByClassName('theme-dot');


let theme=localStorage.getItem('theme');

if(theme==null){
    
    setTheme('blue-mode');
}
else{

    setTheme(theme);
}

for(var i=0;i<themeDots.length;i++){

    themeDots[i].addEventListener('click',function(){
        
        let mode=this.id;
        setTheme(mode);
    })
}

function setTheme(mode){

    if(mode=='light-mode'){
        document.getElementById('theme-style').href='default.css';
    }
    if(mode=='blue-mode'){
        document.getElementById('theme-style').href='blue.css';
    }
    if(mode=='purple-mode'){
        document.getElementById('theme-style').href='purple.css';
    }
    if(mode=='green-mode'){
        document.getElementById('theme-style').href='green.css';
    }

    localStorage.setItem('theme',mode);


}