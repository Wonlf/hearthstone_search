import React, {Component, Fragment} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html{
        @import url('https://fonts.googleapis.com/css?family=Yeon+Sung');
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
        
    body{
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
    }
    #root{
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
 
    }
`;


class App extends Component {
    state = {
        name : '',
        name2 : '',
        id: '',
        res: false,
        cost: '',
        flavor: '',
        cardClass: '',
        rarity: '',
        type: '',
        pack: ''
    };
    handleSubmit = async (e) => {
        await axios.post('http://localhost:4000/', {name: this.state.name})
            .then(res => {
                this.setState({
                    res: true,
                    name2: res.data.name,
                    id: res.data.id,
                    cost: res.data.cost,
                    cardClass: res.data.cardClass,
                    flavor: res.data.flavor,
                    rarity: res.data.rarity,
                    type: res.data.type,
                    pack: res.data.set,
                })
                if (res.data.flavor == null) {
                    this.setState({
                        flavor: '없음'
                    })
                }
            })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleSubmit(e)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        let photo = null;
        let info = null;
        if(this.state.res === true){
            photo = <Picture id={this.state.id}/>;
            info = <Info2>
                이름 : {this.state.name2}
                <br/>
                <br/>
                비용 : {this.state.cost}
                <br/>
                <br/>
                직업 : {this.state.cardClass}
                <br/>
                <br/>
                플레이버 텍스트 : {this.state.flavor}
                <br/>
                <br/>
                카드 등급 : {this.state.rarity}
                <br/>
                <br/>
                카드 구분 : {this.state.type}
                <br/>
                <br/>
                카드 종류 : {this.state.pack}
            </Info2>;
        }
        return (
            <Fragment>
            <GlobalStyles/>
                <div style={{width: '80%', height: '25%', margin: 'auto', marginTop: '10px'}}>
                    <Id type={'text'} placeholder={'카드이름'} name={'name'} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                    <Send  onClick={this.handleSubmit}>검색</Send>
                </div>
                <Info>
                    {photo}
                    {info}
                </Info>

            </Fragment>
        );
    }
}


class Picture extends React.Component {
    render() {
        return(
            <img src={`https://art.hearthstonejson.com/v1/render/latest/koKR/512x/${this.props.id}.png`} style={{float: 'left'}} alt={this.props.id }/>
        );
    }
}

const Id = styled.input`
    height: 100%;
    width: 65%;
    font-size: 60px;
    float: left;
    border-radius: 4px;
    border-width: 1;
    font-family: 'Yeon Sung', cursive;
`

const Send = styled.button`
    height: 100%;
    width: 30%;
    border: none;
    float: right;
    border-radius: 4px;
    background-color: #e99340;
    margin: 0;
    padding: 0;
    font-size: 50px;
    font-family: 'Yeon Sung', cursive;
`

const Info = styled.div`
    width: 80%;
    height: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    font-family: 'Yeon Sung', cursive;
`

const Info2 = styled.div`
    margin-top: 130px;
   width: 50%;
   height: 80%;
   float: right;
   display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    font-size: 32px;
    font-family: 'Yeon Sung', cursive;
`

export default App;
