import React from 'react';

class Bookings extends React.Component {
  state = {
    list: [],
    distancia: '',
    tiempo: '',
    resultado: ''
  };
  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { distancia, tiempo, list } = this.state;

    if ( distancia && tiempo) {
      const id = list.length + 1;
      var arreglo = this.state.data;
      const resultado =  distancia/tiempo;
   
      this.setState({
        list: [...list, { id, distancia, tiempo, resultado }],
        
        pax: '',
        price: ''

      });
    } else {
   
      console.log('Please complete all fields');
    }

    event.preventDefault();
  };
  eliminar = () => {
    var opcion = true;
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state;
          arreglo.splice(contador, 1);
        
        contador++;
      
      this.setState({ state: false });
    }
  };
  render() {
    const { distancia, tiempo, list, resultado } = this.state;
    return (
      <>
   <center>
 <div class="flex justify-around my-6 mx-20 px-25 bg-light white-900">
    <div class="col m-3">
        <div className=" inputs_tours">
          <form onSubmit={this.handleSubmit} className="form_tours">
            <div className="form-group">
              <label htmlFor="distancia">
                <h5 class="text-white">Ingrese la distancia:</h5>
                <input
                  type="number"
                  className="form-control"
                  id="distancia"
                  placeholder="Ingrese la distancia"
                  name="distancia"
                  value={distancia}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="form-group room">
              <label htmlFor="tiempo">
              <h5 class="text-white">Ingrese el  tiempo:</h5>
                <input
                  type="number"
                  className="form-control"
                  id="tiempo"
                  placeholder="Ingrese el tiempo"
                  name="tiempo"
                  value={tiempo}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="pax_btn">
            <button  className="btn btn-primary">
                Calcular
              </button>

              
            </div>
          </form>
        </div>
        <br></br>

    </div>
    <div class="col m-2">
   
    <div className="form-group room">
              <label htmlFor="tiempo">
              <h3 class="text-white">Tabla de Resultados:</h3>
              </label>
            </div>
        <br></br>
        <div className="table_tours">
          <table className="table table-danger ">
            <thead>
              <tr>
                
                <th scope="col">Distancia</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Velocidad</th>
                
              </tr>
            </thead>
            <tbody className='table-light'>
              {list.map(item => (
                <tr key={item.id}>
                  <td>{item.distancia}</td>
                  <td>{item.tiempo}</td>
                  <td>{item.resultado}</td>
                  
                </tr>
              ))}
              
            </tbody>
            
          </table>
          
        </div>
        
              <button className='btn btn-danger' onClick={()=> window.location.reload()}>Eliminar</button>
    </div>
 </div>  
 </center>       
      </>
    );
  }
}
export default Bookings;