import React, { useState, useEffect } from 'react';
import ContentItem from './Conteudo';
import Filter from './Filter';
import { mockContents } from '../mockData'; // Ajuste no caminho para o mockData

const Feed = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ category: '', tags: [] });

  // Função para simular fetch com dados fictícios
  const fetchContent = (page = 1, filters = {}) => {
    setLoading(true);
    let filteredContent = mockContents;

    // Filtra por categoria se houver
    if (filters.category) {
      filteredContent = filteredContent.filter(item => item.category === filters.category);
    }

    // Filtra por tags se houver
    if (filters.tags.length > 0) {
      filteredContent = filteredContent.filter(item =>
        filters.tags.every(tag => item.tags.includes(tag))
      );
    }

    // Simula paginação (exibindo 6 itens por vez)
    setContent(prevContent => [...prevContent, ...filteredContent.slice(0, page * 6)]);
    setLoading(false);
  };

  useEffect(() => {
    fetchContent(page, filters);
  }, [page, filters]);

  // Função de scroll infinito
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setContent([]); // Reseta o conteúdo ao aplicar novos filtros
    setPage(1);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      {content.map(item => (
        <ContentItem key={item.id} data={item} />
      ))}
      {loading && <p>Loading more content...</p>}
    </div>
  );
};

export default Feed;






















