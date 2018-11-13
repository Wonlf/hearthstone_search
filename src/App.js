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
    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/', {name : this.state.name})
            .then(res=> {
                this.setState({
                    res: true,
                    name2: res.data.name,
                    id: res.data.id,
                    cost: res.data.cost,
                    cardClass: res.data.cardClass,
                    flavor: res.data.flavor,
                    rarity: res.data.rarity,
                    type: res.data.type,
                })
                if(this.state.flavor == null){
                    this.setState({
                        flavor: '없음'
                    })
                }
                switch (res.data.cardClass) {
                    case 'WARRIOR':
                        this.setState({
                            cardClass: '전사'
                        })
                        break;
                    case 'SHAMAN':
                        this.setState({
                            cardClass: '주술사'
                        })
                        break;
                    case 'ROGUE':
                        this.setState({
                            cardClass: '도적'
                        })
                        break;
                    case 'PALADIN':
                        this.setState({
                            cardClass: '성기사'
                        })
                        break;
                    case 'HUNTER':
                        this.setState({
                            cardClass: '사냥꾼'
                        })
                        break;
                    case 'DRUID':
                        this.setState({
                            cardClass: '드루이드'
                        })
                        break;
                    case 'WARLOCK':
                        this.setState({
                            cardClass: '흑마법사'
                        })
                        break;
                    case 'MAGE':
                        this.setState({
                            cardClass: '마법사'
                        })
                        break;
                    case 'PRIEST':
                        this.setState({
                            cardClass: '사제'
                        })
                        break;
                    case 'NEUTRAL':
                        this.setState({
                            cardClass: '중립'
                        })
                        break;
                    default:
                        this.setState({
                            cardClass: '없음'
                        })
                }

                switch (res.data.rarity) {
                    case 'FREE':
                        this.setState({
                            rarity: '기본 카드'
                        })
                        break;

                    case 'COMMON':
                        this.setState({
                            rarity: '일반 카드'
                        })
                        break;

                    case 'RARE':
                        this.setState({
                            rarity: '희귀 카드'
                        })
                        break;

                    case 'EPIC':
                        this.setState({
                            rarity: '영웅 카드'
                        })
                        break;

                    case 'LEGENDARY':
                        this.setState({
                            rarity: '전설 카드'
                        })
                        break;
                    default:
                        this.setState({
                            rarity: '없음 카드'
                        })
                }

                switch (res.data.type) {
                    case 'MINION':
                        this.setState({
                            type: '하수인'
                        })
                        break;

                    case 'SPELL':
                        this.setState({
                            type: '주문'
                        })
                        break;

                    case 'HERO':
                        this.setState({
                            type: '영웅'
                        })
                        break;

                    default:
                        this.setState({
                            type: '없음'
                        })
                }

                switch (res.data.set) {
                    case 'EXPERT1':
                        this.setState({
                            pack: '오리지널'
                        })
                        break;

                    case 'NAXX':
                        this.setState({
                            pack: '낙스라마스의 저주'
                        })
                        break;

                    case 'GVG':
                        this.setState({
                            pack: '고블린 대 노움'
                        })
                        break;

                    case 'BRM':
                        this.setState({
                            pack: '검은바위 산'
                        })
                        break;

                    case 'TGT':
                        this.setState({
                            pack: '대 마상시합'
                        })
                        break;

                    case 'LOE':
                        this.setState({
                            pack: '탐험가 연맹'
                        })
                        break;

                    case 'OG':
                        this.setState({
                            pack: '고대 신 속삭임'
                        })
                        break;

                    case 'KARA':
                        this.setState({
                            pack: '한여름 밤의 카라잔'
                        })
                        break;

                    case 'GANGS':
                        this.setState({
                            pack: '비열한 거리의 가젯잔'
                        })
                        break;

                    case 'UNGORO':
                        this.setState({
                            pack: '운고로를 향한 여정'
                        })
                        break;

                    case 'ICECROWN':
                        this.setState({
                            pack: '얼어붙은 왕좌의 기사들'
                        })
                        break;

                    case 'LOOTAPALOOZA':
                        this.setState({
                            pack: '코볼트와 지하 미궁'
                        })
                        break;

                    case 'GILNEAS':
                        this.setState({
                            pack: '마녀'
                        })
                        break;

                    case 'BOOMSDAY':
                        this.setState({
                            pack: '박사 붐의 폭심만만 프로젝트'
                        })
                        break;

                    default:
                        this.setState({
                            pack: '없음'
                        })
                }
            })

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
                <form style={{width: '80%', height: '25%', margin: 'auto', marginTop: '10px'}}>
                    <Id type={'text'} placeholder={'카드이름'} name={'name'} onChange={this.handleChange}/>
                    <Send type={'submit'} onClick={this.handleSubmit}>검색</Send>
                </form>
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
