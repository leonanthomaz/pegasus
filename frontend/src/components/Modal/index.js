import React, { useState, useContext } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { api } from '../../config/api';
import {AuthContext} from '../../context/AuthContext';

const ModalBox = ({ handleClose, show, user, currentUser }) => {

    const { logout } = useContext(AuthContext)
    const [ values, setValues ] = useState('')
    const [photo, setPhoto] = useState(null);
    const [coverImg, setCoverImg] = useState(null);

    console.log(values)

    const handleChangeValues = (value) => {
        setValues(prevValue => ({
          ...prevValue,
          [value.target.name] : value.target.value
        }))
    }

    const handleUpdate = async () => {
        if (photo) {
            const data = new FormData();
            const fileName = photo.name;
            data.append("name", fileName);
            data.append("file", photo);
            try {
              const res = await api.post("/upload/profile", data)
              if(res){
                await api.put(`/users/${user._id}`, { 
                userId: currentUser._id,
                profilePicture: photo.name,
                })
              }

                window.location.reload()
            } catch (err) {}
        }
        if (coverImg) {
            const data = new FormData();
            const fileName = coverImg.name;
            data.append("name", fileName);
            data.append("file", coverImg);
            try {
                const res = await api.post("/upload/profile", data)
                if(res){
                  await api.put(`/users/${user._id}`, { 
                  userId: currentUser._id,
                  coverPicture: coverImg.name,
                  })
                }
                window.location.reload()
            } catch (err) {}
        }
        try{
          await api.put(`/users/${user._id}`, { 
            userId: currentUser._id, 
            // profilePicture: photo.name,
            // coverPicture: coverImg.name,
            name:  values.name, 
            desc:  values.desc, 
            city:  values.city, 
            relationship:  values.relationship})
            window.location.reload()
        }catch(err){
          console.log(err)
        }
    }

    console.log(user)
    const handleDeleteAcount = async () => {
        try{
            await api.delete(`/users/${user._id}`, {
                userId: currentUser._id,
            })
            logout()
            // window.location.reload('/login')
        }catch(err){
            console.log(err)
        }
    }
    

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar Conta:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control
                    type="file"
                    name="profilePicture"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setPhoto(e.target.files[0])}                
                />

                <Form.Label>Imagem de fundo</Form.Label>
                <Form.Control
                    type="file"
                    name="coverPicture"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setCoverImg(e.target.files[0])}                
                />

                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nome"
                    autoFocus
                    onChange={handleChangeValues}
                />

                <Form.Label>Descrição</Form.Label>
                <Form.Control
                    type="text"
                    name="desc"
                    placeholder="Escreva uma descrição para o perfil..."
                    autoFocus
                    onChange={handleChangeValues}
                />

                <Form.Label>Cidade</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="cidade"
                    autoFocus
                    onChange={handleChangeValues}
                />

                <br/>
                {/* <Form.Label>Relacionamento</Form.Label>
                <Form.Control
                    type="text"
                    name="relationship"
                    placeholder="relacionameto"
                    autoFocus
                    onChange={handleChangeValues}
                /> */}

                <Form.Select 
                    aria-label="Default select example"
                    name="relationship"
                    autoFocus
                    onChange={handleChangeValues}
                >
                    <option>Relacionamento</option>
                    <option value="1">Solteiro</option>
                    <option value="2">Casado</option>
                    <option value="3">Enrolado</option>
                </Form.Select>

                </Form.Group>

            </Form>

            <Modal.Header>
                <Modal.Title>Excluir Conta:</Modal.Title>
            </Modal.Header>

            <Button variant="danger" onClick={handleDeleteAcount}>
                Excluir
            </Button>
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
                Atualizar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBox;