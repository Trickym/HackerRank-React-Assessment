import React from 'react';
import { useState } from 'react';
function Slides({slides}) {
    const [ind,setInd] = useState(0)
    const [pDisable,setpDisable] = useState(true);
    const [nDisable,setnDisable] = useState(false);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button disabled={pDisable} data-testid="button-restart" className="small outlined" onClick={()=>{
                    setnDisable(false)
                    setpDisable(true);
                    setInd(0);
                }}>Restart</button>
                <button disabled={pDisable} data-testid="button-prev" className="small" onClick={()=>{
                    setnDisable(false)
                    if(ind===1){setpDisable(true);
                    }
                    if(ind>0){
                        setInd(ind-1);
                    }
                    
                    
                }}>Prev</button>
                <button disabled={nDisable} data-testid="button-next" className="small"onClick={()=>{
                    setpDisable(false);
                    if(ind===slides.length-2){
                        setnDisable(true);
                        
                        }
                    if(ind<slides.length){
                        setInd(ind+1);
                    }
                    
                    
                    
                    
                    
                }}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{ind>=slides.length||ind<0?ind>=slides.length?slides[slides.length-1].title:slides[0].title:slides[ind].title}</h1>
                <p data-testid="text">{ind>=slides.length||ind<0?ind>=slides.length?slides[slides.length-1].text:slides[0].text:slides[ind].text}</p>
            </div>
        </div>
    );

}

export default Slides;
