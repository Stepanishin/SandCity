import React, { FC } from 'react';
import { IShareTwitterBtnProps } from '../../../types/IShareTwitterBtnProps';
import { RetweetOutlined } from '@ant-design/icons';
import './ShareRefLinkTwitter.css'




const ShareRefLinkTwitter:FC<IShareTwitterBtnProps> = ({name} ) => {

    let text = `Bet and win NCTR here ${name}` 
    let text2 = 'Judge it and earn NCTR' 
    let text4 = 'Buy NFT on MagicEden: https://magiceden.io/marketplace/dustcity'

    let linkTwitter = `https://twitter.com/intent/tweet?text=${text}%0a%0a${text2}%0a%0a${text4}`

    return (
        <a className="ShareTwitterBtn twitter-share-button"
            href={linkTwitter}
            target="_blank"
        >
        <RetweetOutlined style={{ color: '#00FFFF', marginLeft: '5px' }} /></a>
    );
};

export default ShareRefLinkTwitter;