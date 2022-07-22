import React from 'react'

const ListaCampanhas = () => {
  return (
    <div className="col-lg-12">
        <div className='cadastrar'>
        <button className='btn btn-primary'>Criar campanha</button>
        </div>
        <br/>
        <div className="card">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-responsive-md">
                        <thead>
                            <tr>
                                <th><strong>Nº</strong></th>
                                <th><strong>NOME</strong></th>
                                <th><strong>DT. INÍCIO</strong></th>
                                <th><strong>DT. TÉRMINO</strong></th>
                                <th><strong>OPÇÕES</strong></th>
                                <th></th>
                            </tr> 
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListaCampanhas