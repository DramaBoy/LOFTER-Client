// 点击更多出现黑色框
(function(){
    document.onclick = function(e){
        let more = document.querySelector('.more-box');
        console.log(e.target);
        if (e.target.classList.contains('more')) {
            more.style.display = 'block';
            return;
        }
        more.style.display = 'none';
    }
})();


