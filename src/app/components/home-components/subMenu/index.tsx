'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from 'lucide-react';

export function SubMenu() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {       // para fechar   

    const handleResize = () => {
      if (window.innerWidth > 768) {      // para fechar o menu caso user fizer o resize da pagina
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);  // para desmontar compo

  }, []);

  function toggleMenu() {          // para alterar o estado da variavel
    setIsOpen(!isOpen);            // vai ficar fechando ou abrindo o menu
  };

  return (
    <div className={styles.divSubMenu}>
      <section className={styles.subMenu}>

        <div className={styles.subMenuIcon} onClick={toggleMenu}>
          <Menu size={34} color="#121212" />
          Menu
        </div>

        <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>    

          <li>
            <Link href={"/post/pagina-1"}>
              Pagina 1
            </Link>
          </li>
          
          <li>
            <Link href={"/post/pagina-2"}>
              Pagina 2
            </Link>
          </li>

          {isOpen && (
            <button onClick={toggleMenu} className={styles.closeButton}>
              <X size={27} color="#fff" />              
            </button>
          )}

        </ul>

      </section>
    </div>
  );
}
