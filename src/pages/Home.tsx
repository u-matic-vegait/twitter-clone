import {
  recommendedTrendsPopupOptions,
  tweetOptions,
} from '../assets/popup_options_data/popup_options_data'
import { TCSearchbar } from '../components/atoms/TCSearchbar/TCSearchbar'
import { TCOptionsPopup } from '../components/molecules/TCOptionsPopup/TCOptionsPopup'
import { TCTermsOfService } from '../components/molecules/TCTermsOfService/TCTermsOfService'
import { TCAddTweet } from '../components/organisms/TCAddTweet/TCAddTweet'
import { TCRecommendedTrendList } from '../components/organisms/TCRecommendedTrendsList/TCRecommendedTrendsList'
import { TCRecommendedUsersToFollowlist } from '../components/organisms/TCRecommendedUserToFollowList/TCRecommendedUserToFollowList'
import { recommendedTrends, recommendedUsers } from '../test_data/data'

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: '1250px',
        justifyContent: 'space-between',
        columnGap: '16px',
      }}
    >
      <div style={{ width: '20%', backgroundColor: 'orange' }}>
        1 akdf kad fndal fndalj fndal fjndal fn daljf adnflad nflad nflda 1 akdf
        kad fndal fndalj fndal fjndal fn daljf adnflad nflad nflda 1 akdf kad
        fndal fndalj fndal fjndal fn daljf adnflad nflad nflda
      </div>
      <div
        style={{
          width: '50%',
          border: '1px solid gray',
        }}
      >
        <TCAddTweet />
      </div>
      <div style={{ width: '30%' }}>
        <TCSearchbar />
        <TCRecommendedTrendList trends={recommendedTrends} />
        <TCRecommendedUsersToFollowlist users={recommendedUsers} />
        <TCTermsOfService />
      </div>
    </div>
  )
}
