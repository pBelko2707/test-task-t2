import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { products } from '../../data/products';
import IconComponent from '../IconComponent/IconComponent';
import { Product } from '../../types/products';

const ProductCard = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoverLocked, setHoverLocked] = useState<number | null>(null);

  const handleCardClick = (productId: number) => {
    if (products.find((p) => p.id === productId)?.disabled) return;

    setSelectedCards((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
    setHoverLocked(productId);
  };

  const handleMouseEnter = (productId: number) => {
    if (products.find((p) => p.id === productId)?.disabled) return;
    if (hoverLocked === productId) return;
    setHoveredCard(productId);
  };

  const handleMouseLeave = (productId: number) => {
    setHoveredCard(null);
    if (hoverLocked === productId) {
      setHoverLocked(null);
    }
  };

  const getCardState = (product: Product) => {
    if (product.disabled) return 'disabled';

    const isSelected = selectedCards.includes(product.id);
    const isHovered = hoveredCard === product.id;
    const isHoverLocked = hoverLocked === product.id;

    if (isSelected && isHoverLocked) return 'selected';
    if (isSelected && isHovered) return 'selectedHover';
    if (isSelected) return 'selected';
    if (isHovered) return 'hover';
    return 'default';
  };

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productContainer}>
          <div className={`${styles.line} ${styles[getCardState(product)]}`}>
            <IconComponent />
          </div>
          <div
            className={`${styles.productCard} ${styles[getCardState(product)]}`}
            onClick={() => handleCardClick(product.id)}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={() => handleMouseLeave(product.id)}
          >
            <div className={styles.cardContent}>
              <div>
                <span
                  className={`${styles.subtitle} ${
                    getCardState(product) === 'selectedHover'
                      ? styles.subtitleHoverSelected
                      : ''
                  }`}
                >
                  {selectedCards.includes(product.id) &&
                  hoveredCard === product.id &&
                  !hoverLocked
                    ? product.hoverText
                    : product.subtitle}
                </span>
                <h2
                  className={`${styles.title} ${styles[getCardState(product)]}`}
                >
                  {product.title}
                </h2>
                <p
                  className={`${styles.description} ${styles[getCardState(product)]}`}
                >
                  {product.description}
                </p>
              </div>
              <div
                className={`${styles.features} ${styles[getCardState(product)]}`}
              >
                <div>
                  <span>{product.portions.count} </span>
                  {product.portions.text}
                </div>
                <div>
                  <span>{product.gift.count} </span>
                  {product.gift.text}
                </div>
                {product.review && <div>{product.review}</div>}
              </div>
              <div
                className={`${styles.weight} ${styles[getCardState(product)]}`}
              >
                {product.weight} <span>кг</span>
              </div>
            </div>
            <div className={`${styles.image} ${styles[getCardState(product)]}`}>
              <img
                src={`${process.env.PUBLIC_URL}/images/Photo.png`}
                alt="cat"
              />
            </div>
          </div>
          <div className={styles.bottomText}>
            {product.disabled ? (
              <span className={styles.disabledText}>
                {product.disabledText}
              </span>
            ) : selectedCards.includes(product.id) ? (
              <span className={styles.selectedText}>
                {product.selectedText}
              </span>
            ) : (
              <span>
                {product.bottomText}
                <button
                  className={styles.buyButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(product.id);
                  }}
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={() => handleMouseLeave(product.id)}
                >
                  купи.
                </button>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
