import './TCRecommendedTrendsList.scss'
import { FunctionComponent } from 'react'
import { TCRecommendedTrend } from '../../molecules/TCRecommendedTrend/TCRecommendedTrend'
import { IoSettingsOutline } from 'react-icons/io5'
import { TrendModel } from '../../../model/TrendModel'

interface TCRecommendedTrendListProps {
  trends: TrendModel[]
}

export const TCRecommendedTrendList: FunctionComponent<
  TCRecommendedTrendListProps
> = ({ trends }) => {
  return (
    <div className='tc-recommended-trends-list'>
      <div className='tc-recommended-trends-list__header'>
        <h1 className='tc-recommended-trends-list__header__title'>
          Trends for you
        </h1>
        <IoSettingsOutline className='tc-recommended-trends-list__header__settings-icon' />
      </div>
      <div className='tc-recommended-trends-list__trends'>
        {trends.map((trend) => (
          <TCRecommendedTrend trend={trend} key={trend.name} />
        ))}
      </div>
      <div className='tc-recommended-trends-list__options'>
        <p className='tc-recommended-trends-list__options__text'>Show more</p>
      </div>
    </div>
  )
}
