import React from 'react';

interface PixelMushroomProps extends React.SVGProps<SVGSVGElement> {
  // Te dejo la opción por defecto en rojo, pero puedes pasarle 'green' para el de 1-Up
  colorVariant?: 'red' | 'green';
}

export default function PixelMushroom({
  colorVariant = 'red',
  className,
  ...props
}: PixelMushroomProps) {
  // Los colores exactos de la paleta clásica
  const capColor = colorVariant === 'green' ? '#43B047' : '#E52521';
  const skinColor = '#FFDCC8'; // Color melocotón del tallo
  const white = '#FFFFFF';
  const black = '#000000';

  return (
    <svg
      viewBox="0 0 16 16"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      // shapeRendering="crispEdges" es el truco vital para que el SVG no intente
      // suavizar los bordes y mantenga ese look 8-bit perfecto al hacerle zoom.
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      {/* 1. CONTORNO Y OJOS (Negro) */}
      <g fill={black}>
        <rect x="4" y="0" width="8" height="1" />
        <rect x="3" y="1" width="1" height="1" />
        <rect x="12" y="1" width="1" height="1" />
        <rect x="2" y="2" width="1" height="1" />
        <rect x="13" y="2" width="1" height="1" />
        <rect x="1" y="3" width="1" height="2" />
        <rect x="14" y="3" width="1" height="2" />
        <rect x="0" y="5" width="1" height="4" />
        <rect x="15" y="5" width="1" height="4" />
        <rect x="1" y="9" width="14" height="1" />
        <rect x="3" y="10" width="1" height="1" />
        <rect x="12" y="10" width="1" height="1" />
        <rect x="2" y="11" width="1" height="1" />
        <rect x="13" y="11" width="1" height="1" />
        <rect x="1" y="12" width="1" height="3" />
        <rect x="14" y="12" width="1" height="3" />
        {/* Ojos */}
        <rect x="6" y="12" width="1" height="2" />
        <rect x="9" y="12" width="1" height="2" />
        <rect x="2" y="15" width="12" height="1" />
      </g>

      {/* 2. SOMBRERO (Rojo o Verde) */}
      <g fill={capColor}>
        <rect x="4" y="1" width="8" height="1" />
        <rect x="3" y="2" width="3" height="1" />
        <rect x="10" y="2" width="3" height="1" />
        <rect x="2" y="3" width="2" height="2" />
        <rect x="12" y="3" width="2" height="2" />
        <rect x="2" y="5" width="2" height="1" />
        <rect x="12" y="5" width="2" height="1" />
        <rect x="3" y="6" width="10" height="2" />
        <rect x="2" y="8" width="12" height="1" />
      </g>

      {/* 3. PUNTOS (Blancos) */}
      <g fill={white}>
        {/* Punto central */}
        <rect x="6" y="2" width="4" height="1" />
        <rect x="4" y="3" width="8" height="3" />
        {/* Punto izquierdo */}
        <rect x="1" y="5" width="1" height="1" />
        <rect x="1" y="6" width="2" height="2" />
        <rect x="1" y="8" width="1" height="1" />
        {/* Punto derecho */}
        <rect x="14" y="5" width="1" height="1" />
        <rect x="13" y="6" width="2" height="2" />
        <rect x="14" y="8" width="1" height="1" />
      </g>

      {/* 4. ROSTRO / TALLO (Color Melocotón) */}
      <g fill={skinColor}>
        <rect x="4" y="10" width="8" height="1" />
        <rect x="3" y="11" width="10" height="1" />
        <rect x="2" y="12" width="4" height="2" />
        <rect x="7" y="12" width="2" height="2" />
        <rect x="10" y="12" width="4" height="2" />
        <rect x="2" y="14" width="12" height="1" />
      </g>
    </svg>
  );
}
