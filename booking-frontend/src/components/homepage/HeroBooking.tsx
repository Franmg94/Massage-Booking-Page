
import massageImage from '../../assets/images/room-2.webp'

const HeroBooking: React.FC = () => {
  return (
    <section className="cover bg-center h-screen w-screen bg-relative " style={{backgroundImage:`url(${massageImage})`}}>
      <div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
        <div className='text-center text-white p-6 rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold mb-4'>
                Massage Treatment Berlin
            </h1>
            <div className='flex justify-center space-x-4'>
                <button 
                    onClick={() => window.location.href = '/booking'}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Book Now
                </button>
                <button
                    onClick={() => window.location.href = '#treatments'}
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                >
                    Treatments
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBooking;
