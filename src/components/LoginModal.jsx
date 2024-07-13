import logo from '/src/assets/logo/logo.png'
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

export default function LoginModal() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('api/token', {
                username,
                password,
            });

            const { access, refresh } = response.data;

            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            setError(false);

            // Fermer la modal après la connexion réussie
            const modal = document.getElementById('loginModal');
            const modalInstance = new bootstrap.Modal(modal);

            modalInstance.hide();
            // Optionnel : rafraîchir la page ou rediriger l'utilisateur
            window.location.reload();
        } catch (err) {
            console.log(err)
            setError(true);
        }
    };

  return (
    <div className="modal" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="loginModalLabel">  <img className="logo_login" src={logo}/>Se connecter à Dofus Trade</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id="loginForm" onSubmit={handleLogin}>
                        <input type="hidden" id="currentPage" name="current_page" value="{{ request.path }}"/>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Pseudo</label>
                            <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />                            
                            {error && (
                            <span id="passwordError" className="text-danger">
                                Pseudo et/ou mot de passe incorrect.
                            </span>
                            )}
                          </div>
                            <button type="submit" className="btn btn-primary">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
)
}
