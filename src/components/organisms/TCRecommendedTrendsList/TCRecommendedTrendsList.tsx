import './TCRecommendedTrendsList.scss'
import { FunctionComponent } from 'react'
import { TCRecommendedTrend } from '../../molecules/TCRecommendedTrend/TCRecommendedTrend'
import { IoSettingsOutline } from 'react-icons/io5'
import { Trend } from '../../../model/Trend'

interface TCRecommendedTrendListProps {
  trends: Trend[]
}

export const TCRecommendedTrendList: FunctionComponent<
  TCRecommendedTrendListProps
> = ({ trends }) => {
  return (
    <div className='trends'>
      <div className='header'>
        <p className='header__title'> Trends for you </p>
        <IoSettingsOutline className='header__settings-icon' />
      </div>
      {trends.map((trend) => (
        <TCRecommendedTrend trend={trend} key={trend.name} />
      ))}
      <div className='footer'>
        <p className='footer_text'>Show more</p>
      </div>
    </div>
  )
}
