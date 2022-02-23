var nutchuyen=document.querySelectorAll('.nutchuyen ul li');
var slides=document.querySelectorAll('.ndslide ul li');
for (let i = 0; i< nutchuyen.length; i++) {
  nutchuyen[i].onclick=function(){
    // console.log(this);
    //xoa tat ca doi tuong co class active
    for (let i = 0; i < nutchuyen.length; i++) {
        nutchuyen[i].classList.remove('active');
        
    }
    this.classList.add('active');
    // console.log(this.previousElementSibling);
    var nutactive=this;
    var vt=0;
    for (vt = 0; nutactive=nutactive.previousElementSibling; vt++) { }
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
           slides[vt].classList.add('active');         
     }
  }
    }
    function autoslide() {
        //lấy thời gian
        var thoigian = setInterval(function () {
            var vtslide=0;
            var slidehientai=document.querySelector('.ndslide ul li.active');
            console.log(slidehientai);        
            
             for (var vtslide = 0; slidehientai=slidehientai.previousElementSibling; vtslide++) {
            //     const element = array[vtslide];
                
            }
            if(vtslide<(slides.length-1)){
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('active');
                    nutchuyen[i].classList.remove('active');
                }
            //cho phan tu tiep theo của slide hiên ra
            slides[vtslide].nextElementSibling.classList.add('active');
            nutchuyen[vtslide].nextElementSibling.classList.add('active');   
            }
            else
            {
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('active');
                    nutchuyen[i].classList.remove('active');
                }
            //cho phan tu tiep theo của slide hiên ra
            slides[0].classList.add('active');
            nutchuyen[0].classList.add('active');   
            }
            console.log("vi tri hientai la "+ vtslide);
            //cho ẩn slide active
                    
        }, 5000);
    }