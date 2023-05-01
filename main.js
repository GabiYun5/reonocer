var modelo = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/m61ooxRp9/model.json", listo)
function listo() {
    console.log("estoy listo!")
}
Webcam.set({
    width: 360, height: 265, image_format: "png", png_quality: 90
});
Webcam.attach("#camara")
Webcam.on('load', function () {
    document.getElementById("capturar").style.display = "inline-block"
})
function capturar() {
    Webcam.snap(function (foto) {
        document.getElementById("fotoDiv").innerHTML = '<img src="' + foto + '" id="foto">'
        document.getElementById("detectar").style.display = "inline-block"
    })
}
function detectar(){
    img = document.getElementById("foto");
    modelo.classify(img, resultados)
}
function resultados(error, respuesta){
    console.log(respuesta);
    objeto = respuesta[0].label
    document.getElementById("objeto").innerHTML = "Objeto: " + objeto
    confianza = Math.round (100 * respuesta[0].confidence) 
    document.getElementById("probabilidad").innerHTML = "Precisión: " + confianza + "%"
}