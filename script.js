// --- Dados das Mensagens ---
// Cada objeto representa uma "caixa" com seu conteúdo.
const messages = [
    {
        category: 'saudades',
        title: 'ABRE QUANDO TIVER SAUDADIS DO SEU NENEMMMMMMMMMMMM',
        content: `Eu sei qui e dificil as vezes nos tar longe pequena MAS E SO UM DESAFIO COMO VOCE FALA EU TE AMO DEMAISSSSSSSSSSSS
                  VO FAZER DE TUDO PARA QUE SEJA POSSIVEL NOS DOIS JUNTINHOS SABIA aqui uns bejaos do seu nenem`,
        video: '/7meses/assets/videos/BEJAOS.mp4' // CAMINHO CORRIGIDO!
    },
    {
        category: 'sorriso',
        title: 'ABRE QUANDO QUISER SORRIR MINHA PEQUENA ESSE SORRISAO LINDO',
        content: `OIIIIIIIII MINHA RAINHAAAAAAAAAA OIA O VIDEO QUE TENHO PARA VOXE FICA FELIZINHA HEHEHEHEHEH EU TE AMOOOOOOOOOOOO DEMAISSSSSSSSSSSSSSSSSSS e sabia que seu sorriso ilumina meu dia 204020420302032032032 vezes mais
                  LINDONAAAAAAAAAA perfeitaaaaaaa minha deusa grega eu te amooooooooo`,
        video: '/7meses/assets/videos/opaganastyle.mp4' // CAMINHO CORRIGIDO!
    },
    {
        category: 'dia-dificil',
        title: 'Abre quando tiver titi ou baba :(( EU TE AMOOOOO',
        content: 'Quando as coisas ficarem dificeis lembre-se que voce e a pessoa mais forte e incrivel que conheco Respire fundo e saiba que estou aqui com voce em pensamento Tudo vai ficar bem ✨ (AQUI EM BAIXO esta um video do seu nenem respirando fundo para voxe fazer ao mesmo tempo se seu nenem tiver mimindo ou sem bateria HEHE EU TE AMOOOOOOOOOOOOOOO)',
        video: '/7meses/assets/videos/respira fundo nenem.mp4' // CAMINHO CORRIGIDO!
    },
    {
        category: 'feliz',
        title: 'ABRE QUANDO VOXE TIVER FELIZINHAAA',
        content: `QUE BOM QUE ESTA FELIZZZZZZZZZZ MINHA PRINCESAAAAAAAAAAAAA EU AMO SEU SORRISO E SE VOXE TA FELIZ EU TAMBEM TOOOOOOOOOOOOOOOOO HIHIHIIHIHIH EU TE AMO TANTO MINHA PEQUENINA`,
        image: '/7meses/assets/images/Hihihi.jpg' // CAMINHO CORRIGIDO!
    },
    {
        category: 'mesversario',
        title: '7 MESES MINHA RAINHA EU TE AMO TANTOOOOOOOOO 🎉',
        content: `Voxe e tao especial para mim tao unica eu amo tanto voxe minha molanguinha pfv nunca desiste de nos pq eu nunca vou tabom
                  nos as vezes pode briga mas no fim sempre se acalma e se resolve pq nos quer lutar pra ficar junto nenem ent vamo continuar para sempre entendeu
                  EU TE AMO MUITOOOOOOOOO voce fica tao linda quando dorme quando fica brava quando ta triti quando ta com raiva quando faz vozinha de nenem minha favorita
                  eu amo tudo isso em vc e muito mais sabia :) espero que voce nunca desista de mim pequena e lembra que nunca nunca vou desistir de voce ❤️`,
        audio: '/7meses/assets/audios/Para minha molanguinha.mp3', // CAMINHO CORRIGIDO!
        specialAnimation: true
    }
];

// --- Elementos do DOM ---
const cardGrid = document.querySelector('.card-grid');
const messageDisplay = document.getElementById('messageDisplay');
const messageTitle = document.getElementById('messageTitle');
const messageContent = document.getElementById('messageContent');
const messageImage = document.getElementById('messageImage');
const messageVideo = document.getElementById('messageVideo');
const messageAudio = document.getElementById('messageAudio');
const closeMessageBtn = document.getElementById('closeMessageBtn');
const heartAnimationArea = document.querySelector('.heart-animation-area');
const body = document.body;

// --- Função para Renderizar as Caixas de Mensagem ---
function renderMessageCards() {
    cardGrid.innerHTML = '';
    messages.forEach(msg => {
        const card = document.createElement('div');
        card.classList.add('message-card');
        card.dataset.category = msg.category;
        card.innerHTML = `<h2>${msg.title}</h2>`;
        cardGrid.appendChild(card);
    });
}

// --- Função para Exibir a Mensagem ---
function displayMessage(message) {
    cardGrid.classList.add('hidden');
    messageDisplay.classList.remove('hidden');

    messageTitle.textContent = message.title;
    messageContent.textContent = message.content;

    messageImage.classList.add('hidden');
    messageImage.src = '';

    messageVideo.classList.add('hidden');
    messageVideo.pause();
    messageVideo.src = '';

    messageAudio.classList.add('hidden');
    messageAudio.pause();
    messageAudio.src = '';

    if (message.image) {
        messageImage.src = message.image;
        messageImage.classList.remove('hidden');
    }
    if (message.video) {
        messageVideo.src = message.video;
        messageVideo.classList.remove('hidden');
        messageVideo.load();
    }
    if (message.audio) {
        messageAudio.src = message.audio;
        messageAudio.classList.remove('hidden');
        messageAudio.load();
    }
}

// --- Função para Fechar a Mensagem ---
function closeMessage() {
    messageDisplay.classList.add('hidden');
    cardGrid.classList.remove('hidden');
    messageVideo.pause();
    messageAudio.pause();
}

// --- Função para Animação de Corações (para a página inteira) ---
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    if (Math.random() < 0.5) {
        heart.classList.add('blue');
    }
    
    const size = Math.random() * 30 + 20;
    heart.style.fontSize = `${size}px`;
    
    heart.style.left = `${Math.random() * 100}vw`;
    
    heart.style.animationDuration = `${Math.random() * 5 + 8}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;

    body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// --- Função para criar a animação de texto "Eu te amo" ---
let currentColorIndex = 0;
const colors = ['color-blue', 'color-purple'];

function createLoveTextAnimation(x, y) {
    const loveText = document.createElement('div');
    loveText.classList.add('love-text');
    loveText.textContent = 'EU TE AMO ❤️';
    
    loveText.classList.add(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    loveText.style.left = `${x}px`;
    loveText.style.top = `${y}px`;

    body.appendChild(loveText);

    loveText.addEventListener('animationend', () => {
        loveText.remove();
    });
}

// --- Event Listeners ---
cardGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.message-card');
    if (card) {
        const category = card.dataset.category;
        const selectedMessage = messages.find(msg => msg.category === category);
        if (selectedMessage) {
            displayMessage(selectedMessage);
        }
    }
});

closeMessageBtn.addEventListener('click', closeMessage);

document.body.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const isMessageCard = clickedElement.closest('.message-card');
    const isMessageDisplay = clickedElement.closest('#messageDisplay');
    const isCloseButton = clickedElement.id === 'closeMessageBtn';

    if (!isMessageCard && !isMessageDisplay && !isCloseButton) {
        createLoveTextAnimation(event.clientX, event.clientY);
    }
});

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    renderMessageCards();
    setInterval(createFloatingHeart, 1000);
});