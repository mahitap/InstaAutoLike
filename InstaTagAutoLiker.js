(($)=>{

    let duration = 6000;
    let counter=0;

    function trynextPost() {

        
        let $nextPost=$('.coreSpriteRightPaginationArrow')
        
        if($nextPost.length>0){
            $nextPost[0].click();
            console.log('Next clicked:'+counter);
            counter++;
        }
        else{
            console.log('Next Post not found');
            pause();
        }
        
    }

    function tryLikePost() {

        let $likeButton = $('svg[aria-label="Like"]')
        
        if($likeButton.length>0){
            $likeButton.closest('button')[0].click();
            counter++;
            console.log('Like clicked:'+counter);
        }
        else
        console.log('Like button not found');
       
    }
    

    function interval() {

        let buffer = duration / 5;
        let likeIn = Math.random() * buffer+buffer;
        let nextIn = duration - likeIn - buffer;
        console.log('Clicking like in '+likeIn);

        setTimeout(() => {

            tryLikePost();

            console.log('Clicking next in '+nextIn);
            
            // show next image
            setTimeout(() => {
                trynextPost();
                
            }, nextIn);

        }, likeIn);
    }

    window.start = () => {
        window.interval = setInterval(interval, duration);
        console.log('Automatic liking is started. Interval: ' + duration );

    }

    window.pause = () => {
        clearInterval(window.interval);
        console.log('Automatic liking is paused.');
    }


    
})(jQuery);