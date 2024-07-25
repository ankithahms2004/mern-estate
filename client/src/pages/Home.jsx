import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset:800,
  once:true,
  duration:1500
});
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <>
    <Header />
    <div className='bg-white'>
      {/* top */}
      

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-4 pt-3 pb-4 text-center'data-aos="zoom-in-left">
            <h2 className='text-4xl font-bold text-center pb-3 text-slate-600 '>Recent offers</h2>
              <h2 className='text-3xl font-semibold text-center pb-3 text-slate-500'>Your castle awaits.. Find your nook soon.!</h2>
              <Link className='text-md text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4' data-aos="slide-right">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-4 pt-3 pb-4 text-center'data-aos="zoom-in-left">
              <h2 className='text-4xl pb-3 font-bold text-slate-600'>Recent places for rent</h2>
              <h2 className='text-3xl font-semibold text-center pb-3 text-slate-500'>Building futures and unlocking possibilities</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4' data-aos="slide-left">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-4 pt-3 pb-4 text-center'data-aos="zoom-in-left">
              <h2 className='text-4xl pb-3 font-bold text-slate-600'>Recent places for sale</h2>
              <h2 className='text-3xl font-semibold text-center pb-3 text-slate-500'>Delivering professional real estate solutions</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4' data-aos="slide-right">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}