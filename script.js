const excuses = [
    "O meu gato comeu o cabo do carregador.",
    "Fiquei preso num engarrafamento causado por patos na estrada.",
    "O despertador entrou em modo soneca infinita.",
    "Fui abduzido por extraterrestres, mas eles atrasaram-se a devolver-me.",
    "A internet decidiu tirar o dia de folga.",
    "Tive que ajudar um pombo a atravessar a rua.",
    "O café acabou, e eu não funciono sem ele."
];

document.getElementById("gerar").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excusa").textContent = excuses[randomIndex];
});
