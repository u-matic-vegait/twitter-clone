import { v4 as uuidv4 } from 'uuid'
import { RecommendedUserToFollow } from '../model/RecommendedUserToFollow'
import { Trend } from '../model/Trend'

export const recommendedTrends: Trend[] = [
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

export const recommendedUsers: RecommendedUserToFollow[] = [
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
