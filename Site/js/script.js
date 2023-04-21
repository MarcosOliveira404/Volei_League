var header = document.getElementById('header');
    var navigationHeader = document.getElementById('nagivation_header');
    var content = document.getElementById('content');
    var showSidebar = false;

    function Sidebar(){
        showSidebar = !showSidebar;
        if(showSidebar){
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        } else {
            navigationHeader.style.marginLeft = '-100vw';   
            navigationHeader.style.animationName ='';
            content.style.filter = '';
        }
    }

    function closeSidebar(){
        if(showSidebar){
            Sidebar();
        }
    }

    window.addEventListener('resize', function(event){
        if(window.innerWidth > 770 && showSidebar){
            Sidebar();
        }
    });