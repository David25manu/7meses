// --- Dados das Mensagens ---
// Cada objeto representa uma "caixa" com seu conteúdo.
const messages = [
    {
        category: 'saudades',
        title: 'ABRE QUANDO TIVER SAUDADIS DO SEU NENEMMMMMMMMMMMM',
        content: `Eu sei qui e dificil as vezes nos tar longe pequena MAS E SO UM DESAFIO COMO VOCE FALA EU TE AMO DEMAISSSSSSSSSSSS
                  VO FAZER DE TUDO PARA QUE SEJA POSSIVEL NOS DOIS JUNTINHOS SABIA aqui uns bejaos do seu nenem`,
        video: 'assets/videos/BEJAOS.mp4' // Substitua pelo seu vídeo de saudades
    },
    {
        category: 'sorriso',
        title: 'ABRE QUANDO QUISER SORRIR MINHA PEQUENA ESSE SORRISAO LINDO',
        content: `OIIIIIIIII MINHA RAINHAAAAAAAAAA OIA O VIDEO QUE TENHO PARA VOXE FICA FELIZINHA HEHEHEHEHEH EU TE AMOOOOOOOOOOOO DEMAISSSSSSSSSSSSSSSSSSS e sabia que seu sorriso ilumina meu dia 204020420302032032032 vezes mais
                  LINDONAAAAAAAAAA perfeitaaaaaaa minha deusa grega eu te amooooooooo`,
        video: 'assets/videos/opaganastyle.mp4' // Substitua pelo seu vídeo engraçado
    },
    {
        category: 'dia-dificil',
        title: 'Abre quando tiver titi ou baba :(( EU TE AMOOOOO',
        content: 'Quando as coisas ficarem dificeis lembre-se que voce e a pessoa mais forte e incrivel que conheco Respire fundo e saiba que estou aqui com voce em pensamento Tudo vai ficar bem ✨ (AQUI EM BAIXO esta um video do seu nenem respirando fundo para voxe fazer ao mesmo tempo se seu nenem tiver mimindo ou sem bateria HEHE EU TE AMOOOOOOOOOOOOOOO)',
        video: 'assets/videos/respira fundo nenem.mp4' // Substitua pelo seu vídeo para dias difíceis
    },
    {
        category: 'feliz',
        title: 'ABRE QUANDO VOXE TIVER FELIZINHAAA',
        content: `QUE BOM QUE ESTA FELIZZZZZZZZZZ MINHA PRINCESAAAAAAAAAAAAA EU AMO SEU SORRISO E SE VOXE TA FELIZ EU TAMBEM TOOOOOOOOOOOOOOOOO HIHIHIIHIHIH EU TE AMO TANTO MINHA PEQUENINA`,
        image: 'assets/images/Hihihi.jpg' // Substitua pelo caminho da sua foto
    },
    {
        category: 'mesversario',
        title: '7 MESES MINHA RAINHA EU TE AMO TANTOOOOOOOOO 🎉',
        content: `Voxe e tao especial para mim tao unica eu amo tanto voxe minha molanguinha pfv nunca desiste de nos pq eu nunca vou tabom
                  nos as vezes pode briga mas no fim sempre se acalma e se resolve pq nos quer lutar pra ficar junto nenem ent vamo continuar para sempre entendeu
                  EU TE AMO MUITOOOOOOOOO voce fica tao linda quando dorme quando fica brava quando ta triti quando ta com raiva quando faz vozinha de nenem minha favorita
                  eu amo tudo isso em vc e muito mais sabia :) espero que voce nunca desista de mim pequena e lembra que nunca nunca vou desistir de voce ❤️`,
        audio: 'assets/audios/Para minha molanguinha.mp4', // Substitua pelo seu arquivo de áudio
        specialAnimation: true
    }
    // Adicione mais mensagens aqui!
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
const heartAnimationArea = document.querySelector('.heart-animation-area'); // Ainda usado para corações gerados por clique (se quiser)
const body = document.body; // Adicionado para a animação do "Eu te amo" no body e corações globais

// --- Função para Renderizar as Caixas de Mensagem ---
function renderMessageCards() {
    cardGrid.innerHTML = ''; // Limpa o grid antes de adicionar
    messages.forEach(msg => {
        const card = document.createElement('div');
        card.classList.add('message-card');
        card.dataset.category = msg.category; // Usado para identificar qual mensagem abrir
        card.innerHTML = `<h2>${msg.title}</h2>`;
        cardGrid.appendChild(card);
    });
}

// --- Função para Exibir a Mensagem ---
function displayMessage(message) {
    // Esconde as caixas e mostra a área de mensagem
    cardGrid.classList.add('hidden');
    messageDisplay.classList.remove('hidden');

    // Preenche o conteúdo da mensagem
    messageTitle.textContent = message.title;
    messageContent.textContent = message.content;

    // Reseta e oculta todos os elementos de mídia para exibir apenas o necessário
    messageImage.classList.add('hidden');
    messageImage.src = '';

    messageVideo.classList.add('hidden');
    messageVideo.pause(); // Pausa o vídeo se estiver tocando
    messageVideo.src = '';

    messageAudio.classList.add('hidden');
    messageAudio.pause(); // Pausa o áudio se estiver tocando
    messageAudio.src = '';

    // Exibe mídia se existir na mensagem atual
    if (message.image) {
        messageImage.src = message.image;
        messageImage.classList.remove('hidden');
    }
    if (message.video) {
        messageVideo.src = message.video;
        messageVideo.classList.remove('hidden');
        messageVideo.load(); // Carrega o vídeo para reprodução
        // messageVideo.play(); // Você pode escolher reproduzir automaticamente ou não
    }
    if (message.audio) {
        messageAudio.src = message.audio;
        messageAudio.classList.remove('hidden');
        messageAudio.load(); // Carrega o áudio
        // messageAudio.play(); // Você pode escolher reproduzir automaticamente ou não
    }
}

// --- Função para Fechar a Mensagem ---
function closeMessage() {
    messageDisplay.classList.add('hidden');
    cardGrid.classList.remove('hidden');
    // Para vídeos e áudios, garante que parem de tocar ao fechar
    messageVideo.pause();
    messageAudio.pause();
}

// --- Função para Animação de Corações (para a página inteira) ---
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Escolhe a cor do coração (roxo ou azul)
    if (Math.random() < 0.5) {
        heart.classList.add('blue');
    }
    
    const size = Math.random() * 30 + 20; // Tamanho entre 20px e 50px
    heart.style.fontSize = `${size}px`; // Usa fontSize para controlar o tamanho do emoji
    
    heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória em % da largura da viewport
    
    // Duração e delay da animação para variar a velocidade
    heart.style.animationDuration = `${Math.random() * 5 + 8}s`; // Dura entre 8s e 13s
    heart.style.animationDelay = `${Math.random() * 5}s`; // Começa com um delay aleatório

    body.appendChild(heart); // Adiciona o coração diretamente ao body

    // Remove o coração do DOM após a animação
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// --- Função para criar a animação de texto "Eu te amo" ---
let currentColorIndex = 0;
const colors = ['color-blue', 'color-purple']; // Classes CSS para as cores

function createLoveTextAnimation(x, y) {
    const loveText = document.createElement('div');
    loveText.classList.add('love-text');
    loveText.textContent = 'EU TE AMO ❤️';
    
    // Alterna entre as cores azul e roxo
    loveText.classList.add(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Avança para a próxima cor

    // Posiciona o texto onde o clique ocorreu (subtrai metade da largura para centralizar)
    loveText.style.left = `${x}px`;
    loveText.style.top = `${y}px`;

    body.appendChild(loveText);

    // Remove o texto do DOM após a animação
    loveText.addEventListener('animationend', () => {
        loveText.remove();
    });
}

// --- Event Listeners ---
// Delegação de eventos para as caixas de mensagem
cardGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.message-card'); // Encontra o card pai clicado
    if (card) {
        const category = card.dataset.category;
        const selectedMessage = messages.find(msg => msg.category === category);
        if (selectedMessage) {
            displayMessage(selectedMessage);
        }
    }
});

closeMessageBtn.addEventListener('click', closeMessage);

// Event listener para cliques em qualquer lugar do body para a animação "Eu te amo"
document.body.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const isMessageCard = clickedElement.closest('.message-card');
    const isMessageDisplay = clickedElement.closest('#messageDisplay');
    const isCloseButton = clickedElement.id === 'closeMessageBtn';

    // Dispara a animação apenas se o clique não for dentro de uma caixa de mensagem ou na área de exibição
    if (!isMessageCard && !isMessageDisplay && !isCloseButton) {
        createLoveTextAnimation(event.clientX, event.clientY);
    }
});


// --- Inicialização ---
// Rende as caixas de mensagem ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderMessageCards();
    
    // Gera corações continuamente ao carregar a página
    // Adicione um intervalo para criar novos corações periodicamente
    setInterval(createFloatingHeart, 1000); // Cria um novo coração a cada 1 segundo
});