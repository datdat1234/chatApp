import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/chat.css";
import { Search } from "./search";

export function Chat() {

    const [searchModal, setSearchModal] = useState(false);

    const navigate = useNavigate();

    const RenderChatSidebar = () =>{
        let list = []
        for(let i=0; i<10; i++)
            list.push(
            <div className="sidebar_chat">
                <i className="fa-regular fa-circle-user"></i>
                <div>
                    <h2>ABC</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa</p>
                </div>
                <i className="fa-solid fa-chevron-right"></i>
            </div>)
        return list;
    }

    const RenderChat = () => {
        let list = []
        for(let i=0; i<5; i++)
            list.push(<p className="message is_sent">Lorem, ipsum dolor sit am...lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum alias earum ipsam sit nulla natus officiis dolorum placeat cum laborum, velit blanditiis porro eligendi aut perspiciatis dicta minima, a enim?</p>)
        return list;
    }

    useEffect(() => {
        var inputs = document.querySelectorAll( '.choose_file' );
        Array.prototype.forEach.call( inputs, function( input )
        {
          var label	 = document.querySelectorAll( '.text-input' ),
          labelVal = label[0].placeholder;
        
          input.addEventListener( 'change', function( e )
          {
            var fileName = '';
            if( this.files && this.files.length > 1 )
              fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
              fileName =  e.target.value.replace('C:\\fakepath\\','');
            
            if( fileName )
              label[0].placeholder = fileName;
            else
              label[0].placeholder = labelVal;
          });
        });
      });

    return (
        <React.Fragment>
            <div className="chat_ctn">
                <Search trigger={searchModal} setTrigger={setSearchModal} />
                <div className="header">
                    <h1>
                        <i className="fa-brands fa-rocketchat"></i>
                        MYCHAT
                    </h1>
                    <div className="header_user">
                        <i className="fa-solid fa-circle-plus" onClick={() => {setSearchModal(true);}}></i>
                        <i className="fa-regular fa-circle-user" onClick={() => {navigate("../")}}></i>
                        <span>Nguyễn A</span>
                    </div>
                </div>
                <div className="sidebar">
                    <RenderChatSidebar />
                </div>
                <div className="content">
                    <div className="content_user">
                        <i className="fa-regular fa-circle-user"></i>
                        <span>Nguyễn A</span>
                    </div>
                    <div className="chat_area">
                        <RenderChat />
                        <p className="message">Lorem, ipsum dolor sit am...lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum alias earum ipsam sit nulla natus officiis dolorum placeat cum laborum, velit blanditiis porro eligendi aut perspiciatis dicta minima, a enim?</p>
                    </div>
                    <div className="text_area">
                        <input className="choose_file" type="file" />
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        <input className="text-input" type="text" placeholder="Aa" />
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}