import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=' bg-blue-500 rounded-lg p-5 text-white my-8 flex-col'>
            <h2 className='text-center'>
                <span className=' text-7xl font-semibold'>{price} </span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name} </h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
            <button className=' mt-12 bg-green-600 p-4 rounded-xl w-full font-bold hover:bg-green-900'>Buy Now</button>

        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;