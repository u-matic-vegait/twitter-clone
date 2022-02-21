import './TCRecommendedTrend.scss'
import { FunctionComponent } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import numbro from 'numbro'
import { Trend } from '../../../model/Trend'

interface TCRecommendedTrendProps {
  trend: Trend
}

export const TCRecommendedTrend: FunctionComponent<TCRecommendedTrendProps> = ({
  trend,
}) => {
  return (
    <>
      <div className='trend'>
        <div>
          <p className='trend__category'> {trend.category} </p>
          <p className='trend__name'> {trend.name} </p>
          <p className='trend__numberOfTweets'>
            {numbro(trend.numberOfTweets).format({
              average: true,
              totalLength: 2,
            })}{' '}
            Tweets
          </p>
        </div>
        <div>
          <HiDotsHorizontal className='trend__threeDotsIcon' />
        </div>
      </div>
    </>
  )
}
