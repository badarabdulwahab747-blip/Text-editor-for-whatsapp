function insertTag(tag){
    let box=document.getElementById("msg");
    let start=box.selectionStart;
    let end=box.selectionEnd;

    let text=box.value;
    let selected=text.substring(start,end);

    if(selected=="") selected="Text";

    box.value=text.substring(0,start)+"["+tag+"]"+selected+"[/"+tag+"]"+text.substring(end);
    previewText();
    }

    function previewText(){
    let txt=document.getElementById("msg").value;

    txt=txt.replace(/\[b\](.*?)\[\/b\]/gi,"<b>$1</b>");
    txt=txt.replace(/\[i\](.*?)\[\/i\]/gi,"<i>$1</i>");
    txt=txt.replace(/\[s\](.*?)\[\/s\]/gi,"<del>$1</del>");
    txt=txt.replace(/\[ul\](.*?)\[\/ul\]/gi,"<ul> $1 </ul>");
    txt=txt.replace(/\[ol\](.*?)\[\/ol\]/gi,"<ol> $1 </ol>");

    txt=txt.replace(/\n/g,"<br>");
    document.getElementById("preview").innerHTML=txt;
    }

    function sendWhatsApp(){
    let number="923703696526";
    let message=document.getElementById("msg").value;

    message=message.replace(/\[b\](.*?)\[\/b\]/gi,"*$1*");
    message=message.replace(/\[i\](.*?)\[\/i\]/gi,"_$1_");
    message=message.replace(/\[s\](.*?)\[\/s\]/gi,"~$1~");
    message=message.replace(/\[ul\](.*?)\[\/ul\]/gi,"- $1");
    message=message.replace(/\[ol\](.*?)\[\/ol\]/gi,"1. $1");

    window.open(
    "https://wa.me/923703696526?text="+encodeURIComponent(message),
    "_blank"
    );
    }

    async function shareText(){
    let message=document.getElementById("msg").value;

    message=message.replace(/\[b\](.*?)\[\/b\]/gi,"*$1*");
    message=message.replace(/\[i\](.*?)\[\/i\]/gi,"_$1_");
    message=message.replace(/\[s\](.*?)\[\/s\]/gi,"~$1~");
    message=message.replace(/\[ul\](.*?)\[\/ul\]/gi,"- $1");
    message=message.replace(/\[ol\](.*?)\[\/ol\]/gi,"1. $1");

    if(navigator.share){
    try{
    await navigator.share({
    title:"Share",
    text:message
    });
    }catch(e){}
    }else{
    navigator.clipboard.writeText(message);
    alert("Share supported nahi hai.\nText Copy ho gaya.");
    }
}