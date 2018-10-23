var simplex = new SimplexNoise(),
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height),
    data = imgdata.data,
    t = 0;

window.setInterval(function(){
for (var x = 0; x < 256; x++) {
    for (var y = 0; y < 256; y++) {
        var r = simplex.noise3D(x / 16, y / 16, t/16) * 0.5 + 0.5;
        var g = simplex.noise3D(x / 8, y / 8, t/16) * 0.5 + 0.5;
        data[(x + y * 256) * 4 + 0] = r * 255;
        data[(x + y * 256) * 4 + 1] = (r + g) * 10;
        data[(x + y * 256) * 4 + 2] = 0;
        data[(x + y * 256) * 4 + 3] = 255;
    }
}
                   t++;
ctx.putImageData(imgdata, 0, 0);
}, 1000/60);