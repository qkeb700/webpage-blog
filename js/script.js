let slideIndex = 1;
let slides = document.getElementsByClassName('imgBox');

setInterval("goslide(1)", 5000);
goslide(slideIndex);

function goslide(num) {
    slideIndex += num;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    if(slideIndex < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        // for문을 돌면서 li태그에 있는 모든 active클래스를 삭제한다.
        document.getElementsByClassName('pg')[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";

    // 현재 index 이미지 순서에 맞는 li태그에 active클래스를 추가한다.
    document.getElementsByClassName('pg')[slideIndex-1].classList.add("active");
}