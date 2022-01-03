import React from 'react';
import './News.css'

import New from './New/New'


const noticias = [
    {
        text: 'Microsoft briga com a apple pela liderançade empresa mais valiosa do  MUNDO'

    },
    {
        text: 'Galaxy A52 aparece com o Android 12 abaixo da One UI 4.0 antes do previsto.'
    },
    {
        text: 'Changan C385: montadora estatal chinesa presente no Brasil lança concorrente para a Tesla'
    },
    {
        text: 'Apple pode lançar monitor externo para quem não precisa do Pro Display XDR'
    },
    {
        text: 'Xiaomi Watch S1 ganha suporte para audiobooks e mais apps'
    },
    {
        text: '“Super Bowl da Astronomia” é cancelado devido à Covid-19 nos EUA'
    },
    {
        text: 'Lêndeas encontradas em múmias sul americanas contém DNA humano antigo'
    },
    {
        text: 'Como desligar a atualização em 2º do iPhone para economizar energia'
    },
]

const News = () => {
    return (  

        <div className="news container">
          



            <div className="row">
            {noticias.map((noticia, index)=>(
                 <div key={`noticia-${index}`} className="col-sm-6 col-lg-6 ">
                 <New {...noticia}/>
                 </div>
            ))}
            </div>
                <button className="button-load">Carregar mais...</button>
        </div>

    );
}
 
export default News;