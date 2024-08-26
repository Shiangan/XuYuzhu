<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 时间轴动画
        function animateTimeline() {
            const timelineBlocks = document.querySelectorAll(".VivaTimeline .event");
            timelineBlocks.forEach(function (block) {
                const rect = block.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                    block.classList.add("animated");
                } else {
                    block.classList.remove("animated");
                }
            });
        }

        // 幻灯片播放功能
        let slideIndex = 0;
        const slides = document.querySelectorAll("#slideshow .mySlides"); // 确保 slides 变量已定义

        function showSlides() {
            slides.forEach(slide => slide.style.display = "none");
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // 每隔3秒切换幻灯片
        }

        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }
            showSlides();
        }

        showSlides(); // 初次调用以显示第一张幻灯片

        // 切换花篮画廊的显示状态
        const showButton = document.getElementById('show-flower-baskets');
        const flowerGallery = document.getElementById('flower-basket-gallery');

        if (showButton && flowerGallery) {
            showButton.addEventListener('click', function() {
                if (flowerGallery.style.display === 'none' || flowerGallery.style.display === '') {
                    flowerGallery.style.display = 'flex';
                } else {
                    flowerGallery.style.display = 'none';
                }
            });
        }

        // 渐显文本效果
        const fadeInTexts = document.querySelectorAll('.fade-in-text');
        fadeInTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = '1';
            }, index * 1500); // 每段延迟1.5秒
        });

        // 初始化动画并监听滚动事件
        animateTimeline();
        window.addEventListener('scroll', animateTimeline);
    });
</script>
