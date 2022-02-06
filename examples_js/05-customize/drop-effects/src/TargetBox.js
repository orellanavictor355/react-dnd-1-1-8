import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
const style = {
  border: '1px solid gray',
  height: '15rem',
  width: '15rem',
  padding: '2rem',
  textAlign: 'center',
}
export const TargetBox = () => {
  const [{ isActive }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  }))
  return (
    <div ref={drop} style={style}>
      {isActive ? 'Release to drop' : 'Drag item here'}
    </div>
  )
}
