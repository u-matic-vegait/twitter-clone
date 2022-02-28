import './TCContextMenu.scss'
import { FunctionComponent } from 'react'
import { TCContextMenuItem } from '../../atoms/TCContextMenuItem/TCContextMenuItem'
import { ContextMenuItemModel } from '../../../model/ContextMenuItemModel'

interface TCContextMenuProps {
  items: ContextMenuItemModel[]
}

export const TCContextMenu: FunctionComponent<TCContextMenuProps> = ({
  items,
}) => {
  return (
    <div className='tc-context-menu'>
      {items.map((option) => (
        <TCContextMenuItem item={option} key={option.text} />
      ))}
    </div>
  )
}
