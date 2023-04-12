import { calculatorSVGs } from '../../../utils/entities/calculatorSVGs';
import { svgNames } from '../../../utils/entities/svgNames';
import styles from './WorkspaceConstruction.module.scss';

const WorkspaceConstruction = () => {
  return (
    <div className={styles.WorkspaceConstructionContainer}>
      <div className={`${styles.WorkspaceConstructionItem} ${styles.WorkspaceConstructionItem_image}`}>{calculatorSVGs[svgNames.workspaceSVG]}</div>
      <div className={`${styles.WorkspaceConstructionItem} ${styles.WorkspaceConstructionItem_special}`}>Перетащите сюда</div>
      <div className={`${styles.WorkspaceConstructionItem} ${styles.WorkspaceConstructionItem_common}`}>любой элемент из левой панели</div>
    </div>
  )
}

export default WorkspaceConstruction