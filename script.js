const outMsg = document.getElementById("outMsg");
const input = document.getElementById("inputMsg");
const buttonSnd = document.getElementById("btn");
const isiPesan = input.value;

var list = ["hallo","hai","hi","ah masa","lagi apa", "kamu tau gak?", "kamu siapa?", "siapa yg buat kamu?"];
function send(){
    var pesan = input.value;
    if(pesan.length !== 0){
        outMsg.innerHTML += `<div class="msg-kiri">
        <p>${input.value}</p>
        </div>`;
        if(pesan == "hallo"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>Hallo juga</p>
                </div>`
            }, 1000)
        }else if(pesan == "lagi apa"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>Lagi mikirin kamu</p>
                </div>`
            }, 1000)
        }else if(pesan == "kamu tau gak?"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>gk tau</p>
                </div>`
            }, 1000)
        }else if(pesan == "kamu siapa?"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>aku BOT</p>
                </div>`
            }, 1000)
        }
        else if(pesan == "siapa yang buat kamu?"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>ada deh</p>
                </div>`
            }, 1000)
        }else if(pesan == "ah masa"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>bener nih, suer :v</p>
                </div>`
            }, 1000)
        }else if(pesan == "hai"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>hai juga</p>
                </div>`
            }, 1000)
        }else if(pesan == "hi"){
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                <p>hi juga</p>
                </div>`
            }, 1000)
        }else if(pesan == "list"){
            setTimeout(function(){
                for(let i = 0; i < list.length; i++){
                outMsg.innerHTML += `<div class="msg-kanan">
                    <p>${list[i]}
                </div>`
                }
            }, 1000)
        }else{
            setTimeout(function(){
                outMsg.innerHTML += `<div class="msg-kanan">
                                        <p>apaan sih</p>
                                    </div>`
            },1000)
        }
        


        input.value = "";
    }else{
        console.log("kurang");
    }    
}
input.onchange(send())
