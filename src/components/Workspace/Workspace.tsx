import styles from './Workspace.module.scss'
import WorkspaceConstruction from './WorkspaceConstruction'

const Workspace = () => {
  return (
    <article className={styles.Workspace}>
      <WorkspaceConstruction />
    </article>
  )
}

export default Workspace