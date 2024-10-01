
import {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Data = [
    {
        id:1,
        name:"The Kandahar Hijack",
        category:"tvshows",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWWCLODooJEzEC-s6h-mxyoF7uULkMgzZUNqk9b0DEQF1GbeFo7StAZhvQWgstxCx8fbQAH1A2AzORtdFuHoAcNds4DBdo2DCQRUsGQBai4fXbEQcyQ15UGZ2vDSg7K7JFpd.webp?r=e07"
    }, {
        id:2,
        name:"Emily in paris",
        category:"tvshows",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABctgvY7livNhiVx6aTn_1Y7ftv0C73CH_SodpnLGjDgD20ztXK1Z68xHBhGTXx6g7mjXh_pX6B4GQsgLUkgbz13Md9qtytxwOFuKhTW1I2enDknAgBJ4H8_Kf6aRVTuj5pij.webp?r=724"
    }, {
        id:3,
        name:"The Perfect Couple",
        category:"tvshows",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfV15xFp3fkVQQhuFv-JqFBRY_hpOWRdpxSdvNpWFhT-hm5LHD7MFpvA76FHUltaXc-OeBFdJeK5w0UTq7dxsG69GbAZpI-pdaIVqR3iaeOetnK0grg0ZMUN0U5JkwiAYCQP.webp?r=8d6"
    }, {
        id:4,
        name:"Tribhuvan Mishra",
        category:"tvshows",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaBlp9GxrduZZyBp3cGHiGDt6yzDvSON7-Knk-AfZxqGmTiqLgowxlXWAQ-YZOwUB4XT0Y6PLmGeJC3q_Z5kAbRHoauvfwXlABvGlRc5ptvbHimyfFu7qE3NveldNVEToqzm.webp?r=e73"
    },

    // Dad
    {
        id:5,
        name:"Sector",
        category:"movies",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQrzLcHNlvfo5KKbUZ5O7KeEEy0e8-ZiHJqGoPnjTw48dJ3w8VCbsirkDCAiCfOGyWem6EKMdn7fwqHsLSk3z4myTFXmIF_GDP8EDTuW_-yM5IuLtTyiJKJNcBGXxoKsM-se8X39AOK8VpjOgClCw_nXXntdCRxj8y0viVUsED8I8sfRrVr1pXE50tS640F8zaNcvpo6A_OX2mLpLbI7I9KLYNQBqz1gsMqwmo5KUaYx-u5SQimn2kmvMv6Wchvshu0m75gyZ2bn-lbLNlPAHjd7LzUhqQfH2IRs2MRhpmxttpQt1LWlPgpplSkQthawB3y9eehwSYTZchjW163K0DIKnQsSnnHoVf-vM_4qA28_qz5o3zY.webp?r=7ec"
    }, {
        id:6,
        name:"Mr.Bachchan",
        category:"movies",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZvqt5t5aJ88PPCFInntcbD8gHHMvN0pmFX5ZvX--9YMvlGyx9XCbzanO3I80IVt-olk7fhpKf6HlzBJva0P_08NJAjqkDo41UusZGTnKn7jrQNhq5mudO7NS8g30cPBPMfBydAsDb0ci2I0H6hEb4tTHbNNn1EuknuFrKLFzwxW00joWk8ow4eJLDo9baqn6izu5xwHbWSqY1G4jwLLZAP_x5AWYYtrQGITw4fQ3us6doKS7WFDyAuMxRmKLCLVpJtanwZ_wlwx2o6mtXwulv9REhdL.webp?r=d6c"
    }, {
        id:7,
        name:"Bad Boys",
        category:"movies",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaGv1XpomeLrMPrQVNvRUC2M4MAURPNUVVIKMkM_3hZrLpKS4kwhZUyRQiid_-V9mrUKdhxcrPgK11vKPyeOG9cmrgyWW6cUbrOPdCkhZgZZ0eDaWFeI2D9sbt9tRlsCMRIzfcUganNkuCg9nJZbGo3vijZlc0hl9QrWrYErckSTHsoJDopyOZ2N306eiaGd57lXn-PEKQbskJaw2MQPgaEPyiAkBKsBlUnLTTD9UG5GHllP0biB1A9hiwzr2KUJM3RKLJ1jO2n2dc9YZLHFuRzIR00D.webp?r=487"
    }, {
        id:8,
        name:"Rebel Ridge",
        category:"movies",
        img:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWc56mnXdZ2OsapqOo2SATT8OeEig2l5lWb_Brwoj6tMA8VqleqFQSJjko5na-DhmDpPSMmT_d9xu2So9BLq-quWVV6K022-YIUnBct9CCZPMxe7QclBe6hc9CFrfKS8MDayl7zs95Cs2G_-f3BrjPyt9K86_zOC1lauq9AFScalQb9s7w3seNNN4iXOC-HHX7WagCJPumSWu769nGon1NUcTQvzOC_uiQRortFfOPp6BNY4kYaMEdUhjQO7Uz9-2ZqB2RGwNeHAIOrN3BVQ-ZVKRCvYtPSOnJvo154v7eoXfkajnRX8oP1N.webp?r=5c0"
    },
   
]



function Home() {
    const [displayData, setDisplayData] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');


    const handleSubmit = (category) => {
        const filteredData = Data.filter(item => item.category === category); 
        setDisplayData(filteredData); 
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); 
        const filteredData = Data.filter(item => 
            item.name.toLowerCase().includes(e.target.value.toLowerCase()) 
        );
        setDisplayData(filteredData); 
    };

  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' width={200} height={60}></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex">
        <input class="form-control pe-5 me-2 bg-dark text-white" type="search"  value={searchTerm} 
                                onChange={handleSearch} placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit" onSubmit={handleSearch}>Search</button>
      </form>
    </div>
  </div>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0 me-5">
  <li className="nav-item">
        <NavLink to="/login" className="nav-link fw-bold me-2" aria-current="page" >Login</NavLink>
        </li>
                               
        <li className="nav-item">
            <NavLink to="/register" className="nav-link fw-bold me-5"  aria-current="page">Register</NavLink>
        </li>
      </ul>
    </nav>
   <div>
        {/* Sidebar */}
      <div className="sidebar d-flex justify-content-center align-items-center">
        <h2>Unlimited movies, <br></br> TV shows and more</h2>
      </div>
      
   </div>

   <div className='bg-dark ps-5 pt-5 pb-5'>
          <div classNameName='continer row'>
          <h3 className='text-white'>Trending Now</h3>
            <div className='col'>
              <div className='btn'>
                <button onClick={()=>handleSubmit('movies')} className='btn btn-outline-light me-3'>Movies</button>
                <button onClick={()=>handleSubmit('tvshows')} className='btn btn-outline-light'>TV Shows</button>
              </div>
            </div>
            <div className='d-flex justify-content-center pt-4'>
            <div className='col-10 d-flex justify-content-center'>
            {
              displayData.map((v)=>(
                    <div className="card col-3 me-4">
                      <img src={v.img} className="card-img" alt="..."/>
                     
                    </div>
                    
              ))
            }
            </div>
            </div>
          </div>
        </div>
</>
  )
}

export default Home