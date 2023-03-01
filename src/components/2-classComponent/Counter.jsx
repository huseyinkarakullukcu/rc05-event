//* ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================
import React from "react"
class Counter extends React.Component{
    constructor(props){
        super(props)
        //State başlangıç değeri verdik
        this.state = {
            count:0,
        }
    }

increment = ()=>{
    this.setState({
        count: this.state.count+1
    })
}
decrement = ()=>{
    this.setState({
        count: this.state.count-1
    })
}


render(){
    return(
        <div className="container text-center mt-4">
            <h2 className="text-danger">Class Components</h2>
            <h1 className="display-4">{this.state.count}</h1>
            <button className="btn btn-success" onClick={this.increment}>INC</button>
            <button className="btn btn-danger" onClick={()=>this.setState({count:0})}>CLR</button>
            <button className="btn btn-warning" onClick={this.decrement}>DEC</button>

        </div>
    )
}
}
export default Counter