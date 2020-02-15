import React from 'react';
import DangerIcon from '../../assets/icons/DangerIcon';

const Danger = () => {
    return (
         <article className="Card--Danger">
         <DangerIcon/>
            <div className="Card__text-wrapper">
                <p><strong>Average person spends 30 minutes to 2 hours deciding what to cook every day!</strong></p>
                <p>Don't be that person. Don't waste your time browsing through the recipes for hours only to find out that you are missing a key ingredient.</p>
            </div>
        </article>
    );
};

export default Danger;