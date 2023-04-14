import { useDrop } from 'react-dnd'
import styles from './Workspace.module.scss'
import WorkspaceConstruction from './WorkspaceConstruction'
import { typeFieldStrings } from '../../utils/entities/reactDnDHookStrings'

const Workspace = () => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: typeFieldStrings.calculatorDeskType,
    drop: (item: { id: string }) => addItemToWorkspace(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addItemToWorkspace = (id: string) => {
    console.log(id)
  }

  return (
    <article ref={drop} className={`${styles.Workspace} ${isOver && styles.Workspace_isOver}`}>
      <WorkspaceConstruction />
    </article>
  )
}

export default Workspace