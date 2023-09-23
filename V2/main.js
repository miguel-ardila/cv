document.querySelector('.downloadBtn').addEventListener('click', function() {
    var downloadLink = document.createElement('a');
    downloadLink.href = './assets/cv.pdf';
    downloadLink.download = 'Miguel_Ardila_CV.pdf';
    downloadLink.click();
});