import { useEffect, useRef } from "react";
import { Wrapper } from "./styles";
import PALLETE_COLORS from '../../helpers/colors';

const Canvas = ({ isDraw, width, height, setDrawCanvas }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if(!isDraw) return;

    const canvasDOM = canvasRef.current;
    const canvasCTX = canvasDOM.getContext('2d', { alpha: false });
    const colors = PALLETE_COLORS[Math.floor(Math.random() * PALLETE_COLORS.length)];

    const drawSquare = (color, size) => {
      canvasCTX.fillStyle = colors[color];
      canvasCTX.save();
      canvasCTX.translate(150, 150);
      canvasCTX.rotate(45 * Math.PI / 180);
      canvasCTX.fillRect(size / -2, size / -2, size, size);
      canvasCTX.restore();
    }

    const drawBackground = (color) => {
      canvasCTX.clearRect(0, 0, width, height);
      canvasCTX.fillStyle = colors[color];
      canvasCTX.fillRect(0, 0, 300, 300);
    }

    drawBackground(0);
    drawSquare(1, 150);
    drawSquare(2, 100);
    drawSquare(3, 50);

    setDrawCanvas(false);
  }, [isDraw, width, height, setDrawCanvas]);

  return (
    <Wrapper ref={ canvasRef } width={ width } height={ height } />
  );
}

export default Canvas;
