import React, { useState } from 'react';
import './Home.css';
import { FaHome, FaPaw, FaSearch, FaBell, FaEnvelope, FaUserCircle, FaPlus, FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: "LunaMãe",
            handle: "@lunamae",
            avatar: "https://i.pravatar.cc/150?img=1",
            content: "Luna aprendeu um truque novo hoje! 🐕 Agora ela consegue dar a patinha e deitar! Muito orgulhosa da evolução dela #PetLife #DogTraining",
            image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            likes: 142,
            comments: 23,
            shares: 12,
            timestamp: "2h"
        },
        {
            id: 2,
            user: "CatLover",
            handle: "@catlover",
            avatar: "https://i.pravatar.cc/150?img=2",
            content: "Meu gatinho dormindo de forma mais fofa! 😻 Ele sempre escolhe os lugares mais inusitados para tirar uma soneca. #GatinhoFofo #CatNap",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            likes: 256,
            comments: 45,
            shares: 18,
            timestamp: "4h"
        },
        {
            id: 3,
            user: "DogTrainer",
            handle: "@dogpro",
            avatar: "https://i.pravatar.cc/150?img=3",
            content: "Dica do dia: Sempre recompense seu cachorro após um comportamento positivo! A consistência é a chave para um treinamento efetivo 🦮 #DogTraining #PetTips",
            image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            likes: 489,
            comments: 67,
            shares: 92,
            timestamp: "5h"
        },
        {
            id: 4,
            user: "VetCarol",
            handle: "@vetcarol",
            avatar: "https://i.pravatar.cc/150?img=4",
            content: "Lembrando a todos: Mantenham a vacinação dos seus pets em dia! 💉 Marquem uma consulta com seu veterinário. #PetCare #VetLife",
            likes: 723,
            comments: 89,
            shares: 156,
            timestamp: "6h"
        }
    ]);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="home-container">
            <button className="mobile-menu-button" onClick={() => setMenuOpen(true)}>
                <FaBars />
            </button>

            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="logo">
                        <FaPaw className="logo-icon" />
                        <span>Pettit</span>
                    </div>
                    <button className="close-menu" onClick={() => setMenuOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <nav>
                    <a href="#" className="active"><FaHome /> <span>Início</span></a>
                    <a href="#"><FaSearch /> <span>Explorar</span></a>
                    <a href="#"><FaBell /> <span>Notificações</span></a>
                    <a href="#"><FaEnvelope /> <span>Mensagens</span></a>
                    <a href="#"><FaUserCircle /> <span>Perfil</span></a>
                    <button className="post-button">
                        <FaPlus /> <span>Novo Post</span>
                    </button>
                </nav>
            </div>

            {menuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
            )}

            <div className="main-content">
                <div className="feed-header">
                    <div className="feed-tabs">
                        <div className="tab active">
                            <span>Para você</span>
                        </div>
                        <div className="tab">
                            <span>Seguindo</span>
                        </div>
                    </div>
                </div>

                <div className="create-post">
                    <img src="https://i.pravatar.cc/150?img=1" alt="User Avatar" className="user-avatar" />
                    <div className="post-input">
                        <textarea placeholder="O que seu pet está fazendo?" />
                        <div className="post-actions">
                            <div className="media-actions">
                                <button className="upload-button">
                                    <FaPlus /> Foto
                                </button>
                                <button className="upload-button">
                                    <FaPlus /> Vídeo
                                </button>
                                <button className="upload-button">
                                    <FaPlus /> GIF
                                </button>
                            </div>
                            <button className="submit-post">
                                Postar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="posts-feed">
    {posts.map(post => (
        <div key={post.id} className="post">
            <img src={post.avatar} alt={post.user} className="user-avatar" />
            <div className="post-content">
                <div className="post-header">
                    <span className="user-name">{post.user}</span>
                    <span className="user-handle">{post.handle}</span>
                    <span className="post-time">{post.timestamp}</span>
                </div>
                <p className="post-text">{post.content}</p>
                {post.image && (
                    <img src={post.image} alt="Post" className="post-image" />
                )}
                <div className="post-actions">
                    <button><FaEnvelope /> {post.comments}</button>
                    <button>🔄 {post.shares}</button>
                    <button>❤️ {post.likes}</button>
                </div>
            </div>
        </div>
    ))}
</div>
            </div>

            <div className="right-sidebar">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Buscar no Pettit" />
                </div>
                <div className="trending-section">
                    <h3>Trending Pets</h3>
                    <div className="trending-topics">
                        <div className="topic">
                            <span className="tag">#CatLife</span>
                            <span className="posts-count">52.3k posts</span>
                            <span className="trend-description">Gatinhos dominando a internet!</span>
                            <div className="topic-preview">
                                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" alt="Cat Preview" />
                                <div className="topic-preview-info">
                                    43 novas fotos nas últimas 2 horas
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <span className="tag">#DogLove</span>
                            <span className="posts-count">42.1k posts</span>
                            <span className="trend-description">Os melhores momentos com nossos cães</span>
                            <div className="topic-preview">
                                <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6" alt="Dog Preview" />
                                <div className="topic-preview-info">
                                    28 novos vídeos de truques hoje
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <span className="tag">#PetCare</span>
                            <span className="posts-count">35.8k posts</span>
                            <span className="trend-description">Dicas de cuidados com pets</span>
                            <div className="topic-preview">
                                <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e" alt="Pet Care Preview" />
                                <div className="topic-preview-info">
                                    15 novas dicas de veterinários
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <span className="tag">#BirdLife</span>
                            <span className="posts-count">28.4k posts</span>
                            <span className="trend-description">Passarinhos fazendo sucesso</span>
                            <div className="topic-preview">
                                <img src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f" alt="Bird Preview" />
                                <div className="topic-preview-info">
                                    32 novos cantos gravados hoje
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="who-to-follow">
                    <h3>Quem Seguir</h3>
                    <div className="follow-suggestions">
                        <div className="suggestion">
                            <img src="https://i.pravatar.cc/150?img=5" alt="Vet Profile" />
                            <div className="suggestion-info">
                                <span className="name">Dr. Pet</span>
                                <span className="handle">@drpet</span>
                            </div>
                            <button>Seguir</button>
                        </div>
                        <div className="suggestion">
                            <img src="https://i.pravatar.cc/150?img=6" alt="Pet Shop" />
                            <div className="suggestion-info">
                                <span className="name">Pet Shop Feliz</span>
                                <span className="handle">@petfeliz</span>
                            </div>
                            <button>Seguir</button>
                        </div>
                    </div>
                </div>
            </div>

            <button className="mobile-post-button">
                <FaPlus />
            </button>
        </div>
    );
};

export default Home;