
document.addEventListener('mousemove', (event) => {

    const rightEye = document.getElementById('right-eye'); 
    const rektRight = rightEye.getBoundingClientRect();
    const rightEyeX = rektRight.left + rektRight.width / 2;
    const rightEyeY = rektRight.top + rektRight.height / 2;

    const leftEye = document.getElementById('left-eye'); 
    const rektLeft = leftEye.getBoundingClientRect();
    const leftEyeX = rektLeft.left + rektLeft.width / 2;
    const leftEyeY = rektLeft.top + rektLeft.height / 2;

    const mouseLeftX = event.clientX;
    const mouseLeftY = event.clientY;

    const mouseRightX = event.clientX;
    const mouseRightY = event.clientY;

    const angleLeftDeg = angle(mouseLeftX, mouseLeftY, leftEyeX, leftEyeY);
    const angleRightDeg = angle(mouseRightX, mouseRightY, rightEyeX, rightEyeY);

    leftEye.style.rotate = `${180 + angleLeftDeg}deg`;
    rightEye.style.rotate = `${180 + angleRightDeg}deg`;


    const rightEyeCat = document.getElementById('right-eye-cat'); 
    const rektRightCat = rightEyeCat.getBoundingClientRect();
    const rightEyeXCat = rektRightCat.left + rektRightCat.width / 2;
    const rightEyeYCat = rektRightCat.top + rektRightCat.height / 2;
    
    const leftEyeCat = document.getElementById('left-eye-cat'); 
    const rektLeftCat = leftEyeCat.getBoundingClientRect();
    const leftEyeXCat = rektLeftCat.left + rektLeftCat.width / 2;
    const leftEyeYCat = rektLeftCat.top + rektLeftCat.height / 2;

    const mouseLeftXCat = event.clientX;
    const mouseLeftYCat = event.clientY;

    const mouseRightXCat = event.clientX;
    const mouseRightYCat = event.clientY;

    const angleLeftDegCat = angle(mouseLeftXCat, mouseLeftYCat, leftEyeXCat, leftEyeYCat);
    const angleRightDegCat = angle(mouseRightXCat, mouseRightYCat, rightEyeXCat, rightEyeYCat);

    leftEyeCat.style.rotate = `${180 + angleLeftDegCat}deg`;
    rightEyeCat.style.rotate = `${180 + angleRightDegCat}deg`;
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}