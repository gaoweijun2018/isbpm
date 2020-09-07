const baseSize = 32;
// 设置rem
function setRem() {
    // 当前页面宽度相对于设计稿 750 宽的缩放比例
    const scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
}

setRem();
// 改变窗口大小时，重新设置rem
window.onresize = () => {
    setRem();
};
