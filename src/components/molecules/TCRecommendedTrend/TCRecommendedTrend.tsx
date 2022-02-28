import './TCRecommendedTrend.scss'
import { FunctionComponent } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import numbro from 'numbro'
import { TrendModel } from '../../../model/TrendModel'

interface TCRecommendedTrendProps {
  trend: TrendModel
}

export const TCRecommendedTrend: FunctionComponent<TCRecommendedTrendProps> = ({
  trend,
}) => {
  return (
    <>
      <div className='tc-trend'>
        <div className='tc-trend__content'>
          <p className='tc-trend__content__category'> {trend.category} </p>
          <p className='tc-trend__content__name'> {trend.name} </p>
          <p className='tc-trend__content__number-of-tweets'>
            {trend.numberOfTweets > 10000
              ? numbro(trend.numberOfTweets).format({
                  average: true,
                  totalLength: 2,
                })
              : numbro(trend.numberOfTweets).format({
                  thousandSeparated: true,
                })}{' '}
            Tweets
          </p>
        </div>
        <div className='tc-trend__options'>
          <HiDotsHorizontal className='tc-trend__options__more' />
        </div>
      </div>
    </>
  )
}
