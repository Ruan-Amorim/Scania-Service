
// Lista de Produtos

const tipos_de_produtos = ["Peneus","Freios","Motor","Amortecedor","Caixa de Câmbio"];

const Produtos = [{
    "Peneus": [
        {
            "nome": "Pneu Firestone 19.5L-24Tl A.T. Utility R-4 S/C",
            "Preço": "400.00",
            "src": "https://dellavia.vteximg.com.br/arquivos/ids/161971-1000-1000/All-Traction-Utility.jpg?v=638464598046700000",
        },
        {
            "nome": "Pneu Firestone 17.5-25 SRG Loader Dozer L-3 16 S/C",
            "Preço": "400.00",
            "src": "https://dellavia.vteximg.com.br/arquivos/ids/161973-400-400/SRG-LOADER-DOZER.png?v=638464599826870000",
        },
        {
            "nome": "Pneu Firestone 295/80R22.5 16M Fs440",
            "Preço": "400.00",
            "src": "https://dellavia.vteximg.com.br/arquivos/ids/161531-400-400/FS440.png?v=638386850674670000",
        },
    ],
    "Freios": [
        {
            "nome": "Disco de Freio",
            "Preço": "300.00",
            "src": "https://png.pngtree.com/png-clipart/20230927/original/pngtree-truck-brake-disc-png-image_13146660.png",
        },
        {
            "nome": "Freio a Tambor",
            "Preço": "300.00",
            "src": "https://png.pngtree.com/png-clipart/20230927/original/pngtree-drum-brake-for-truck-bus-tractor-png-image_13146447.png",
        },
        {
            "nome": "Pastilha de Freio",
            "Preço": "300.00",
            "src": "http://www.pipopecas.com.br/pecas/imagens/pastilha-de-freio-caminhao-precos.jpg",
        },
    ],
    "Motor": [
        {
            "nome": "Motor diesel Scania",
            "Preço": "960.00",
            "src": "https://www.scania.com/content/www/br/pt/home/products/trucks/Scania-Super/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid_copy/responsivegrid_725680026/responsivegrid/responsivegrid_88345/heroimage.coreimg.85.992.png/1710965094084.png",
        },
        {
            "nome": "Moto Trem de força super",
            "Preço": "948.00",
            "src": "https://www.scania.com/content/www/br/pt/home/products/trucks/Scania-Super/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid_copy/responsivegrid_464452032/responsivegrid_1442799400/responsivegrid/accordion/item_1662037832958/responsivegrid_88345/heroimage.coreimg.85.992.png/1704363564317.png",
        },
        {
            "nome": "Motor de Partida Daf Cf Daf Xf",
            "Preço": "",
            "src": "https://images.tcdn.com.br/img/img_prod/712827/motor_de_partida_caminhao_e_trator_daf_785_1_20200806165223.png",
        },
    ],
    "Amortecedor": [
        {
            "nome": "Amortecedor Bolsa cabine Scania",
            "Preço": "412.21",
            "src": "https://www.mundodocaminhao.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/6/663282247_14-1975S-Suspensao-Amortecedor-Bolsa-Cabine-Scania-Streamline-partir-2012-Dianteiro-1908097.png.png",
        },
        {
            "nome": "Suspensão Amortecedor Mola Cabine S4 Scania",
            "Preço": "413.16",
            "src": "https://www.mundodocaminhao.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/6/663284376_14-1945S--Suspensao-Amortecedor-Mola-Cabine-Scania-S4-S5-G-R-a-partir-2004-Traseiro--Globo.png.png",
        },
        {
            "nome": "Suspensão Amortecedor Bolsa Cabine Scania NTG",
            "Preço": "379.91",
            "src": "https://www.mundodocaminhao.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/6/663281166_14-2549S-Suspensao-Amortecedor-Bolsa-Cabine-Scania-NTG-R-S-a-partir-2019-Traseiro-2621046-Globo.png.png",
        },
    ],
    "Caixa de Câmbio": [
        {
            "nome": "Caixa de  Câmbio Scania",
            "Preço": "309.00",
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotS6vj4uKCSVGlBAwdSVRSUcE5yNagP812Q&s",
        },
        {
            "nome": "Caixa de Câmbio 124 000 420 6 Marchas",
            "Preço": "498.00",
            "src": "https://img.olx.com.br/images/50/504469293095625.jpg",
        },
        {
            "nome": "Cilindro Caixa transferencia Câmbio",
            "Preço": "450.00",
            "src": "https://images.tcdn.com.br/img/img_prod/650998/cilindro_caixa_transferencia_cambio_scania_serie_s_cabine_r450_r500_r540_16599_1_7659742c64789f9f47d1c6a5640d1389.png",
        },
    ],
}];
// Função para Scroll
window.clickScroll = function clickScroll() {
    document.body.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth',
    });
}
// Função para virar as cartas
window.flip = function flip(card, front1, back2) {
    let item = window.document.getElementById(card);
    let front = window.document.getElementById(front1);
    let back = window.document.getElementById(back2);
    if (item.classList.contains("flip")) {
        item.classList.remove("flip");
        front.style.zIndex = 0;
        back.style.zIndex = 10;
    } else {
        item.classList.add("flip");
        front.style.zIndex = 10;
        back.style.zIndex = 0;
    }
}

