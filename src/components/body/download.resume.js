import body from "./body.component"
const RajResume_URL = "http://localhost:3000/Rajamanickam-resume.pdf" 

function DownloadResume(){
    const downloadFileURL = (url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.getElementsByClassName(".download-cv");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
}

export default DownloadResume;