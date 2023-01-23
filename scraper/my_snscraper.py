import snscrape.modules.twitter as sntwitter
import pandas as pd

query = "(from:elonmusk) since:2022-08-01"
tweets = []
limit = 100


for tweet in sntwitter.TwitterSearchScraper(query).get_items():
    
    # print(vars(tweet))
    # break
    if len(tweets) == limit:
        break
    else:
        #tweets.append([tweet.date, tweet.user.username, tweet.content])
        #tweets.append(tweet.media)
        mediaurl = []
        if tweet.media:
            for medium in tweet.media:
                if isinstance(medium, sntwitter.Photo):
                    mediaurl.append(medium.fullUrl)
                    # pass
                elif isinstance(medium, sntwitter.Video):
                    for v in medium.variants:
                        mediaurl.append(v.url.replace("?tag=13", "").replace("?tag=10", ""))
                    # pass
                elif isinstance(medium, sntwitter.Gif):
                    for v in medium.variants:
                        mediaurl.append(v.url)
                        # mediaurl.append(v.url.replace("?tag=13", "").replace("?tag=10", ""))
        
        if mediaurl:
            tweets.append(mediaurl)

        

print(tweets)
        
# df = pd.DataFrame(tweets, columns=['Date', 'User', 'Tweet'])
# print(df)

# to save to csv
# df.to_csv('tweets.csv')