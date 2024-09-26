import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductModal = ({ show, handleClose, product }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} className="img-fluid mb-3" />
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Descripcion:</strong> {product.description}</p>

        <Form onSubmit={handleCommentSubmit}>
          <Form.Group controlId="comment">
            <Form.Label>Deja un comentario</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={comment} 
              onChange={handleCommentChange} 
              placeholder="Escribe tu comentario aqui... (por el momento no se almacena de ninguna manera)"
            />
          </Form.Group>
          <Button variant="primary" type="submit">Comentar</Button>
        </Form>

        <div className="mt-4">
          <h5>Comentarios:</h5>
          {commentsList.length > 0 ? (
            <ul>
              {commentsList.map((c, index) => (
                <li key={index}>{c}</li>
              ))}
            </ul>
          ) : (
            <p>No hay ningun comentario.</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        <Button variant="primary">Agregar al carrito</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;


