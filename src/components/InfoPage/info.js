import React, {Component} from 'react';
import Hiilijalanjalki from './hiilijalanjalki.png';


class Info extends Component {
    render() {
        return (
            <div className="info">
            <h1 className="header-header"> Ilmastonmuutos - Aikamme suurin maailmanlaajuinen kriisi</h1><br/>
                <p ><em>Ilmastonmuutos ihmisen toiminnan seurauksena on aikamme suurimpia kriisejä. Ilmastonmuutos itsessään ei ole uusi tai ennenkuulumaton tapahtuma, mutta sen nopeus ja suuruus ovat poikkeuksellisia. Ja kaikki tämä on ihmisen edesauttamaa. </em></p>
                <p className="header-text">
                    <h2>Tiesitko, että suomalaisten kulutustottumuksilla tarvitsisimme 3,4 maapalloa kattamaan valintojemme luonnonvarojen tarpeen? </h2>
                    <img className="botti" src={Hiilijalanjalki} circle width="750" height="400"/>
                    <p><em>Jos haluamme säästää luonnonvarojamme myös tuleville sukupolville, meidän tulisi pienentää kulutuksemme muodostamaa hiilijalanjälkeä huomattavasti. Jokainen kulutustamme pienentävä teko on lahja tuleville sukupolville ja maapallon hyvinvoinnille</em></p>
                </p><br/>
            {/*<h1 className="header-header"> Ilmastonmuutos - Aikamme suurin maailmanlaajuinen kriisi</h1><br/>*/}
                {/*<p ><em>Ilmastonmuutos ihmisen toiminnan seurauksena on aikamme suurimpia kriisejä. Ilmastonmuutos itsessään ei ole uusi tai ennenkuulumaton tapahtuma, mutta sen nopeus ja suuruus ovat poikkeuksellisia. Ja kaikki tämä on ihmisen edesauttamaa. </em></p>*/}
            </div>
        )
    }
}

export default Info;