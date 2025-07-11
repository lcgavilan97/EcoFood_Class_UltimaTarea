import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Formulario } from './components/Formulario';
import AgregarProductoModal from './components/AgregarProductoModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [productos, setProductos] = useState([
    { Titulo: 'LULOIDE', Imagen: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY', Descripcion: 'Notebook' },
    { Titulo: 'LULO', Imagen: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U', Descripcion: 'Perrito' },
    { Titulo: 'LULACIO', Imagen: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI', Descripcion: 'Cielo' },
    { Titulo: 'LULEIRO', Imagen: 'https://fastly.picsum.photos/id/243/200/300.jpg?blur=2&hmac=gBiL6Ifh1TSXQqKmrSq_9O8jc_ROZbeD1HIOnzD_0Y0', Descripcion: 'Bosque' }
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleAgregarProducto = (producto) => {
    setProductos([
      ...productos,
      {
        Titulo: producto.titulo,
        Imagen: producto.imagen,
        Descripcion: producto.descripcion,
      },
    ]);
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-start p-0 position-relative"
      style={{
        background: 'radial-gradient(circle at 60% 40%, rgba(40,167,69,0.22) 0%, rgba(40,167,69,0.10) 40%, rgba(207,243,207,0.7) 100%)',
        minHeight: '100vh',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo de bosque difuminada */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Bosque difuminado"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(8px) brightness(0.7) opacity(0.5)',
          zIndex: 0,
        }}
      />
      {/* Figuras decorativas difuminadas verdes */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(40,167,69,0.25) 60%, transparent 100%)',
        filter: 'blur(30px)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-120px',
        right: '-120px',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(40,167,69,0.18) 60%, transparent 100%)',
        filter: 'blur(40px)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '70%',
        width: '180px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(40,167,69,0.12) 60%, transparent 100%)',
        filter: 'blur(30px)',
        zIndex: 1,
      }} />
      <div className="container py-4 position-relative" style={{zIndex: 2}}>
        <Header />
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Lista de Productos</h2>
          <button
            className="btn btn-success shadow-sm"
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>Agregar Producto
          </button>
        </div>
        <AgregarProductoModal
          show={showModal}
          setShow={setShowModal}
          onAgregarProducto={handleAgregarProducto}
        />
        <div className="row g-4">
          {productos.map((var1, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <ProductCard
                title={var1.Titulo}
                image={var1.Imagen}
                description={var1.Descripcion}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


