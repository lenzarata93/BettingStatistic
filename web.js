document.getElementById("Loko").addEventListener("click", LokoPlovdivWin);
        let lokoPldCount=0;
        let drawCount=0;
        let chernoMoreCount=0;
    function LokoPlovdivWin(){
     lokoPldCount++;

    console.log(lokoPldCount);
    procentage()

}
document.getElementById("Draw").addEventListener("click", draw);
function draw() {
    
    drawCount++;

    console.log(drawCount);
    procentage()
    
}document.getElementById("ChernoMore").addEventListener("click", chernoMore);
function chernoMore(params) {
    chernoMoreCount++;

console.log(chernoMoreCount);
procentage()
}    
     let sum =lokoPldCount + drawCount + chernoMoreCount;
     let lokoPldProcents =((lokoPldCount/sum)*100).toFixed(2);
     let drawProcent= ((drawCount/sum)*100).toFixed(2);
     let chernoMoreProcent=((chernoMoreCount/sum)*100).toFixed(2);

function procentage(){
     let res = document.querySelector('#res')
     let sum =lokoPldCount + drawCount + chernoMoreCount;
     let lokoPldProcents =((lokoPldCount/sum)*100).toFixed(2);
     let drawProcent= ((drawCount/sum)*100).toFixed(2);
     let chernoMoreProcent=((chernoMoreCount/sum)*100).toFixed(2);
     let expected=(`${lokoPldProcents}% Локомотив Пловдив да победи,${drawProcent}% за равентсво,${chernoMoreProcent}% Черно Море Варна да победи`);
     res.innerHTML = '';
     let newP=document.createElement('p');
     newP.textContent=expected;
    res.append(newP);


    
}

