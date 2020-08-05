import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.svg';
import backIcon from '../../assets/img/icons/back.svg';
import './styles.css'

//Definir as Propriedades
interface PageHeaderProps {
  title: string;
}

/**
 * Uma Arrow Function para aceitar,
 * Propridade de Title nas Teachers.
 * 
 * FC = Function Component
 */

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
      </div>
    </header>
  );
}

export default PageHeader;