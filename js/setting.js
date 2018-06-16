window.onload=function(){
    // 初始化内容
    //readProperties(); //读取xml中的数据

    //初始化进度条
    var cv=document.getElementById("cubeVolume");
    cv.value=CubeVolume/100;                         //需要初始化进度条 scroll取值为1-100

    var pt=document.getElementById("particles");
    pt.value=Particles/1000;                         //需要初始化进度条 scroll取值为1-100

    var co=document.getElementById("color");
    co.value=rgb2Hex(ColorValue);                     //数据没有问题 不能同步到颜色圈
    //console.log(co.value);

    var ca=document.getElementById("checkbox-ar");
    ca.checked=AutoRotation;

    var rx=document.getElementById("rotateX");
    rx.value=RotateX/0.01;                         //需要初始化进度条 scroll取值为1-100

    var ry=document.getElementById("rotateY");
    ry.value=RotateY/0.01;                         //需要初始化进度条 scroll取值为1-100

}

function setCubeVolume() {
    var scroll=document.getElementById("cubeVolume");
    CubeVolume=scroll.value*30;//未确定具体比例 scroll取值为1-100
    //console.log(CubeVolume);
}

function getCubeVolume(){
    return document.getElementById("cubeVolume").value*30;
}

function setParticles() {
    var scroll=document.getElementById("particles");
    Particles=scroll.value*500;//未确定具体比例 scroll取值为1-100
    //console.log("particles"+Particles);
}

function getColor(){
    //let color=hex2Rgb(document.getElementById("color").value);
    let color=rgb(250,22,3);
    return color;
}
function setColor() {
    var scroll=document.getElementById("color");
    ColorValue=hex2Rgb(scroll.value);//格式为rgb(0,0,0)
    return ColorValue;
    console.log(ColorValue);
}

function setAutoRotation() {
    var scroll=document.getElementById("checkbox-ar");
    AutoRotation=scroll.checked;
    //console.log("checkbox-ar"+AutoRotation);
}

function setRotateX() {
    var scroll=document.getElementById("rotateX");
    RotateX=scroll.value*0.01;//未确定具体比例 scroll取值为1-100
}

function setRotateY() {
    var scroll=document.getElementById("rotateY");
    RotateY=scroll.value*0.01;//未确定具体比例 scroll取值为1-100
}

function hex2Rgb(hex) { //十六进制转为RGB
    var rgb = []; // 定义rgb数组
    if (/^\#[0-9A-F]{3}$/i.test(hex)) { //判断传入是否为#三位十六进制数
        let sixHex = '#';
        hex.replace(/[0-9A-F]/ig, function(kw) {
            sixHex += kw + kw; //把三位16进制数转化为六位
        });
        hex = sixHex; //保存回hex
    }
    if (/^#[0-9A-F]{6}$/i.test(hex)) { //判断传入是否为#六位十六进制数
        hex.replace(/[0-9A-F]{2}/ig, function(kw) {
            rgb.push(eval('0x' + kw)); //十六进制转化为十进制并存如数组
        });
        return `rgb(${rgb.join(',')})`; //输出RGB格式颜色
    } else {
        console.log(`Input ${hex} is wrong!`);
        return 'rgb(0,0,0)';
    }
}

function rgb2Hex(rgb) {
    if (/^rgb\((\d{1,3}\,){2}\d{1,3}\)$/i.test(rgb)) { //test RGB
        var hex = '#'; //定义十六进制颜色变量
        rgb.replace(/\d{1,3}/g, function(kw) { //提取rgb数字
            kw = parseInt(kw).toString(16); //转为十六进制
            kw = kw.length < 2 ? 0 + kw : kw; //判断位数，保证两位
            hex += kw; //拼接
        });
        return hex; //返回十六进制
    } else {
        //console.log(`Input ${rgb} is wrong!`);
        return '#000'; //输入格式错误,返回#000
    }
}