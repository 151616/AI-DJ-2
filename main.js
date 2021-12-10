buttobomma = "";
enjoy_enjaami = "";
govyachya_kinaryav = "";
nesha = "";
oporadhi = "";
rahet_fateh_ali_khan = "";
ramuloo_ramulaa = "";
rowdy_baby = "";
vaaste = "";
zingaat = "";
language = 1;
function draw(){
    image(video,0,0,600,500);   
}
function preload(){
    song = loadSound("buttabomma.mp3");
    song = loadSound("enjoy_enjaami.mp3");
    song = loadSound("govyachya_kinaryav.mp3");
    song = loadSound("nesha.mp3");
    song = loadSound("oporadhi.mp3");
    song = loadSound("ramuloo_ramulaa.mp3");
    song = loadSound("rowdy_baby.mp3");
    song = loadSound("vaaste.mp3");
    song = loadSound("zaroori_tha.mp3");
    song = loadSound("zingaat.mp3");

}
function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    canvas.center()
    video.hide();
}
function next(){
language = language + 1;

if(language == 6){
    language = 1;
}
console.log(language);
}
function prev(){
    language = language - 1;
    if(language == 0    ){
        language = 5;
    }
    console.log(language);
}
