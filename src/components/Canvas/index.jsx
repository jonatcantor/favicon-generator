import { useEffect, useRef } from "react";
import { Wrapper } from "./styles";
import PALLETE_COLORS from '../../helpers/colors';

const Canvas = ({ isDraw, width, height, setDrawCanvas, setCanvasData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if(!isDraw) return;
    
    const canvasDOM = canvasRef.current;
    const canvasCTX = canvasDOM.getContext('2d');
    const colors = PALLETE_COLORS[Math.floor(Math.random() * PALLETE_COLORS.length)];

    const drawCircle = (color, size, isStroke) => {
      canvasCTX.beginPath();
      canvasCTX.arc(150, 150, size / 2, 0, 360 * Math.PI / 180, false);
      canvasCTX.closePath();
      
      if(isStroke) {
        canvasCTX.strokeStyle = colors[color];
        canvasCTX.stroke();
      } else {        
        canvasCTX.fillStyle = colors[color];
        canvasCTX.fill();
      }
    }

    const drawSquare = (color, size) => {
      canvasCTX.save();
      canvasCTX.translate(150, 150);
      canvasCTX.rotate(45 * Math.PI / 180);
      
      if(isStroke) {
        canvasCTX.strokeStyle = colors[color];
        canvasCTX.strokeRect(size / -2, size / -2, size, size);
      } else {        
        canvasCTX.fillStyle = colors[color];
        canvasCTX.fillRect(size / -2, size / -2, size, size);
      }

      canvasCTX.restore();
    }

    const randomShape = Math.floor(Math.random() * 2);
    const isStroke = Math.floor(Math.random() * 2);

    canvasCTX.clearRect(0, 0, 300, 300);
    drawCircle(0, 300, false);
    
    if(randomShape === 0) {
      drawSquare(1, 150, isStroke);
      drawSquare(2, 100, isStroke);
      drawSquare(3, 50 , isStroke);
    }

    else {
      drawCircle(1, 150, isStroke);
      drawCircle(2, 100, isStroke);
      drawCircle(3, 50 , isStroke);
    }

    setDrawCanvas(false);
    setCanvasData(canvasDOM.toDataURL('image/png', 1));
  }, [isDraw, width, height, setDrawCanvas, setCanvasData]);

  return (
    <Wrapper ref={ canvasRef } width={ width } height={ height } />
  );
}

export default Canvas;
