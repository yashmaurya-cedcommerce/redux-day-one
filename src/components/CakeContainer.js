import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div className='mainCakeDiv'>

            <p className='currentStateHeading'>Initial number of cakes in store : 10</p>

            <p className='currentStateHeading'> Current Number of cakes in store : {props.numberOfCakes}</p>

            {(props.numberOfCakes === 0)?<button className='buyCakeBtn'>Buy Cake</button>:<button className='buyCakeBtn' onClick={props.buyCake}>Buy Cake</button>}

            {(props.numberOfCakes === 0)?<><p className='errorMsg'>Can't buy stock is over</p></>:''}
        
        </div>
    )
}

const mapStateToProps = state=>
{
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps=dispatch=>
{
    return {
        buyCake: ()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)