import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function ArticleSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        dataInformasi();
    }, []);

    async function getDataById(id) {
        return fetch(url+'/api/informasi/?id='+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
    }

    const dataInformasi = async () => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const response = await getDataById(id)
        // console.log(response.data)
        setData(response.data)
    }

    return (
      <section className='container my-5 p-5'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <article>
                        {data.map(row => (
                            <React.Fragment key={row.id}>
                            <header class="mb-1">
                                <h1 class="fw-bolder mb-1">{row.judul}</h1>
                                <div class="text-muted fst-italic mb-2">Diunggah {new Date(row.tanggal).toDateString()}</div>
                            </header>
                            <section class="mb-5">
                                <p class="fs-5 mb-4">{row.isi}</p>
                            </section>
                        </React.Fragment>
                        ))}
                    </article>            
                </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default ArticleSection