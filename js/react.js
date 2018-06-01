import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Link} from 'react-router-dom';
class App extends React.Component{
    render(){
        return(
            <div>
                <div  class="icons">
                    <Link to="/market"><div class="hover"><div class="market"></div></div></Link>
                    <Link to="/book"><div class="hover"><div class="book"></div></div></Link>
                    <Link to="/pharmacy"><div class="hover"><div class="pharmacy"></div></div></Link>
                    <Link to="/boy"><div class="hover"><div class="boy"></div></div></Link>
                    <Link to="/barbell"><div class="hover"><div class="barbell"></div></div></Link>
                    <Link to="/atm"><div class="hover"><div class="atm"></div></div></Link>
                    <Link to="/arrow"><div class="hover"><div class="arrow"></div></div></Link>
                </div>
                <Switch>
                    <Route  path="/market" component={Empty}/> 
                    <Route  path="/book" component={Empty}/>
                    <Route exact path="/pharmacy" component={Where}/>
                    <Route  path="/boy" component={Empty}/>
                    <Route  path="/barbell" component={Empty} />
                    <Route  path="/atm" component={Empty}/>
                    <Route  path="/arrow" component={Empty}/>
                </Switch>
            </div>
        );
    }
}


class Where extends React.Component{
    render(){
        return(
            
            <div class="list">
                <div class="list2">
                    <h3>Vaistinės ir gydymo įstaigos</h3>
                    <div>Poliklinika<span class="b">900</span></div>
                    <div>Vaistinė "Pilanta"<span class="b">600</span></div>
                    <div>Šeimos sveikatos namai "Gyda"<span class="b">750</span></div>
                    <div>Marijos vaistinė<span class="b">1200</span></div>
                    <div>Eurovaistinė (prekybos centre "Pupa")<span class="b">800</span></div>
                    <div>B. Kiselienės sveikatingumo studija<span class="b">1200</span></div>
                </div>
            </div>
        
        )
    }
}
class Empty extends React.Component{
    render(){
        return(
            
            <div class="list">
                <div class="list2">
                    <h3>Vaistinės ir gydymo įstaigos</h3>
                    <div>Poliklinika<span class="b">900</span></div>
                    <div>Vaistinė "Pilanta"<span class="b">600</span></div>
                    <div>Šeimos sveikatos namai "Gyda"<span class="b">750</span></div>
                    <div>Marijos vaistinė<span class="b">1200</span></div>
                    <div>Eurovaistinė (prekybos centre "Pupa")<span class="b">800</span></div>
                    <div>B. Kiselienės sveikatingumo studija<span class="b">1200</span></div>
                </div>
            </div>
        
        )
    }
}
ReactDOM.render(<Router><App /><Router/>, document.getElementById('pleses'));