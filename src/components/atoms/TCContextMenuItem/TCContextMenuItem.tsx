import './TCContextMenuItem.scss'
import { FunctionComponent } from 'react'
import { ContextMenuItemModel } from '../../../model/ContextMenuItemModel'
import { Icons } from '../../../assets/icons/Icons'

interface TCContextMenuItemProps {
  item: ContextMenuItemModel
}

export const TCContextMenuItem: FunctionComponent<TCContextMenuItemProps> = ({
  item,
}) => {
  return (
    <div className='tc-context-menu-item'>
      {item.iconName && (
        <img
          className='tc-context-menu-item__image'
          src={Icons[item.iconName as keyof typeof Icons]}
          alt='context_menu_item_icon'
        />
      )}
      <span className='tc-context-menu-item__text'>{item.text}</span>
    </div>
  )
}
