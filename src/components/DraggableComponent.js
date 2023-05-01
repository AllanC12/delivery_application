import  { useState, useRef } from 'react';

const DraggableComponent = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef();


  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    const { offsetLeft, offsetTop } = ref.current;

    setOffset({ x: clientX - offsetLeft, y: clientY - offsetTop });
    setDragging(true);
  };


  const handleMouseMove = (e) => {
    let {offsetLeft,offsetTop} = ref.current
    const heightModal = ref.current.getBoundingClientRect().height
    const widthModal = ref.current.getBoundingClientRect().width
    const {innerWidth,innerHeight} = window
    const heightMax = innerHeight - heightModal - 25
    const widthMax = innerWidth - widthModal - 25
     
  if(offsetTop > innerHeight - heightModal - 5){
      setDragging(false)
      ref.current.style.setProperty("top",heightMax + 'px')
      return
    }else if(offsetTop < 0){
      setDragging(false)
      ref.current.style.setProperty("top", 15 + 'px')
      return
    }else if(offsetLeft > innerWidth - widthModal - 5){
      setDragging(false)
      ref.current.style.setProperty("left",widthMax + 'px')
      return
    }else if(offsetLeft < 0){
      setDragging(false)
      ref.current.style.setProperty("left", 15 + 'px')
      return
    }

 
    if (dragging) {
      const { clientX, clientY } = e;
      setPosition({ x: clientX - offset.x, y: clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    return
  };

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', left: position.x, top: position.y, zIndex: '4' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;