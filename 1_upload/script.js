const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () =>{
  fileInput.click();
});

fileInput.onchange = ({target}) => {
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        console.log(fileName)
    }
};

function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', );
    xhr.send();
}