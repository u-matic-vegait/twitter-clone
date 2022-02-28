import { v4 as uuidv4 } from 'uuid'
import { RecommendedUserToFollowModel } from '../model/RecommendedUserToFollowModel'
import { TrendModel } from '../model/TrendModel'
import { TweetModel } from '../model/TweetModel'

export const recommendedTrends: TrendModel[] = [
  {
    category: 'Trending in Serbia',
    name: '#TikTok',
    numberOfTweets: 2300000,
  },
  {
    category: 'Trending in Serbia',
    name: 'Lorem ipsum',
    numberOfTweets: 40000,
  },
  {
    category: 'Technology · Trending',
    name: 'Blockchain',
    numberOfTweets: 1500000,
  },
  {
    category: 'Trending in Serbia',
    name: 'Bosnia',
    numberOfTweets: 2433,
  },
  {
    category: 'Turkish series · Trending',
    name: '#üçkuruş',
    numberOfTweets: 104000,
  },
]

export const recommendedUsers: RecommendedUserToFollowModel[] = [
  {
    userId: uuidv4(),
    imageUrl:
      'https://pbs.twimg.com/profile_images/849363901330444288/NIJM7JII_400x400.jpg',
    fullName: 'Dragan Djilas',
    tagName: '@DraganDjilas',
  },
  {
    userId: uuidv4(),
    imageUrl:
      'https://pbs.twimg.com/profile_images/1397395143246983169/3UFYu7VR_400x400.jpg',
    fullName: 'Rodoljub Sabic',
    tagName: '@RodoljubSabic',
  },
  {
    userId: uuidv4(),
    imageUrl:
      'https://pbs.twimg.com/profile_images/1241360180438237184/7Ma-Rzqq_400x400.jpg',
    fullName: 'Saša Janković',
    tagName: 'sasajankovic',
  },
]

export const tweets: TweetModel[] = [
  {
    id: uuidv4(),
    categoryName: 'Computer programming',
    userProfileImageUrl:
      'https://pbs.twimg.com/profile_images/1478902154245115908/kELI9gZD_400x400.jpg',
    userFullName: 'Michelle Bakels',
    userUsername: '@MichelleBakels',
    time: 13,
    content:
      'Web3 companies looking for React developers, we have vetted React developers 🚀',
    replyNumber: 24,
    retweetNumber: 14,
    likeNumber: 257,
  },
  {
    id: uuidv4(),
    categoryName: 'Open source',
    userProfileImageUrl:
      'https://pbs.twimg.com/profile_images/1296788415220985857/PdN6mQU0_400x400.jpg',
    userFullName: 'Eddie Jaoude | GitHub Star',
    userUsername: '@eddiejaoude',
    time: 17,
    content: `Q. What do you think has more value?

      3 years of ______
      ➡️ 1. a degree
      ➡️ 2. of open source experience
      
      Let me know below...`,
    replyNumber: 124,
    retweetNumber: 16,
    likeNumber: 227,
  },
  {
    id: uuidv4(),
    categoryName: 'Computer programming',
    userProfileImageUrl:
      'https://pbs.twimg.com/profile_images/1453064439444303872/64Mmkkg9_400x400.jpg',
    userFullName: 'Dan ',
    userUsername: '@khazifire',
    time: 8,
    content: `The design field is big and is always evolving. If you want to stay ahead of the game, you need to stay updated.

    Reading blogs will help you learn from others and avoid repeating the mistakes they might have made 😌
    
    Here are 12 UI/UX Design blogs you can explore 🧵👇`,
    replyNumber: 9,
    retweetNumber: 63,
    likeNumber: 207,
  },
]
