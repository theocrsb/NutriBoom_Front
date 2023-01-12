import './Connexion.css';
import { Link } from 'react-router-dom';
import ConnexionButton from '../components/ConnexionButton';
import { useState, useEffect, FormEvent, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth-context';
import './Mdp.css';

const Mdpx = () => {
  const { onAuthChange } = useContext(AuthContext);
  const [mailState, setMailState] = useState<string>();
  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  let recupToken: string | null;

  const mailFunction = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setMailState(e.currentTarget.value);
  };
  const handleLoginForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log('button form clicked');
    console.log(mailState);

    await axios
      .post('http://localhost:8080/api/users/reset/password', {
        email: mailState,
      })
      .then((response) => {
        console.log(response);
        setMessage('Email envoyé !');
      })
      .catch((error) => {
        console.log('connexion impossible', error.response.data.message);
        setMessage('Email inexistant');
      });
  };

  // useEffect pour tester les states car ils sont asynchrones//
  //et affichent avant re-render une première valeur undefined//
  useEffect(() => {
    console.log('mail dans useEffect', mailState);
  });

  return (
    <div className='fondCarotte'>
      <div className='textConnect'>
        <h1>Tu as oublié ton mot de passe?</h1>

        <Link className='linkSub' to='/suscribe'>
          <div className='lienInscription'>
            <h6>Entre ton email</h6>
            <p>
              Tu recevras dans ta boite de reception un lien pour te créer un
              nouveau mot de passe
            </p>
          </div>
        </Link>
      </div>
      {/* <div> */}
      {/* <form className='formConnexion' onSubmit={handleLoginForm}>
          <div className='mb-3'>
            <label htmlFor='inputMail' className='htmlForm-label' />
            <input
              type='mail'
              className='htmlForm-control'
              id='inputMail'
              placeholder='mail'
              onInput={mailFunction}
            />
          </div> */}
      {message === 'Email envoyé !' ? (
        <div className='container-message'>
          <p className='message'>{message}</p>
        </div>
      ) : message === 'Email inexistant' ? (
        <>
          <form className='formConnexion' onSubmit={handleLoginForm}>
            <div className='container-form'>
              <label htmlFor='inputMail' className='htmlForm-label' />
              <input
                type='mail'
                className='htmlForm-control'
                id='inputMail'
                placeholder='mail'
                onInput={mailFunction}
              />
              <p className='message-erreur'>{message}</p>
              <button type='submit' className='btn inscription'>
                Envoyer
              </button>
            </div>

            {/* <div className="container-message"> */}

            {/* </div> */}
          </form>
        </>
      ) : (
        <form className='formConnexion' onSubmit={handleLoginForm}>
          <div className='container-form'>
            <label htmlFor='inputMail' className='htmlForm-label' />
            <input
              type='mail'
              className='htmlForm-control'
              id='inputMail'
              placeholder='mail'
              onInput={mailFunction}
            />
            <button type='submit' className='btn inscription'>
              Envoyer
            </button>
          </div>
        </form>
      )}
      {/* </div> */}
    </div>
  );
};
export default Mdpx;
